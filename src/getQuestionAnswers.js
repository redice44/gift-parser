const answersRegex = /{(.*)}/;
const getQuestionAnswers = question => answersRegex.exec(question)[1].trim();

module.exports = getQuestionAnswers;
