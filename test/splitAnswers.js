const expect = require('chai').expect;

const getQuestionAnswers = require('../src/getQuestionAnswers');
const splitAnswers = require('../src/splitAnswers');

const questions = require('./data');

const testValidAnswers = question => {
  expect(splitAnswers(getQuestionAnswers(question.text))).to.deep.equal(question.rawAnswers);
};

describe('splitAnswers()', () => {
  it('should separate answers', () => {
    questions.valid.simpleMCs.forEach(testValidAnswers);
  });
});
