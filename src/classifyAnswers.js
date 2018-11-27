const ANSWER_BLANKS = require('./constants/answerBlanks');
const QUESTION_TYPES = require('./constants/questionTypes');

const sumCorrectAnswers = (acc, answer) => acc + answer.correct ? 1 : 0;
const classifyAnswer = answers => {
  const numCorrectAnswerFlags = answers.reduce(sumCorrectAnswers, 0);
  
  if (numCorrectAnswerFlags === 1) {
    return QUESTION_TYPES.MC;
  }
};

module.exports = classifyAnswer;
