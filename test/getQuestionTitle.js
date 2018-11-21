const expect = require('chai').expect;

const getQuestionTitle = require('../src/getQuestionTitle');

const questions = require('./data');

const testValidTitle = question => {
  expect(getQuestionTitle(question.text)).to.equal(question.title);
};
const testInvalidTitle = question => {
  expect(getQuestionTitle(question)).to.be.null;
};

describe('getQuestionTitle()', () => {
  it('should provide question title', () => {
    questions.valid.simpleMCs.forEach(testValidTitle);
  });
  it('should return null when there is no title', () => {
    questions.invalid.simpleTitles.forEach(testInvalidTitle);
  });
});
