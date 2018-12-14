const ANSWER_BLANKS = require('../constants/answerBlanks');
const FORMATS = require('../constants/formats');

const answersRegex = /{[\s\S]*}/;
const formatRegex = /^\[(html|moodle|plain|markdown)\]/;
const titleRegex = /^::.+::/;

const getQuestionBody = question => {
  let modQuestion = question.trim();
  const result = {};
  if (titleRegex.test(modQuestion)) {
    modQuestion = modQuestion.replace(titleRegex, '').trim();
  }
  if (formatRegex.test(modQuestion)) {
    result.format = FORMATS[formatRegex.exec(modQuestion)[1]];
    modQuestion = modQuestion.replace(formatRegex, '').trim();
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
      ...result,
      body: answerPieces.join(ANSWER_BLANKS),
      hasBlank: true
    };
  }

  return { ...result, body: answerPieces[0] };
};

module.exports = getQuestionBody;
