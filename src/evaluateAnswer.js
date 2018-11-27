const QUESTION_TYPES = require('./constants/questionTypes');

const trueRegex = /^T$|^TRUE$/;
const falseRegex = /^F$|^FALSE$/;
const matchRegex = /->/;
const weightRegex = /^%(-?\d+)%/;
const matchAnswer = answer => {
  const parts = answer.split(matchRegex);
  const key = parts[0].substr(1).trim();
  const value = parts[1].trim();
  return {
    match: {
      [key]: value
    },
    type: QUESTION_TYPES.MATCH
  };
};
const tfAnswer = isCorrect => ({
  correct: isCorrect,
  type: QUESTION_TYPES.TF
});

const evaluateAnswer = answer => {
  if (trueRegex.test(answer)) {
    return tfAnswer(true);
  }
  if (falseRegex.test(answer)) {
    return tfAnswer(false);
  }
  if (answer[0] === '=' && matchRegex.test(answer)) {
    return matchAnswer(answer);
  }
  if (answer.length === 0) {
    return {
      type: QUESTION_TYPES.ESSAY
    };
  }
  const result = {
    correct: answer[0] === '='
  };
  let modAnswer = answer.substr(1).trim();

  if (weightRegex.test(modAnswer)) {
    result.value = parseInt(modAnswer.match(weightRegex)[1]);
    modAnswer = modAnswer.replace(weightRegex, '');
  } else {
    result.value = result.correct ? 100 : 0;
  }

  result.text = modAnswer.trim();

  return result;
};

module.exports = evaluateAnswer;
