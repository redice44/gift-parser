const expect = require('chai').expect;

const QUESTION_TYPES = require('../src/constants/questionTypes');
const parser = require('../src/parser');
const parseQuestion = require('../src/parser').parseQuestion;
const questions = require('./data');

const testValidMC = data => {
  expect(parseQuestion(data.question)).to.deep.equal(data.result);
};

describe('parser', () => {
  it('should parse a set of MC questions', () => {
    expect(parser(questions.valid.simpleMCs.single.questions)).to.deep
      .equal(questions.valid.simpleMCs.single.results);
  });
});

describe('parseQuestion()', () => {
  it('should correctly classify and parse MC questions', () => {
    questions.valid.simpleMCs.set.forEach(testValidMC);
  });
});
