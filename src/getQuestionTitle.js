const titleRegex = /^::(.+)::.+$/;
const getQuestionTitle = question => {
  if (!titleRegex.test(question)) {
    return null;
  }

  return titleRegex.exec(question)[1];
};

module.exports = getQuestionTitle;
