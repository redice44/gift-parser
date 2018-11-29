const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{T}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      correct: true,
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
      correct: true,
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
      correct: false,
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
      correct: false,
    }],
    type: QUESTION_TYPES.TF
  }
};

const question005 = {
  question: 'body{T#yes}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      correct: true,
      feedback: 'yes'
    }],
    type: QUESTION_TYPES.TF
  }
};

const question006 = {
  question: 'body{T#incorrect#correct}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      correct: true,
      feedback: [
        'incorrect',
        'correct'
      ]
    }],
    type: QUESTION_TYPES.TF
  }
};

const question007 = {
  question: 'body<font size\="2">hello</font>{T}',
  result: {
    title: null,
    body: 'body<font size\="2">hello</font>',
    answers: [{
      correct: true
    }],
    type: QUESTION_TYPES.TF
  }
};

module.exports = {
  set: [
    question001,
    question002,
    question003,
    question004,
    question005,
    question006,
    question007
  ],
  single: {
    questions:
`${question001.question}

${question002.question}

${question003.question}

${question004.question}

${question005.question}

${question006.question}

${question007.question}`,
    results: [
      question001.result,
      question002.result,
      question003.result,
      question004.result,
      question005.result,
      question006.result,
      question007.result
    ]
  }
};
