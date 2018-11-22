const QUESTION_TYPES = require('../../../src/constants/questionTypes');

module.exports = [{
  text: '::title::Question Test and stuff { =answer ~ wrong ~wrong}',
  title: 'title',
  body: 'Question Test and stuff',
  type: QUESTION_TYPES.MC,
  answerString: '=answer ~ wrong ~wrong',
  rawAnswers: [
    '=answer',
    '~ wrong',
    '~wrong'
  ],
  answers: [{
    text: 'answer',
    correct: true,
    value: 100
  }, {
    text: 'wrong',
    correct: false,
    value: 0
  }, {
    text: 'wrong',
    correct: false,
    value: 0
  }]
}, {
  text: 'Question test {~wrong ~w =ans}',
  title: null,
  body: 'Question test',
  type: QUESTION_TYPES.MC,
  answerString: '~wrong ~w =ans',
  rawAnswers: [
    '~wrong',
    '~w',
    '=ans'
  ],
  answers: [{
    text: 'wrong',
    correct: false,
    value: 0
  }, {
    text: 'w',
    correct: false,
    value: 0
  }, {
    text: 'ans',
    correct: true,
    value: 100
  }]
}, {
  text: 'nospace{~wrong=ans~wrong}',
  title: null,
  body: 'nospace',
  type: QUESTION_TYPES.MC,
  answerString: '~wrong=ans~wrong',
  rawAnswers: [
    '~wrong',
    '=ans',
    '~wrong'
  ],
  answers: [{
    text: 'wrong',
    correct: false,
    value: 0
  }, {
    text: 'ans',
    correct: true,
    value: 100
  }, {
    text: 'wrong',
    correct: false,
    value: 0
  }]
}, {
  text: 'weights{~%50%wrong =ans ~%20%wrong}',
  title: null,
  body: 'weights',
  type: QUESTION_TYPES.MC,
  answerString: '~%50%wrong =ans ~%20%wrong',
  rawAnswers: [
    '~%50%wrong',
    '=ans',
    '~%20%wrong'
  ],
  answers: [{
    text: 'wrong',
    correct: false,
    value: 50
  }, {
    text: 'ans',
    correct: true,
    value: 100
  }, {
    text: 'wrong',
    correct: false,
    value: 20
  }]
}, {
  text: 'simple negative weights {~%-50%neg 50 =full credit ~ %-25% negative 25}',
  title: null,
  body: 'simple negative weights',
  type: QUESTION_TYPES.MC,
  answerString: '~%-50%neg 50 =full credit ~ %-25% negative 25',
  rawAnswers: [
    '~%-50%neg 50',
    '=full credit',
    '~ %-25% negative 25'
  ],
  answers: [{
    text: 'neg 50',
    correct: false,
    value: -50
  }, {
    text: 'full credit',
    correct: true,
    value: 100
  }, {
    text: 'negative 25',
    correct: false,
    value: -25
  }]
}];
