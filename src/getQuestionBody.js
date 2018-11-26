const ANSWER_BLANKS = require('./constants/answerBlanks');

const answersRegex = /{.*}/;
const titleRegex = /^::.+::/;

const getQuestionBody = question => {
  let modQuestion = question.trim();
  if (titleRegex.test(modQuestion)) {
    modQuestion = modQuestion.replace(titleRegex, '').trim();
  }

  if(!modQuestion) {
    throw new Error('Question requires body text.');
  }

  const answerPieces = modQuestion
    .split(answersRegex)
    .map(d => d.trim())
    .filter(d => d);

  if (answerPieces.length > 1) {
    return answerPieces.join(ANSWER_BLANKS);
  }

  return answerPieces[0];
};

module.exports = getQuestionBody;
