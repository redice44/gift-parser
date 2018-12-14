const answersRegex = /{([\s\S]*)}/;
const getQuestionAnswers = question => {
  if (!answersRegex.test(question)) {
    return null;
  }

  return answersRegex.exec(question)[1].trim();
};

module.exports = getQuestionAnswers;
