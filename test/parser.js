const expect = require('chai').expect;

const parser = require('../src/parser');
const parseQuestion = require('../src/parser').parseQuestion;
const questions = require('./data');

const testValid = data => {
  expect(parseQuestion(data.question)).to.deep.equal(data.result);
};

describe('parser', () => {
  it('should parse a set of MC questions', () => {
    expect(parser(questions.valid.simpleMCs.single.questions)).to.deep
      .equal(questions.valid.simpleMCs.single.results);
  });
  it('should parse a set of TF questions', () => {
    expect(parser(questions.valid.simpleTFs.single.questions)).to.deep
      .equal(questions.valid.simpleTFs.single.results);
  });
  it('should parse a set of Desc questions', () => {
    expect(parser(questions.valid.simpleDesc.single.questions)).to.deep
      .equal(questions.valid.simpleDesc.single.results);
  });
});

describe('parseQuestion()', () => {
  it('should correctly classify and parse MC questions', () => {
    questions.valid.simpleMCs.set.forEach(testValid);
  });
  it('should correctly classify and parse TF questions', () => {
    questions.valid.simpleTFs.set.forEach(testValid);
  });
  it('should correctly classify and parse Description questions', () => {
    questions.valid.simpleDesc.set.forEach(testValid);
  });
});
