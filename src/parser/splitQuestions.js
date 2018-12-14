const splitQuestions = inputString => 
  inputString.split('\n\n')
    .map(d => d.replace(/\n/g, ' ').trim())
    .filter(d => d);

module.exports = splitQuestions;
