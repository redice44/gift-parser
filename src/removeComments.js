const removeComments = inputString => 
  inputString.split('\n')
    .map(d => d.trim())
    .filter(d => !/^\/\//.test(d)).join('\n');

module.exports = removeComments;
