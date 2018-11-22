const ansFlagRegex = /(?=[~=])/;
const separateAnswers = answers =>
  answers.split(ansFlagRegex).map(d => d.trim());

module.exports = separateAnswers;
