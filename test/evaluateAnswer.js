const expect = require('chai').expect;

const evaluateAnswer = require('../src/evaluateAnswer');
const getQuestionAnswers = require('../src/getQuestionAnswers');
const splitAnswers = require('../src/splitAnswers');

const questions = require('./data');

const testValidAnswer = (answer, results) => {
  expect(evaluateAnswer(answer)).to.deep.equal(results);
};
const testValidQuestion = question => {
  const answers = splitAnswers(getQuestionAnswers(question.text));
  answers.forEach((answer, index) => {
    testValidAnswer(answer, question.answers[index]);
  });
};

describe('evaluateAnswer()', () => {
  it('should evaluate the answer', () => {
    questions.valid.simpleMCs.forEach(testValidQuestion);
  });
});
