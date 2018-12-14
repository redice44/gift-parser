const feedbackRegex = /#/;
const minMaxRegex = /\.\./;
const rangeRegex = /:/;
const weightRegex = /%(-?\d+\.?\d*)%/;
const withFeedback = (feedback, answer) => {
  if (!feedback) {
    return answer;
  }

  return { ...answer, feedback };
};

const evaluateNumeric = answer => {
  if (minMaxRegex.test(answer)) {
    const numberSplit = answer.split(minMaxRegex).map(d => parseFloat(d));
    return {
      max: Math.max(...numberSplit),
      min: Math.min(...numberSplit)
    };
  }
  if (rangeRegex.test(answer)) {
    const numberSplit = answer.split(rangeRegex);
    return {
      value: parseFloat(numberSplit[0]),
      range: parseFloat(numberSplit[1])
    };
  }
  return { value: parseFloat(answer) };
};

const evaluateNumericAnswer = answer => {
  let _answer = answer;
  let feedback;
  if (feedbackRegex.test(_answer)) {
    const answerSplit = _answer.split(feedbackRegex).map(d => d.trim());
    _answer = answerSplit[0];
    feedback = answerSplit[1];
  }
  if (_answer[0] === '=') {
    _answer = _answer.substr(1);
    if (weightRegex.test(_answer)) {
      const weight = parseFloat(_answer.match(weightRegex)[1]);
      _answer = _answer.replace(weightRegex, '');
      const result = evaluateNumeric(_answer);
      result.weight = weight;
      return withFeedback(feedback, result);
    }
  }

  return withFeedback(feedback, evaluateNumeric(_answer));
};

module.exports = evaluateNumericAnswer;
