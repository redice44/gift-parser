const FORMATS = Object.values(require('../constants/formats'));

const buildBody = question => {
  const { body, format } = question;
  let prefix = '';
  if (typeof body !== 'string') {
    throw new Error('Body must be a string.');
  }
  if (format) {
    if (!FORMATS.includes(format)) {
      throw new Error(`Invalid format: ${format}.`);
    }
    prefix = `[${format}]`;
  }

  return `${prefix}${body.trim()}`;
};

module.exports = buildBody;
