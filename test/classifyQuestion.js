const expect = require('chai').expect;

const classifyQuestion = require('../src/classifyQuestion');
const evaluateAnswer = require('../src/evaluateAnswer');
const getQuestionAnswers = require('../src/getQuestionAnswers');
const getQuestionBody = require('../src/getQuestionBody');
const separateAnswers = require('../src/separateAnswers');

const questions = require('./data');

const testValidQuestion = question => {
  const analyzedQuestion = {
    body: getQuestionBody(question.text),
    answers: separateAnswers(getQuestionAnswers(question.text)).map(evaluateAnswer)
  };

  expect(classifyQuestion(analyzedQuestion)).to.equal(question.type);
};

describe('classifyQuestion()', () => {
  it('should properly classify Multiple Choice', () => {
    questions.valid.simpleMCs.forEach(testValidQuestion);
  });
});
