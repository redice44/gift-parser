const ANSWER_BLANKS = require('./constants/answerBlanks');

const answersRegex = /{[\s\S]*}/;
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
    .map(d => d.replace(/\n/g, ' ').trim())
    .filter(d => d);

  if (answerPieces.length > 1) {
    return {
      body: answerPieces.join(ANSWER_BLANKS),
      hasBlank: true
    };
  }

  return { body: answerPieces[0] };
};

module.exports = getQuestionBody;
