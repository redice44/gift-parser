const expect = require('chai').expect;

const ANSWER_BLANKS = require('../src/constants/answerBlanks');
const getQuestionBody = require('../src/getQuestionBody');

const testValidBody = question => {
  expect(getQuestionBody(question.text)).to.equal(question.body);
};
const testShouldError = question => {
  expect(() => getQuestionBody(question)).to.throw();
};

describe('getQuestionBody()', () => {
  it('should return the question body', () => {
    [{
      text: '::title::body{}',
      body: 'body'
    }, {
      text: '::title:: body{}',
      body: 'body'
    }, {
      text: `::title:: body
again {}`,
      body: 'body again'
    }, {
      text: `body
again
{}`,
      body: 'body again'
    }, {
      text: '::title:: body{}again',
      body: `body${ANSWER_BLANKS}again`
    }, {
      text: `::title:: body{
}again`,
      body: `body${ANSWER_BLANKS}again`
    }, {
      text: 'body{}',
      body: 'body'
    }, {
      text: ' body {}',
      body: 'body'
    }, {
      text: 'body{}again',
      body: `body${ANSWER_BLANKS}again`
    }, {
      text: `body{
}again`,
      body: `body${ANSWER_BLANKS}again`
    }].forEach(testValidBody);
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
