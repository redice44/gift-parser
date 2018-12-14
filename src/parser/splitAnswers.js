const ansFlagRegex = /[~=]/g;
const separateAnswers = answers => {
  let regexResult;
  const splitAnswers = [];
  let start = 0;
  let end = 0;
  while ((regexResult = ansFlagRegex.exec(answers)) !== null) {
    end = regexResult.index;
    if (end === 0) {
      continue;
    }

    if (answers[end - 1] !== '\\') {
      splitAnswers.push(answers.substring(start, end).trim());
      start = end;
   }
  }

  splitAnswers.push(answers.substring(start).trim());
  return splitAnswers;
};

module.exports = separateAnswers;
