const classifyAnswers = require('./classifyAnswers');
const evaluateAnswer = require('./evaluateAnswer');
const getAnswers = require('./getQuestionAnswers');
const getBody = require('./getQuestionBody');
const getTitle = require('./getQuestionTitle');
const removeComments = require('./removeComments');
const splitAnswers = require('./splitAnswers');
const splitQuestions = require('./splitQuestions');

const cleanAndSplit = input => splitQuestions(removeComments(input));
const parseQuestion = question => {
  const title = getTitle(question);
  let body;
  try {
    body = getBody(question);
  } catch (error) {

  }
  const answerString = getAnswers(question);
  if (!answerString) {
    // description type
    return;
  }
  const answers = splitAnswers(answerString).map(evaluateAnswer);
  const type = classifyAnswers(answers);
  return { title, body, answers, type };
};
  
const parser = input => cleanAndSplit(input).map(parseQuestion);

module.exports = parser;
module.exports.parseQuestion = parseQuestion;
