const expect = require('chai').expect;

const getQuestionAnswers = require('../src/getQuestionAnswers');

const questions = require('./data');

const testValidAnswers = question => {
  expect(getQuestionAnswers(question.text)).to.equal(question.answerString);
};

describe('getQuestionAnswers()', () => {
  it('should return answers', () => {
    questions.valid.simpleMCs.forEach(testValidAnswers);
  });
});
