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
  },
  [QUESTION_TYPES.MC]: answers => {
    if (answers.length < 2) {
      throw new Error(`Invalid ${QUESTION_TYPES.MC} answer format.`);
    }
    const answersText = answers.map(answer => {
      const symbol = answer.correct ? '=' : '~';
      const weight = answer.weight !== undefined && !answer.correct ? `%${answer.weight}%`: '';
      const feedback = answer.feedback ? `#${answer.feedback}` : '';

      return `${ANSWER_SPACING}${symbol}${weight}${answer.text}${feedback}`;
    }).join('\n');
    return answersText;
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
