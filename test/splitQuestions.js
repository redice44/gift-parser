const expect = require('chai').expect;

const splitQuestions = require('../src/splitQuestions');
const removeComments = require('../src/removeComments');

const questions = require('./data');
const questionSet = [{
  text: `
Invalid Question
possible answers

Next Question

Next next question
`,
  result: [
    'Invalid Question possible answers',
    'Next Question',
    'Next next question'
  ]
}, {
  text: 'Question Name',
  result: [
    'Question Name'
  ]
}];

const testQuestion = question => {
  expect(splitQuestions(question.text)).to.deep.equal(question.result);
};

describe('splitQuestions()', () => {
  it('should separate simple questions', () => {
    questionSet.forEach(testQuestion);
  });
  it('should separate example question set', () => {
    expect(splitQuestions(removeComments(questions.valid.exampleSet.questions)).length).to.equal(40);
  });
});
