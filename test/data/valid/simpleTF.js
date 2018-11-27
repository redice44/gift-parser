const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{T}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: null,
      correct: true,
      value: 100
    }],
    type: QUESTION_TYPES.TF
  }
};

const question002 = {
  question: 'body{TRUE}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      text: null,
      correct: true,
      value: 100
    }],
    type: QUESTION_TYPES.TF
  }
};

const question003 = {
  question: 'body{F}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      text: null,
      correct: false,
      value: 0
    }],
    type: QUESTION_TYPES.TF
  }
};

const question004 = {
  question: 'body{FALSE}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      text: null,
      correct: false,
      value: 0
    }],
    type: QUESTION_TYPES.TF
  }
};

module.exports = {
  set: [
    question001,
    question002,
    question003,
    question004
  ],
  single: {
    questions:
`${question001.question}

${question002.question}

${question003.question}

${question004.question}`,
    results: [
      question001.result,
      question002.result,
      question003.result,
      question004.result
    ]
  }
};
