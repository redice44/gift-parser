const expect = require('chai').expect;

const QUESTION_TYPES = require('../src/constants/questionTypes');

const evaluateAnswer = require('../src/evaluateAnswer');

const testValidAnswer = answer => {
  expect(evaluateAnswer(answer.text)).to.deep.equal(answer.results);
};

describe('evaluateAnswer()', () => {
  it('should evaluate the MC answer', () => {
    [{
      text: '=ans',
      results: {
        text: 'ans',
        correct: true,
        value: 100
      }
    }, {
      text: '~wrong',
      results: {
        text: 'wrong',
        correct: false,
        value: 0
      }
    }, {
      text: '~%50%wrong',
      results: {
        text: 'wrong',
        correct: false,
        value: 50
      }
    }, {
      text: '~%-50%wrong',
      results: {
        text: 'wrong',
        correct: false,
        value: -50
      }
    }, {
      text: '~ wrong ',
      results: {
        text: 'wrong',
        correct: false,
        value: 0
      }
    }, {
      text: '~ %50% wrong',
      results: {
        text: 'wrong',
        correct: false,
        value: 50
      }
    }, {
      text: '~ %-50% wrong',
      results: {
        text: 'wrong',
        correct: false,
        value: -50
      }
    }].forEach(testValidAnswer);
  });
  it('should evaluate the TF answer', () => {
    [{
      text: 'T',
      results: {
        text: null,
        correct: true,
        value: 100,
        type: QUESTION_TYPES.TF
      }
    }, {
      text: 'TRUE',
      results: {
        text: null,
        correct: true,
        value: 100,
        type: QUESTION_TYPES.TF
      }
    }, {
      text: 'F',
      results: {
        text: null,
        correct: false,
        value: 0,
        type: QUESTION_TYPES.TF
      }
    }, {
      text: 'FALSE',
      results: {
        text: null,
        correct: false,
        value: 0,
        type: QUESTION_TYPES.TF
      }
    }].forEach(testValidAnswer);
  });
  it('should evaluate the matching answer', () => {
    [{
      text: '=ans -> pair',
      results: {
        text: null,
        correct: null,
        value: 100,
        match: {
          ans: 'pair'
        },
        type: QUESTION_TYPES.MATCH
      }
    }, {
      text: '=ans->pair',
      results: {
        text: null,
        correct: null,
        value: 100,
        match: {
          ans: 'pair'
        },
        type: QUESTION_TYPES.MATCH
      }
    }, {
      text: '= ans ->  pair',
      results: {
        text: null,
        correct: null,
        value: 100,
        match: {
          ans: 'pair'
        },
        type: QUESTION_TYPES.MATCH
      }
    }].forEach(testValidAnswer);
  })
});
