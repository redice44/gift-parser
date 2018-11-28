const minMaxRegex = /\.\./;
const rangeRegex = /:/;
const weightRegex = /%(-?\d+)%/;

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
  let modAnswer = answer;
  if (modAnswer[0] === '=') {
    modAnswer = answer.substr(1)
    if (weightRegex.test(modAnswer)) {
      const weight = parseInt(modAnswer.match(weightRegex)[1]);
      modAnswer = modAnswer.replace(weightRegex, '');
      const result = evaluateNumeric(modAnswer);
      result.weight = weight;
      return result;
    }
  }

  return evaluateNumeric(modAnswer);
};

module.exports = evaluateNumericAnswer;
