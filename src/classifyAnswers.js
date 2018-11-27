const QUESTION_TYPES = require('./constants/questionTypes');

const sumCorrectAnswers = (acc, answer) => acc + (answer.correct ? 1 : 0);
const sumIncorrectAnswers = (acc, answer) => acc + (answer.correct ? 0 : 1);
const classifyAnswer = answers => {
  const flags = {
    correct: answers.reduce(sumCorrectAnswers, 0),
    incorrect: answers.reduce(sumIncorrectAnswers, 0)
  };
  
  if (flags.incorrect > 0) {
    return QUESTION_TYPES.MC;
  }
};

module.exports = classifyAnswer;
