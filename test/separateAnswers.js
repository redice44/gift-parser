const expect = require('chai').expect;

const getQuestionAnswers = require('../src/getQuestionAnswers');
const separateAnswers = require('../src/separateAnswers');

const questions = require('./data');

const testValidAnswers = question => {
  expect(separateAnswers(getQuestionAnswers(question.text))).to.deep.equal(question.rawAnswers);
};

describe('separateAnswers()', () => {
  it('should separate answers', () => {
    questions.valid.simpleMCs.forEach(testValidAnswers);
  });
});
