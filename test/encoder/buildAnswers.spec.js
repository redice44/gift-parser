const expect = require('chai').expect;

const QUESTION_TYPES = require('../../src/constants/questionTypes');
const {
  ANSWER_END,
  ANSWER_SPACING,
  ANSWER_START
} = require('../../src/constants/answerFormatting');

const buildAnswers = require('../../src/encoder/buildAnswers');

describe('buildAnswers()', () => {
  const expectTo = (answers, type) => expect(buildAnswers({ answers, type })).to;
  const expectToThrow = (answers, type) => expect(() => buildAnswers({ answers, type })).to.throw();

  it('should throw on invalid types.', () => {
    expectToThrow([]);
    expectToThrow([], 'foo');
  });
  it('should throw if answers are not an array.', () => {
    expectToThrow({}, QUESTION_TYPES.TF);
    expectToThrow('foo', QUESTION_TYPES.TF);
  });

  describe('TF question', () => {
    const expectTF = answers => expectTo(answers, QUESTION_TYPES.TF);
    const expectTFToThrow = answers => expectToThrow(answers, QUESTION_TYPES.TF);
    const buildTF = answers => `${ANSWER_START}${answers.map(answer => `${ANSWER_SPACING}${answer}`)}${ANSWER_END}`;

    it('should throw if the format is incorrect', () => {
      expectTFToThrow([1,2]);
      expectTFToThrow([{}]);
      expectTFToThrow([{ foo: 'bar' }]);
    });
    it('should format TF', () => {
      expectTF([{ correct: true }]).equal(buildTF(['T']));
      expectTF([{ correct: true, feedback: 'yes' }]).equal(buildTF(['T#yes']));
      expectTF([{ correct: true, feedback: ['yes', 'no'] }]).equal(buildTF(['T#yes#no']));
      expectTF([{ correct: false }]).equal(buildTF(['F']));
      expectTF([{ correct: false, feedback: 'yes' }]).equal(buildTF(['F#yes']));
      expectTF([{ correct: false, feedback: ['yes', 'no'] }]).equal(buildTF(['F#yes#no']));
    });
  });
});
