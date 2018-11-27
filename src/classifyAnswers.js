const ANSWER_BLANKS = require('./constants/answerBlanks');
const QUESTION_TYPES = require('./constants/questionTypes');

const sumCorrectAnswers = (acc, answer) => acc + (answer.correct ? 1 : 0);
const sumIncorrectAnswers = (acc, answer) => acc + (answer.correct ? 0 : 1);
const classifyAnswer = answers => {
  if (answers.length === 1 && answers[0].text === null) {
    return QUESTION_TYPES.TF;
  }
  const flags = {
    correct: answers.reduce(sumCorrectAnswers, 0),
    incorrect: answers.reduce(sumIncorrectAnswers, 0)
  };
  
  if (flags.correct > 1) {
    // matching or short answer
  } else if (flags.correct === 1) {
    if (flags.incorrect > 0) {
      return QUESTION_TYPES.MC;
    } else {
      // short answer
    }
  }
};

module.exports = classifyAnswer;
