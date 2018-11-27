const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body',
  result: {
    title: 'title',
    body: 'body',
    type: QUESTION_TYPES.DESCRIPTION
  }
};

const question002 = {
  question: 'body',
  result: {
    title: null,
    body: 'body',
    type: QUESTION_TYPES.DESCRIPTION
  }
};

module.exports = {
  set: [
    question001,
    question002
  ],
  single: {
    questions:
`${question001.question}

${question002.question}`,
    results: [
      question001.result,
      question002.result
    ]
  }
};
