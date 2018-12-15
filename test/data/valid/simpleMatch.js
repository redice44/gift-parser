const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{=ans->pair}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      match: ['ans', 'pair']
    }],
    type: QUESTION_TYPES.MATCH
  }
};

const question002 = {
  question: 'body{ = ans -> pair }',
  result: {
    title: null,
    body: 'body',
    answers: [{
      match: ['ans', 'pair']
    }],
    type: QUESTION_TYPES.MATCH
  }
};

const question003 = {
  question: 'body{= ans -> pair = foo -> bar}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      match: ['ans', 'pair']
    }, {
      match: ['foo', 'bar']
    }],
    type: QUESTION_TYPES.MATCH
  }
};

const question004 = {
  question: 'body{=ans->pair=foo->bar}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      match: ['ans', 'pair']
    }, {
      match: ['foo', 'bar']
    }],
    type: QUESTION_TYPES.MATCH
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
