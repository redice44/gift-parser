const QUESTION_TYPES = require('../constants/questionTypes');

const trueRegex = /^T$|^TRUE$/;
const falseRegex = /^F$|^FALSE$/;
const matchRegex = /->/;
const weightRegex = /^%(-?\d+\.?\d*?)%/;
const feedbackRegex = /#/;
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
const withFeedback = (feedback, answer) => {
  if (!feedback) {
    return answer;
  }

  return { ...answer, feedback };
};

const evaluateAnswer = answer => {
  let _answer = answer;
  let feedback;
  if (feedbackRegex.test(_answer)) {
    const answerSplit = _answer.split(feedbackRegex).map(d => d.trim());
    _answer = answerSplit[0];
    feedback = answerSplit.length > 2 ? answerSplit.slice(1) : answerSplit[1];
  }
  if (trueRegex.test(_answer)) {
    return withFeedback(feedback, tfAnswer(true));
  }
  if (falseRegex.test(_answer)) {
    return withFeedback(feedback, tfAnswer(false));
  }
  if (_answer[0] === '=' && matchRegex.test(_answer)) {
    return withFeedback(feedback, matchAnswer(_answer));
  }
  if (_answer.length === 0) {
    return {
      type: QUESTION_TYPES.ESSAY
    };
  }
  const result = {
    correct: _answer[0] === '='
  };
  _answer = _answer.substr(1).trim();

  if (weightRegex.test(_answer)) {
    result.weight = parseFloat(_answer.match(weightRegex)[1]);
    _answer = _answer.replace(weightRegex, '');
  } else {
    result.weight = result.correct ? 100 : 0;
  }

  result.text = _answer.trim();

  return withFeedback(feedback, result);
};

module.exports = evaluateAnswer;
