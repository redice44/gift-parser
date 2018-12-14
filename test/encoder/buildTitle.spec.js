const expect = require('chai').expect;

const buildTitle = require('../../src/encoder/buildTitle');

describe('buildTitle()', () => {
  it('should throw if title is not a string', () => {
    expect(() => buildTitle({ title: [] })).to.throw();
  });
  it('should return nothing if no title', () => {
    expect(buildTitle({})).to.equal('');
  });
  it('should return a formatted title', () => {
    expect(buildTitle({ title: 'foo' })).to.equal('::foo::');
    expect(buildTitle({ title: ' foo ' })).to.equal('::foo::');
  });
});
