const TITLE_START = '::';
const TITLE_END = '::';

const buildTitle = question => {
  const { title } = question;
  if (!title) {
    return '';
  }

  if (typeof title !== 'string') {
    throw new Error('Title must be a string.');
  }

  return `${TITLE_START}${title.trim()}${TITLE_END}`;
};

module.exports = buildTitle;
