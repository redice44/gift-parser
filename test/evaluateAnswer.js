const expect = require('chai').expect;

const evaluateAnswer = require('../src/evaluateAnswer');

const testValidAnswer = answer => {
  expect(evaluateAnswer(answer.text)).to.deep.equal(answer.results);
};

describe('evaluateAnswer()', () => {
  it('should evaluate the answer', () => {
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
});
