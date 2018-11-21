const expect = require('chai').expect;

const getQuestionTitle = require('../src/getQuestionTitle');

const questions = require('./data');

const testValidTitle = question => {
  expect(getQuestionTitle(question)).to.not.be.null;
};
const testInvalidTitle = question => {
  expect(getQuestionTitle(question)).to.be.null;
}

describe('getQuestionTitle()', () => {
  it('should provide question title', () => {
    expect(getQuestionTitle('::short::body')).to.equal('short');
    expect(getQuestionTitle('::longer title::body')).to.equal('longer title');
  });
  it('should have question titles', () => {
    questions.valid.simpleTitles.forEach(testValidTitle);
  });
  it('should return null when there is no title', () => {
    questions.invalid.simpleTitles.forEach(testInvalidTitle);
  });
});
