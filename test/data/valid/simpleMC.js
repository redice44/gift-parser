const FORMATS = require('../../../src/constants/formats');
const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{=ans~wrong~incorrect}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      weight: 100
    }, {
      text: 'wrong',
      correct: false,
      weight: 0
    }, {
      text: 'incorrect',
      correct: false,
      weight: 0
    }],
    type: QUESTION_TYPES.MC
  }
};

const question002 = {
  question: '::title::body{=ans~%33.33333%wrong~%-50%incorrect}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      text: 'ans',
      correct: true,
      weight: 100
    }, {
      text: 'wrong',
      correct: false,
      weight: 33.33333
    }, {
      text: 'incorrect',
      correct: false,
      weight: -50
    }],
    type: QUESTION_TYPES.MC
  }
};

const question003 = {
  question: '[html]body{=<font size\\="2">ans</font>#correct~%50%wrong#almost~%-50%incorrect#Completely Incorrect}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      text: '<font size\\="2">ans</font>',
      correct: true,
      weight: 100,
      feedback: 'correct'
    }, {
      text: 'wrong',
      correct: false,
      weight: 50,
      feedback: 'almost'
    }, {
      text: 'incorrect',
      correct: false,
      weight: -50,
      feedback: 'Completely Incorrect'
    }],
    format: FORMATS.html,
    type: QUESTION_TYPES.MC
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
