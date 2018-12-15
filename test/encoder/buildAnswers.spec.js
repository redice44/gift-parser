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
  const buildResults = answers => `${ANSWER_START}${answers.map(answer => `${ANSWER_SPACING}${answer}`).join('\n')}${ANSWER_END}`;

  it('should throw on invalid types.', () => {
    expectToThrow([]);
    expectToThrow([], 'foo');
  });
  it('should throw if answers are not an array.', () => {
    expectToThrow({}, QUESTION_TYPES.TF);
    expectToThrow('foo', QUESTION_TYPES.TF);
  });

  describe(`${QUESTION_TYPES.TF} question`, () => {
    const expectTF = answers => expectTo(answers, QUESTION_TYPES.TF);
    const expectTFToThrow = answers => expectToThrow(answers, QUESTION_TYPES.TF);

    it('should throw if the format is incorrect', () => {
      expectTFToThrow([1,2]);
      expectTFToThrow([{}]);
      expectTFToThrow([{ foo: 'bar' }]);
    });
    it(`should format ${QUESTION_TYPES.TF}`, () => {
      expectTF([{ correct: true }]).equal(buildResults(['T']));
      expectTF([{ correct: true, feedback: 'yes' }]).equal(buildResults(['T#yes']));
      expectTF([{ correct: true, feedback: ['yes', 'no'] }]).equal(buildResults(['T#yes#no']));
      expectTF([{ correct: false }]).equal(buildResults(['F']));
      expectTF([{ correct: false, feedback: 'yes' }]).equal(buildResults(['F#yes']));
      expectTF([{ correct: false, feedback: ['yes', 'no'] }]).equal(buildResults(['F#yes#no']));
    });
  });
  describe(`${QUESTION_TYPES.MC} question`, () => {
    const expectMC = answers => expectTo(answers, QUESTION_TYPES.MC);
    const expectMCToThrow = answers => expectToThrow(answers, QUESTION_TYPES.MC);
    
    it('should throw if the format is incorrect', () => {
      expectMCToThrow([]);
      expectMCToThrow([1]);
    });
    it(`it should format ${QUESTION_TYPES.MC}`, () => {
      const correctAnswer = {
        input: { text: 'cor', correct: true },
        output: '=cor'
      };
      const incorrectAnswer = {
        input: { text: 'inc', correct: false },
        output: '~inc'
      };
      const weigthedAnswer = {
        input: { text: 'weight', correct: false, weight: 50 },
        output: '~%50%weight'
      };
      const negWeigthedAnswer = {
        input: { text: 'neg weight', correct: false, weight: -50 },
        output: '~%-50%neg weight'
      };
      const correctFeedback = {
        input: { text: 'correct', correct: true, feedback: 'yes', weight: 100 },
        output: '=correct#yes'
      };
      const incorrectFeedback = {
        input: { text: 'inc', correct: false, feedback: 'no', weight: 75 },
        output: '~%75%inc#no'
      };

      expectMC([
        correctAnswer.input,
        incorrectAnswer.input,
        incorrectAnswer.input
      ]).equal(buildResults([
        correctAnswer.output,
        incorrectAnswer.output,
        incorrectAnswer.output
      ]));
      expectMC([
        correctAnswer.input,
        weigthedAnswer.input,
        incorrectAnswer.input
      ]).equal(buildResults([
        correctAnswer.output,
        weigthedAnswer.output,
        incorrectAnswer.output
      ]));
      expectMC([
        correctAnswer.input,
        weigthedAnswer.input,
        negWeigthedAnswer.input
      ]).equal(buildResults([
        correctAnswer.output,
        weigthedAnswer.output,
        negWeigthedAnswer.output
      ]));
      expectMC([
        correctFeedback.input,
        weigthedAnswer.input,
        negWeigthedAnswer.input,
        incorrectFeedback.input
      ]).equal(buildResults([
        correctFeedback.output,
        weigthedAnswer.output,
        negWeigthedAnswer.output,
        incorrectFeedback.output
      ]));
    });
  });
  describe(`${QUESTION_TYPES.ESSAY} question`, () => {
    const expectEssay = answers => expectTo(answers, QUESTION_TYPES.ESSAY);

    it(`should format ${QUESTION_TYPES.ESSAY}`, () => {
      expectEssay([]).equal('{\n\n}');
    });
  });
  describe(`${QUESTION_TYPES.MATCH} question`, () => {
    const expectMATCH = answers => expectTo(answers, QUESTION_TYPES.MATCH);
    const expectMATCHToThrow = answers => expectToThrow(answers, QUESTION_TYPES.MATCH);

    it('should throw if the format is incorrect', () => {
      expectMATCHToThrow([]);
      expectMATCHToThrow([1, 2]);
    });
    it(`should format ${QUESTION_TYPES.MATCH}`, () => {
      const pair1 = {
        input: { match: ['foo', 'bar'] },
        output: '=foo->bar'
      };
      const pair2 = {
        input: { match: ['key', 'val'] },
        output: '=key->val'
      };
      const pair3 = {
        input: { match: ['one', '1'] },
        output: '=one->1'
      };
      const pair4 = {
        input: { match: ['true', 'false'], feedback: 'yup' },
        output: '=true->false#yup'
      };

      expectMATCH([pair1.input, pair2.input, pair3.input, pair4.input])
        .equal(buildResults([pair1.output, pair2.output, pair3.output, pair4.output]));


    });
  });
});
