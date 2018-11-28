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
  it('should parse a set of Matching questions', () => {
    expect(parser(questions.valid.simpleMatch.single.questions)).to.deep
      .equal(questions.valid.simpleMatch.single.results);
  });
  it('should parse a set of Essay questions', () => {
    expect(parser(questions.valid.simpleEssay.single.questions)).to.deep
      .equal(questions.valid.simpleEssay.single.results);
  });
  it('should parse a set of Short Answer questions', () => {
    expect(parser(questions.valid.simpleShort.single.questions)).to.deep
      .equal(questions.valid.simpleShort.single.results);
  });
  it('should parse a set of Numeric questions', () => {
    expect(parser(questions.valid.simpleNumeric.single.questions)).to.deep
      .equal(questions.valid.simpleNumeric.single.results);
  });
  it('should parse a set of Fill in the Blank questions', () => {
    expect(parser(questions.valid.simpleBlanks.single.questions)).to.deep
      .equal(questions.valid.simpleBlanks.single.results);
  });
  it('should parse the example question set', () => {
    expect(parser(questions.valid.exampleSet.questions)).to.deep
      .equal(questions.valid.exampleSet.results);
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
  it('should correctly classify and parse Matching questions', () => {
    questions.valid.simpleMatch.set.forEach(testValid);
  });
  it('should correctly classify and parse Essay questions', () => {
    questions.valid.simpleEssay.set.forEach(testValid);
  });
  it('should correctly classify and parse Short Answer questions', () => {
    questions.valid.simpleShort.set.forEach(testValid);
  });
  it('should correctly classify and parse Numeric questions', () => {
    questions.valid.simpleNumeric.set.forEach(testValid);
  });
  it('should correctly classify and parse Fill in the Blank questions', () => {
    questions.valid.simpleBlanks.set.forEach(testValid);
  });
});
