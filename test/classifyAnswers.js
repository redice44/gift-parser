const expect = require('chai').expect;

const QUESTION_TYPES = require('../src/constants/questionTypes');
const classifyAnswer = require('../src/classifyAnswers');

const testValidMCAnswer = answers => {
  expect(classifyAnswer(answers)).to.equal(QUESTION_TYPES.MC);
};

describe('classifyAnswer()', () => {
  it('should classify MC answers', () => {
    [
      [{
        text: 'ans',
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
      }],
      [{
        text: 'ans',
        correct: true,
        value: 100
      }, {
        text: 'wrong',
        correct: false,
        value: 50
      }, {
        text: 'wrong',
        correct: false,
        value: 0
      }]
    ].forEach(testValidMCAnswer);
  });
});
