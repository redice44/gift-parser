const expect = require('chai').expect;

const QUESTION_TYPES = require('../src/constants/questionTypes');
const classifyAnswer = require('../src/classifyAnswers');

const testValidAnswers = (answers, type) => {
  expect(classifyAnswer(answers)).to.equal(type);
};
const testValidMCAnswers = answers => {
  testValidAnswers(answers, QUESTION_TYPES.MC);
};
const testValidTFAnswers = answers => {
  testValidAnswers(answers, QUESTION_TYPES.TF);
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
    ].forEach(testValidMCAnswers);
  });
  it('should classify TF answers', () => {
    [
      [{
        text: null,
        correct: true,
        value: 100
      }],
      [{
        text: null,
        correct: false,
        value: 0
      }]
    ].forEach(testValidTFAnswers);
  });
});
