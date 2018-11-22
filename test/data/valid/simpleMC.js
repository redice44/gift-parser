module.exports = [{
  text: '::title::Question Test and stuff { =answer ~ wrong ~wrong}',
  title: 'title',
  body: 'Question Test and stuff',
  answerString: '=answer ~ wrong ~wrong',
  rawAnswers: [
    '=answer',
    '~ wrong',
    '~wrong'
  ]
}, {
  text: 'Question test {~wrong ~w =ans}',
  title: null,
  body: 'Question test',
  answerString: '~wrong ~w =ans',
  rawAnswers: [
    '~wrong',
    '~w',
    '=ans'
  ]
}, {
  text: 'nospace{~wrong=ans~wrong}',
  title: null,
  body: 'nospace',
  answerString: '~wrong=ans~wrong',
  rawAnswers: [
    '~wrong',
    '=ans',
    '~wrong'
  ]
}, {
  text: 'weights{~%50%wrong =ans ~%20%wrong}',
  title: null,
  body: 'weights',
  answerString: '~%50%wrong =ans ~%20%wrong',
  rawAnswers: [
    '~%50%wrong',
    '=ans',
    '~%20%wrong'
  ]
}];
