const QUESTION_TYPE = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{}',
  result: {
    title: 'title',
    body: 'body',
    type: QUESTION_TYPE.ESSAY
  }
};

const question002 = {
  question: 'body{}',
  result: {
    title: null,
    body: 'body',
    type: QUESTION_TYPE.ESSAY
  }
};

const question003 = {
  question: `body { 
  }`,
  result: {
    title: null,
    body: 'body',
    type: QUESTION_TYPE.ESSAY
  }
};

module.exports = {
  set: [
    question001,
    question002,
    question003
  ],
  single: {
    questions:
`${question001.question}

${question002.question}

${question003.question}`,
    results: [
      question001.result,
      question002.result,
      question003.result
    ]
  }
};
