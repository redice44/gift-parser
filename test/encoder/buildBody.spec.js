const expect = require('chai').expect;

const FORMATS = Object.values(require('../../src/constants/formats'));

const buildBody = require('../../src/encoder/buildBody');

describe('buildBody()', () => {
  const body = 'Objectively network enabled niche markets for resource sucking imperatives. Collaboratively initiate alternative innovation without accurate.';
  const expectTo = (body, format) => expect(buildBody({ body, format })).to;
  const expectToThrow = (body, format) => expect(() => buildBody({ body, format })).to.throw();

  it('should throw if body is not a string', () => {
    expectToThrow([]);
  });
  it('should return a formatted body', () => {
    expectTo(body).equal(body);
    expectTo(' ').equal('');
  });
  it('should throw if format is invalid', () => {
    expectToThrow(body, 'foo');
  });
  it('should prepend format', () => {
    FORMATS.map(format => expectTo(body, format).equal(`[${format}]${body}`));
  });
});
