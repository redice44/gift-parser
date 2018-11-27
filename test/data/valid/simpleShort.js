const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{=ans=ans}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      value: 100
    }, {
      text: 'ans',
      correct: true,
      value: 100
    }],
    type: QUESTION_TYPES.SHORT
  }
};

const question002 = {
  question: 'body{=ans}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      value: 100
    }],
    type: QUESTION_TYPES.SHORT
  }
};

const question003 = {
  question: '::title::body{ = ans = ans }',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      value: 100
    }, {
      text: 'ans',
      correct: true,
      value: 100
    }],
    type: QUESTION_TYPES.SHORT
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
