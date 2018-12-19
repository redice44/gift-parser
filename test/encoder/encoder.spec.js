const expect = require('chai').expect;

const QUESTION_TYPES = require('../../src/constants/questionTypes');

const encoder = require('../../src/encoder');

describe('encoder', () => {
  const expectTo = questions => expect(encoder(questions)).to;
  const expectToThrow = questions => expect(() => encoder(questions)).to.throw();
  const buildResults = results => results.join('\n');

  it('should throw if incorrectly formatted', () => {
    expectToThrow('foo');
  });

  it('builds a set of questions', () => {
    const title = 'title';
    const body = 'some question body';
    const type = QUESTION_TYPES.MC;
    const correctAns = {
      input: { text: 'ans', correct: true },
      output: '=ans'
    };
    const incorrectAns = {
      input: { text: 'incorrect', correct: false },
      output: '~incorrect'
    };
    const feedbackAns = {
      input: { text: 'feedback', correct: false, feedback: 'yes' },
      output: '~feedback#yes'
    };
    const weightAns = {
      input: { text: 'weight', correct: false, weight: 50 },
      output: '~%50%weight'
    };
    const question1 = {
      input: {
        title,
        body,
        type,
        answers: [correctAns.input, incorrectAns.input]
      },
      output: `::${title}::${body}{
  ${correctAns.output}
  ${incorrectAns.output}
}
`
    };
    const question2 = {
      input: {
        title,
        body,
        type,
        answers: [correctAns.input, incorrectAns.input, feedbackAns.input, weightAns.input]
      },
      output: `::${title}::${body}{
  ${correctAns.output}
  ${incorrectAns.output}
  ${feedbackAns.output}
  ${weightAns.output}
}`
    };

    expectTo([question1.input, question2.input]).equal(buildResults([question1.output, question2.output]));
  });
});
