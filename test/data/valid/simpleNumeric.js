const QUESTION_TYPES = require('../../../src/constants/questionTypes');

const question001 = {
  question: '::title::body{#123}',
  result: {
    title: 'title',
    body: 'body',
    answers: [{
      value: 123
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question002 = {
  question: 'body{#1.23}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 1.23
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question003 = {
  question: 'body{#10:2}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 10,
      range: 2
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question004 = {
  question: 'body{#1.23:0.001}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 1.23,
      range: 0.001
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question005 = {
  question: 'body{#1..2}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      min: 1,
      max: 2
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question006 = {
  question: 'body{#2..1}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      min: 1,
      max: 2
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question007 = {
  question: 'body{#=123}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 123
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question008 = {
  question: 'body{#=123=%50%321}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 123
    }, {
      value: 321,
      weight: 50
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question009 = {
  question: 'body{#=10:2}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 10,
      range: 2
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question010 = {
  question: 'body{#=10:2=%50%20:4}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      value: 10,
      range: 2
    }, {
      value: 20,
      range: 4,
      weight: 50
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question011 = {
  question: 'body{#=1..2}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      min: 1,
      max: 2
    }],
    type: QUESTION_TYPES.NUMERIC
  }
};

const question012 = {
  question: 'body{#=1..2=%33.33333%4..2}',
  result: {
    title: null,
    body: 'body',
    answers: [{
      min: 1,
      max: 2
    }, {
      min: 2,
      max: 4,
      weight: 33.33333
    }],
    type: QUESTION_TYPES.NUMERIC
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
    question007,
    question008,
    question009,
    question010,
    question011,
    question012
  ],
  single: {
    questions:
`${question001.question}

${question002.question}

${question003.question}

${question004.question}

${question005.question}

${question006.question}

${question007.question}

${question008.question}

${question009.question}

${question010.question}

${question011.question}

${question012.question}`,
    results: [
      question001.result,
      question002.result,
      question003.result,
      question004.result,
      question005.result,
      question006.result,
      question007.result,
      question008.result,
      question009.result,
      question010.result,
      question011.result,
      question012.result
    ]
  }
};
