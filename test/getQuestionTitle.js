const expect = require('chai').expect;

const getQuestionTitle = require('../src/getQuestionTitle');

const testValidTitle = question => {
  expect(getQuestionTitle(question.text)).to.equal(question.title);
};
const testInvalidTitle = question => {
  expect(getQuestionTitle(question)).to.be.null;
};

describe('getQuestionTitle()', () => {
  it('should provide question title', () => {
    [{
      text: '::title::body{}',
      title: 'title'
    }, {
      text: `::title::
body{}`,
      title: 'title'
    }].forEach(testValidTitle);
  });
  it('should return null when there is no title', () => {
    [
      'body{}',
      ':title:'
    ].forEach(testInvalidTitle);
  });
});
