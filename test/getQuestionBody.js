const expect = require('chai').expect;

const getQuestionBody = require('../src/getQuestionBody');

const questions = require('./data');

const testValidBody = question => {
  expect(getQuestionBody(question.text)).to.equal(question.body);
};
const testShouldError = question => {
  expect(() => getQuestionBody(question)).to.throw();
};

describe('getQuestionBody()', () => {
  it('should return the question body', () => {
    questions.valid.simpleMCs.forEach(testValidBody);
  });
  it('should error if there is no question body', () => {
    [
      '',
      ' ',
      '     ',
      '::title::',
      '::title:: '
    ].forEach(testShouldError);
  });
});
