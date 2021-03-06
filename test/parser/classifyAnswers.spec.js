const expect = require('chai').expect;

const QUESTION_TYPES = require('../../src/constants/questionTypes');
const classifyAnswer = require('../../src/parser/classifyAnswers');

const testValidAnswers = (answers, type) => {
  expect(classifyAnswer(answers)).to.equal(type);
};
const testValidMCAnswers = answers => {
  testValidAnswers(answers, QUESTION_TYPES.MC);
};
const testValidShortAnswers = answers => {
  testValidAnswers(answers, QUESTION_TYPES.SHORT);
};

describe('classifyAnswer()', () => {
  it('should classify MC answers', () => {
    [
      [{
        text: 'ans',
        correct: true,
        weight: 100
      }, {
        text: 'wrong',
        correct: false,
        weight: 0
      }, {
        text: 'wrong',
        correct: false,
        weight: 0
      }],
      [{
        text: 'ans',
        correct: true,
        weight: 100
      }, {
        text: 'wrong',
        correct: false,
        weight: 50
      }, {
        text: 'wrong',
        correct: false,
        weight: 0
      }]
    ].forEach(testValidMCAnswers);
  });
  it('should classify Short Answer answers', () => {
    [
      [{
        text: 'ans',
        correct: true,
        weight: 100
      }, {
        text: 'ans',
        correct: true,
        weight: 100
      }],
      [{
        text: 'ans',
        correct: true,
        weight: 100
      }]
    ].forEach(testValidShortAnswers);
  });
});
