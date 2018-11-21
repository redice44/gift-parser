const expect = require('chai').expect;

const removeComments = require('../src/removeComments');
const splitQuestions = require('../src/splitQuestions');
const validateQuestion = require('../src/validateQuestion');

const questions = require('./data');

const testValidQuestion = question => testQuestion(question, true);
const testInvalidQuestion = question => testQuestion(question, false);
const testQuestion = (question, result) => {
  expect(validateQuestion(question)).to.equal(result);
};

describe('validateQuestion()', () => {
  it('should validate questions', () => {
    questions.valid.simpleQuestions.forEach(testValidQuestion);
  });
  it('should validate example question set', () => {
    splitQuestions(removeComments(questions.valid.exampleSet)).forEach(testValidQuestion);
  });
  it('should invalidate invalid questions', () => {
    questions.invalid.simpleQuestions.forEach(testInvalidQuestion);
  });
});
