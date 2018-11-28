const expect = require('chai').expect;

const QUESTION_TYPES = require('../src/constants/questionTypes');
const evaluateNumericAnswer = require('../src/evaluateNumericAnswer');

const testValidAnswer = answer => {
  expect(evaluateNumericAnswer(answer.text)).to.deep.equal(answer.results);
};

describe('evaluateNumericAnswer()', () => {
  it('should evaluate numbers', () => {
    [{
      text: '123',
      results: {
        value: 123
      }
    }, {
      text: '1.23',
      results: {
        value: 1.23
      }
    }, {
      text: '0.12',
      results: {
        value: 0.12
      }
    }, {
      text: '0012',
      results: {
        value: 12
      }
    }, {
      text: '=123',
      results: {
        value: 123
      }
    }, {
      text: '=%50%123',
      results: {
        value: 123,
        weight: 50
      }
    }, {
      text: '=%-50%123',
      results: {
        value: 123,
        weight: -50
      }
    }].forEach(testValidAnswer);
  });
  it('should evaluate number ranges', () => {
    [{
      text: '10:2',
      results: {
        value: 10,
        range: 2
      }
    }, {
      text: '11 : 0.002',
      results: {
        value: 11,
        range: 0.002
      }
    }, {
      text: '=10:2',
      results: {
        value: 10,
        range: 2
      }
    }, {
      text: '=%50%10:2',
      results: {
        value: 10,
        range: 2,
        weight: 50
      }
    }].forEach(testValidAnswer);
  });
  it('should evaluate number min and max', () => {
    [{
      text: '1..2',
      results: {
        min: 1,
        max: 2
      }
    }, {
      text: '2..1',
      results: {
        min: 1,
        max: 2
      }
    }, {
      text: '1.23..1.24',
      results: {
        min: 1.23,
        max: 1.24
      }
    }, {
      text: '=1..2',
      results: {
        min: 1,
        max: 2
      }
    }, {
      text: '=%50%2..1',
      results: {
        min: 1,
        max: 2,
        weight: 50
      }
    }].forEach(testValidAnswer);
  });
});
