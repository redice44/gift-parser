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
        weight: 100
      }
    }, {
      text: '~wrong',
      results: {
        text: 'wrong',
        correct: false,
        weight: 0
      }
    }, {
      text: '~%50%wrong',
      results: {
        text: 'wrong',
        correct: false,
        weight: 50
      }
    }, {
      text: '~%-50%wrong',
      results: {
        text: 'wrong',
        correct: false,
        weight: -50
      }
    }, {
      text: '~ wrong ',
      results: {
        text: 'wrong',
        correct: false,
        weight: 0
      }
    }, {
      text: '~ %50% wrong',
      results: {
        text: 'wrong',
        correct: false,
        weight: 50
      }
    }, {
      text: '~ %-50% wrong',
      results: {
        text: 'wrong',
        correct: false,
        weight: -50
      }
    }].forEach(testValidAnswer);
  });
  it('should evaluate the TF answer', () => {
    [{
      text: 'T',
      results: {
        correct: true,
        type: QUESTION_TYPES.TF
      }
    }, {
      text: 'TRUE',
      results: {
        correct: true,
        type: QUESTION_TYPES.TF
      }
    }, {
      text: 'F',
      results: {
        correct: false,
        type: QUESTION_TYPES.TF
      }
    }, {
      text: 'FALSE',
      results: {
        correct: false,
        type: QUESTION_TYPES.TF
      }
    }].forEach(testValidAnswer);
  });
  it('should evaluate the matching answer', () => {
    [{
      text: '=ans -> pair',
      results: {
        match: {
          ans: 'pair'
        },
        type: QUESTION_TYPES.MATCH
      }
    }, {
      text: '=ans->pair',
      results: {
        match: {
          ans: 'pair'
        },
        type: QUESTION_TYPES.MATCH
      }
    }, {
      text: '= ans ->  pair',
      results: {
        match: {
          ans: 'pair'
        },
        type: QUESTION_TYPES.MATCH
      }
    }].forEach(testValidAnswer);
  })
});
