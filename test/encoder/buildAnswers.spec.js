const expect = require('chai').expect;

const QUESTION_TYPES = require('../../src/constants/questionTypes');
const {
  ANSWER_END,
  ANSWER_NUMERIC_START,
  ANSWER_SPACING,
  ANSWER_START
} = require('../../src/constants/answerFormatting');

const buildAnswers = require('../../src/encoder/buildAnswers');

describe('buildAnswers()', () => {
  const expectTo = (answers, type) => expect(buildAnswers({ answers, type })).to;
  const expectToThrow = (answers, type) => expect(() => buildAnswers({ answers, type })).to.throw();
  const buildResults = (answers, isNumeric) =>
    `${isNumeric ? ANSWER_NUMERIC_START : ANSWER_START}${answers.map(answer =>
      `${ANSWER_SPACING}${answer}`
    ).join('\n')}${ANSWER_END}`;

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
  describe(`${QUESTION_TYPES.SHORT} question`, () => {
    const expectSHORT = answers => expectTo(answers, QUESTION_TYPES.SHORT);
    const expectSHORTToThrow = answers => expectToThrow(answers, QUESTION_TYPES.SHORT);
    
    it('should throw if the format is incorrect', () => {
      expectSHORTToThrow([]);
      expectSHORTToThrow([{}]);
    });
    it(`should format ${QUESTION_TYPES.SHORT}`, () => {
      const ans1 = {
        input: { text: 'ans', correct: true },
        output: '=ans'
      };
      const ans2 = {
        input: { text: 'answer', correct: true },
        output: '=answer'
      };
      const ansFeedback = {
        input: { text: 'ans', correct: true, feedback: 'yes' },
        output: '=ans#yes'
      };

      expectSHORT([
        ans1.input,
        ans2.input,
        ansFeedback.input
      ]).equal(buildResults([
        ans1.output,
        ans2.output,
        ansFeedback.output
      ]));
    });
  });
  describe(`${QUESTION_TYPES.NUMERIC} question`, () => {
    const expectNUMERIC = answers => expectTo(answers, QUESTION_TYPES.NUMERIC);
    const expectNUMERICToThrow = answers => expectToThrow(answers, QUESTION_TYPES.NUMERIC);

    it('should throw if the format is incorrect', () => {
      expectNUMERICToThrow([]);
      expectNUMERICToThrow([1]);
    });
    it(`it should format ${QUESTION_TYPES.NUMERIC}`, () => {
      const ans1 = {
        input: { value: 10 },
        output: '=10'
      };
      const ans2 = {
        input: { value: 10, range: 2 },
        output: '=10:2'
      };
      const ans3 = {
        input: { value: 10, feedback: 'yes' },
        output: '=10#yes'
      };
      const ans4 = {
        input: { value: 10, feedback: 'yes', weight: 50 },
        output: '=%50%10#yes'
      };
      const range1 = {
        input: { min: 1, max: 2 },
        output: '=1..2'
      };
      const range2 = {
        input: { min: 0, max: 10, feedback: 'yes' },
        output: '=0..10#yes'
      };
      const range3 = {
        input: { min: 0, max: 10, feedback: 'yes', weight: 75 },
        output: '=%75%0..10#yes'
      };

      expectNUMERIC([ans1.input]).equal(buildResults([ans1.output], true));
      expectNUMERIC([ans2.input]).equal(buildResults([ans2.output], true));
      expectNUMERIC([ans3.input]).equal(buildResults([ans3.output], true));
      expectNUMERIC([ans4.input]).equal(buildResults([ans4.output], true));
      expectNUMERIC([range1.input]).equal(buildResults([range1.output], true));
      expectNUMERIC([range2.input]).equal(buildResults([range2.output], true));
      expectNUMERIC([range3.input]).equal(buildResults([range3.output], true));
    });
  });
});
