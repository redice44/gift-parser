const QUESTION_TYPES = require('./constants/questionTypes');
const classifyAnswers = require('./classifyAnswers');
const evaluateAnswer = require('./evaluateAnswer');
const evaluateNumericAnswer = require('./evaluateNumericAnswer');
const getAnswers = require('./getQuestionAnswers');
const getBody = require('./getQuestionBody');
const getTitle = require('./getQuestionTitle');
const removeComments = require('./removeComments');
const splitAnswers = require('./splitAnswers');
const splitQuestions = require('./splitQuestions');

const cleanAndSplit = input => splitQuestions(removeComments(input));
const isDescription = answerString => answerString === null;
const isEssay = type => type === QUESTION_TYPES.ESSAY;
const isNumeric = answerString => answerString[0] === '#';
const noAnswers = (title, body, type) => ({ title, body, type });
const withAnswers = (title, body, answers, type) => ({ title, body, answers, type });
const parseQuestion = question => {
  const title = getTitle(question);
  let body;
  try {
    body = getBody(question);
  } catch (error) {
    // Manage bad input gracefully.
  }
  const answerString = getAnswers(question);
  if (isDescription(answerString)) {
    return noAnswers(title, body, QUESTION_TYPES.DESCRIPTION);
  }
  if (isNumeric(answerString)) {
    return withAnswers(
      title,
      body,
      splitAnswers(answerString.substr(1)).map(evaluateNumericAnswer),
      QUESTION_TYPES.NUMERIC
    );
  }
  const answers = splitAnswers(answerString).map(evaluateAnswer);
  if (answers[0].type) {
    if (isEssay(answers[0].type)) {
      return noAnswers(title, body, QUESTION_TYPES.ESSAY);
    }
    const type = answers[0].type;
    return withAnswers(
      title,
      body,
      answers.map(answer => {
        delete answer.type;
        return answer;
      }),
      type
    );
  }

  return withAnswers(title, body, answers, classifyAnswers(answers));
};
  
const parser = input => cleanAndSplit(input).map(parseQuestion);

module.exports = parser;
module.exports.parseQuestion = parseQuestion;
