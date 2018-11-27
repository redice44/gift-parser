const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{=ans~wrong~incorrect}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      value: 100
    }, {
      text: 'wrong',
      correct: false,
      value: 0
    }, {
      text: 'incorrect',
      correct: false,
      value: 0
    }],
    type: QUESTION_TYPES.MC
  }
};

const question002 = {
  question: '::title::body{=ans~%50%wrong~%-50%incorrect}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      value: 100
    }, {
      text: 'wrong',
      correct: false,
      value: 50
    }, {
      text: 'incorrect',
      correct: false,
      value: -50
    }],
    type: QUESTION_TYPES.MC
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
