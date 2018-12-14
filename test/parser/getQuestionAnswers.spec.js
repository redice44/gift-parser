const expect = require('chai').expect;

const getQuestionAnswers = require('../../src/parser/getQuestionAnswers');
const splitAnswers = require('../../src/parser/splitAnswers');

const testValidAnswers = question => {
  const answerString = getQuestionAnswers(question.text);
  expect(answerString).to.equal(question.answerString);
  if (answerString) {
    expect(splitAnswers(answerString)).to.deep.equal(question.answers);
  }
};

describe('getQuestionAnswers()', () => {
  it('should return answers', () => {
    const questions = [{
      text: 'body{}',
      answerString: '',
      answers: ['']
    }, {
      text: 'body{=ans~wrong~incorrect}',
      answerString: '=ans~wrong~incorrect',
      answers: [
        '=ans',
        '~wrong',
        '~incorrect'
      ]
    }, {
      text: 'body{  =ans ~wrong ~incorrect  }',
      answerString: '=ans ~wrong ~incorrect',
      answers: [
        '=ans',
        '~wrong',
        '~incorrect'
      ]
    }, {
      text: 'body{T}',
      answerString: 'T',
      answers: ['T']
    }, {
      text: 'body{FALSE}',
      answerString: 'FALSE',
      answers: ['FALSE']
    }, {
      text: 'body{}again',
      answerString: '',
      answers: ['']
    }, {
      text: 'body{=ans~wrong~incorrect}again',
      answerString: '=ans~wrong~incorrect',
      answers: [
        '=ans',
        '~wrong',
        '~incorrect'
      ]
    }, {
      text: 'body{T}again',
      answerString: 'T',
      answers: ['T']
    }, {
      text: 'body{FALSE}again',
      answerString: 'FALSE',
      answers: ['FALSE']
    }, {
      text: `body{
      }`,
      answerString: '',
      answers: ['']
    }, {
      text: `body{
        =ans
        ~wrong
        ~incorrect
      }`,
      answerString: `=ans
        ~wrong
        ~incorrect`,
      answers: [
        '=ans',
        '~wrong',
        '~incorrect'
      ]
    }, {
      text: `body{
        T
      }`,
      answerString: 'T',
      answers: ['T']
    }, {
      text: `body{
        FALSE}`,
      answerString: 'FALSE',
      answers: ['FALSE']
   }, {
     text: 'body',
     answerString: null
   }];
   questions.forEach(testValidAnswers);
  });
});
