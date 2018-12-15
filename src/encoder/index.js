const buildAnswers = require('./buildAnswers');
const buildBody = require('./buildBody');
const buildTitle = require('./buildTitle');

const encoder = questions => {
  if (!Array.isArray(questions)) {
    throw new Error(`Input must be an array.`);
  }

  return questions.map(question => {
    return `${buildTitle(question)}${buildBody(question)}${buildAnswers(question)}`;
  }).join('\n');
};

module.exports = encoder;
