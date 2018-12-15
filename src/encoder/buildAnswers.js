const QUESTION_TYPES = require('../constants/questionTypes');
const {
  ANSWER_END,
  ANSWER_SPACING,
  ANSWER_START
} = require('../constants/answerFormatting');

const answerFormaters = {
  [QUESTION_TYPES.TF]: answers => {
    if (answers.length > 1 || answers[0].correct === undefined) {
      throw new Error(`Invalid ${QUESTION_TYPES.TF} answer format.`);
    }
    const answer = answers[0];
    let feedback = '';
    if (answer.feedback) {
      if (Array.isArray(answer.feedback)) {
        feedback = answer.feedback.map(feedback => `#${feedback}`).join('');
      } else {
        feedback = `#${answer.feedback}`;
      }
    }

    return `${ANSWER_SPACING}${answer.correct ? 'T' : 'F'}${feedback}`;
  }
};

const buildAnswers = question => {
  const { answers, type } = question;
  if (!type || !Object.values(QUESTION_TYPES).includes(type)) {
    throw new Error('Requires a valid question type.');
  }
  if (!Array.isArray(answers)) {
    throw new Error('Answers must be an array.');
  }

  return `${ANSWER_START}${answerFormaters[type](answers)}${ANSWER_END}`;
};

module.exports = buildAnswers;
