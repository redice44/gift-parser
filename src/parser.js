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
const parseQuestion = question => {
  const result = {};
  result.title = getTitle(question);
  try {
    const { body, hasBlank } = getBody(question);
    result.body = body;
    if (hasBlank) {
      result.hasBlank = hasBlank;
    }
  } catch (error) {
    // Manage bad input gracefully.
  }
  const answerString = getAnswers(question);
  if (isDescription(answerString)) {
    return {
      ...result,
      type: QUESTION_TYPES.DESCRIPTION
    };
  }
  if (isNumeric(answerString)) {
    return {
      ...result,
      answers: splitAnswers(answerString.substr(1).trim()).map(evaluateNumericAnswer),
      type: QUESTION_TYPES.NUMERIC
    };
  }
  answers = splitAnswers(answerString).map(evaluateAnswer);
  if (answers[0].type) {
    if (isEssay(answers[0].type)) {
      return {
        ...result,
        type: QUESTION_TYPES.ESSAY
      };
    }
    const type = answers[0].type;
    return {
      ...result,
      answers: answers.map(answer => {
        delete answer.type;
        return answer;
      }),
      type
    };
  }

  return {
    ...result,
    answers,
    type: classifyAnswers(answers)
  };
};
  
const parser = input => cleanAndSplit(input).map(parseQuestion);

module.exports = parser;
module.exports.parseQuestion = parseQuestion;
