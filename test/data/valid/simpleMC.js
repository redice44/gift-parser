module.exports = [{
  text: '::title::Question Test and stuff { =answer ~ wrong ~wrong}',
  title: 'title',
  body: 'Question Test and stuff'
}, {
  text: 'Question test {~wrong ~w =ans}',
  title: null,
  body: 'Question test'
}, {
  text: 'nospace{~wrong=ans~wrong}',
  title: null,
  body: 'nospace'
}, {
  text: 'weights{~%50%wrong =ans %20%wrong}',
  title: null,
  body: 'weights'
}];