const expect = require('chai').expect;

const removeComments = require('../src/removeComments');

const questionSet = [{
  text: `
// Comment
// Comment

// Comment
  `,
  result: `

`
}, {
  text: ` // Comment

Possible Question Text
  // Comment `,
  result: `
Possible Question Text`
}, {
  text: `// Comment
Possible Question

this will // not be a comment`,
  result: `Possible Question

this will // not be a comment`
}];

const testQuestion = question => {
  expect(removeComments(question.text)).to.equal(question.result);
};

describe('removeComments()', () => {
  it('should remove comments from question file', () => {
    questionSet.forEach(testQuestion);
  });
});
