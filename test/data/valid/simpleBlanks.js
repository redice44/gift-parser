const ANSWER_BLANKS = require('../../../src/constants/answerBlanks');
const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{=ans~wrong}again',
  result: {
    title: 'title',
    body: `body${ANSWER_BLANKS}again`,
    answers: [{
      text: 'ans',
      correct: true,
      weight: 100
    }, {
      text: 'wrong',
      correct: false,
      weight: 0
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }
};

const question002 = {
  question: '::title::body{#=123=%50%321}again',
  result: {
    title: 'title',
    body: `body${ANSWER_BLANKS}again`,
    answers: [{
      value: 123
    }, {
      value: 321,
      weight: 50
    }],
    hasBlank: true,
    type: QUESTION_TYPES.NUMERIC
  }
};

const question003 = {
  question: 'body{=ans=foo}again',
  result: {
    title: null,
    body: `body${ANSWER_BLANKS}again`,
    answers: [{
      text: 'ans',
      correct: true,
      weight: 100
    }, {
      text: 'foo',
      correct: true,
      weight: 100
    }],
    hasBlank: true,
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
