const trueRegex = /^T$|^TRUE$/;
const falseRegex = /^F$|^FALSE$/;
const weightRegex = /^%(-?\d+)%/;
const evaluateAnswer = answer => {
  if (trueRegex.test(answer)) {
    return {
      text: null,
      correct: true,
      value: 100
    };
  }
  if (falseRegex.test(answer)) {
    return {
      text: null,
      correct: false,
      value: 0
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
