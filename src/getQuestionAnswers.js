const answersRegex = /{([\s\S]*)}/;
const getQuestionAnswers = question => answersRegex.exec(question)[1].trim();

module.exports = getQuestionAnswers;
