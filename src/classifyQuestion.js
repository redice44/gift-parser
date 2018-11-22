const ANSWER_BLANKS = require('./constants/answerBlanks');
const QUESTION_TYPES = require('./constants/questionTypes');

const sumCorrectAnswers = (acc, answer) => acc + answer.correct ? 1 : 0;
const classifyQuestion = question => {
  const numCorrectAnswerFlags = question.answers.reduce(sumCorrectAnswers, 0);
  console.log(numCorrectAnswerFlags);
  
  if (numCorrectAnswerFlags === 1) {
    return QUESTION_TYPES.MC;
  }

  return null;
};

module.exports = classifyQuestion;
