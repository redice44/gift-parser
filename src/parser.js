const QUESTION_TYPES = require('./constants/questionTypes');
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
    return {
      title,
      body,
      type: QUESTION_TYPES.DESCRIPTION
    }
  }
  const answers = splitAnswers(answerString).map(evaluateAnswer);
  let type;
  if (answers[0].type) {
    type = answers[0].type;
    answers.forEach(answer => { delete answer.type; });
  } else {
    type = classifyAnswers(answers);
  }
  return { title, body, answers, type };
};
  
const parser = input => cleanAndSplit(input).map(parseQuestion);

module.exports = parser;
module.exports.parseQuestion = parseQuestion;