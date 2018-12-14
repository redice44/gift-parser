const expect = require('chai').expect;

const ANSWER_BLANKS = require('../../src/constants/answerBlanks');
const getQuestionBody = require('../../src/parser/getQuestionBody');

const testValidBody = question => {
  expect(getQuestionBody(question.text)).to.deep.equal(question.results);
};
const testShouldError = question => {
  expect(() => getQuestionBody(question)).to.throw();
};

describe('getQuestionBody()', () => {
  it('should return the question body', () => {
    [{
      text: '::title::body{}',
      results: {
        body: 'body'
      }
    }, {
      text: '::title:: body{}',
      results: {
        body: 'body'
      }
    }, {
      text: `::title:: body
again {}`,
      results: {
        body: 'body again'
      }
    }, {
      text: `body
again
{}`,
      results: {
        body: 'body again'
      }
    }, {
      text: '::title:: body{}again',
      results: {
        body: `body${ANSWER_BLANKS}again`,
        hasBlank: true
      }
    }, {
      text: `::title:: body{
}again`,
      results: {
        body: `body${ANSWER_BLANKS}again`,
        hasBlank: true
      }
    }, {
      text: 'body{}',
      results: {
        body: 'body'
      }
    }, {
      text: ' body {}',
      results: {
        body: 'body'
      }
    }, {
      text: 'body{}again',
      results: {
        body: `body${ANSWER_BLANKS}again`,
        hasBlank: true
      }
    }, {
      text: `body{
}again`,
      results: {
        body: `body${ANSWER_BLANKS}again`,
        hasBlank: true
      }
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
