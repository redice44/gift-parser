const QUESTION_TYPES = require('../constants/questionTypes');
const {
  ANSWER_END,
  ANSWER_NUMERIC_START,
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
  },
  [QUESTION_TYPES.MATCH]: answers => {
    if (answers.length < 2) {
      throw new Error(`Invalid ${QUESTION_TYPES.MATCH} answer format.`);
    }
    return answers.map(answer => {
      if (!answer.match || !Array.isArray(answer.match)) {
        throw new Error(`Invalid ${QUESTION_TYPES.MATCH} answer format.`);
      }
      const feedback = answer.feedback ? `#${answer.feedback}` : '';

      return `${ANSWER_SPACING}=${answer.match[0]}->${answer.match[1]}${feedback}`;
    }).join('\n');
  },
  [QUESTION_TYPES.SHORT]: answers => {
    if (answers.length < 1) {
      throw new Error(`Invalid ${QUESTION_TYPES.SHORT} answer format.`);
    }
    return answers.map(answer => {
      if (!answer.correct) {
        throw new Error(`Invalid ${QUESTION_TYPES.SHORT} answer format.`);
      }
      let feedback = answer.feedback ? `#${answer.feedback}` : '';
      return `${ANSWER_SPACING}=${answer.text}${feedback}`;
    }).join('\n');
  },
  [QUESTION_TYPES.NUMERIC]: answers => {
    if (answers.length < 1) {
      throw new Error(`Invalid ${QUESTION_TYPES.NUMERIC} answer format.`);
    }

    return answers.map(answer => {
      const feedback = answer.feedback ? `#${answer.feedback}` : '';
      const weight = answer.weight ? `%${answer.weight}%` : '';
      let answerText = '';
      if (answer.value) {
        answerText = `${answer.value}${answer.range ? `:${answer.range}` : ''}`;
      } else if (answer.min !== undefined && answer.max !== undefined) {
        answerText = `${answer.min}..${answer.max}`;
      } else {
        throw new Error(`Invalid ${QUESTION_TYPES.NUMERIC} answer format.`);
      }
      return `${ANSWER_SPACING}=${weight}${answerText}${feedback}`;
    }).join('\n');
  }
};

const buildAnswers = question => {
  const { answers, type } = question;
  if (!type || !Object.values(QUESTION_TYPES).includes(type)) {
    throw new Error('Requires a valid question type.');
  }
  if (type === QUESTION_TYPES.DESCRIPTION) {
    return '';
  }
  if (type === QUESTION_TYPES.ESSAY) {
    return '{}';
  }
  if (!Array.isArray(answers)) {
    throw new Error('Answers must be an array.');
  }

  return `${type === QUESTION_TYPES.NUMERIC ? ANSWER_NUMERIC_START : ANSWER_START}${answerFormaters[type](answers)}${ANSWER_END}`;
};

module.exports = buildAnswers;
