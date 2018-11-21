const expect = require('chai').expect;

const getQuestionBody = require('../src/getQuestionBody');

const questions = require('./data');

const testValidBody = question => {
  expect(getQuestionBody(question.text)).to.equal(question.body);
};

describe('getQuestionBody()', () => {
  it('should return the question body', () => {
    questions.valid.simpleMCs.forEach(testValidBody);
  });
});
