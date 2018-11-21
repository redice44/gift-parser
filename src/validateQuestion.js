const isComment = question => /^\/\//.test(question);
const containsAnswers = question => /{.*}/.test(question);
const hasQuestionBeforeAnswers = question => /^.+{.*}/.test(question);
const hasQuestionAfterAnswers = question => /{.*}.+$/.test(question);

const validateQuestion = question => {
  if (isComment(question)) {
    return false;
  }

  if (!containsAnswers(question)) {
    return false;
  }

  return hasQuestionBeforeAnswers(question) || hasQuestionAfterAnswers(question);
};

module.exports = validateQuestion;
