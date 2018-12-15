const ANSWER_BLANKS = require('../../../src/constants/answerBlanks');
const QUESTION_TYPES = require('../../../src/constants/questionTypes');

module.exports = {
  questions:
`//  EXAMPLE QUESTIONS for the GIFT import filter
//  by Paul Tsuchido Shew, January 2004.

//-----------------------------------------//
//        EXAMPLES FROM DESCRIPTION
//-----------------------------------------//

Who's buried in Grant's tomb?{~Grant ~Jefferson =no one}

Grant is {~buried =entombed ~living} in Grant's tomb.

Grant is buried in Grant's tomb.{FALSE}

Who's buried in Grant's tomb?{=no one =nobody}

When was Ulysses S. Grant born?{#1822:1}


//-----------------------------------------//
//       EXAMPLES FROM DOCUMENTATION
//-----------------------------------------//

// ===Multiple Choice===

Who's buried in Grant's tomb?{~Grant ~Jefferson =no one}

Grant is {~buried =entombed ~living} in Grant's tomb.

The American holiday of Thanksgiving is celebrated on the {
    ~second
    ~third
    =fourth
} Thursday of November.

Japanese characters originally came from what country? {
    ~India
    =China
    ~Korea
    ~Egypt}

// ===Short Answer===

Who's buried in Grant's tomb?{=no one =nobody}

Two plus two equals {=four =4}.

// ===True-False===

Grant is buried in Grant's tomb.{F}

The sun rises in the east.{T}

// ===Numerical===

Matching Question. {
    =subquestion1 -> subanswer1
    =subquestion2 -> subanswer2
    =subquestion3 -> subanswer3
    }
    
Match the following countries with their corresponding capitals. {
    =Canada -> Ottawa
    =Italy  -> Rome
    =Japan  -> Tokyo
    =India  -> New Delhi
    }

// ===Numerical===

When was Ulysses S. Grant born? {#1822}

What is the value of pi (to 3 decimal places)? {#3.1415:0.0005}.

What is the value of pi (to 3 decimal places)? {#3.141..3.142}.

When was Ulysses S. Grant born? {#
    =1822:0
    =%50%1822:2}

// OPTIONS 

// ===Line Comments===

// Subheading: Numerical questions below
What's 2 plus 2? {#4}


// ===Question Name===

::Kanji Origins::Japanese characters originally
came from what country? {=China}

::Thanksgiving Date::The American holiday of Thanksgiving is 
celebrated on the {~second ~third =fourth} Thursday of November.

// ===Feedback===

What's the answer to this multiple-choice question?{
~wrong answer#feedback comment on the wrong answer
~another wrong answer#feedback comment on this wrong answer
=right answer#Very good!}
    
Who's buried in Grant's tomb?{
=no one#excellent answer!
=nobody#excellent answer!}

// ===Percentage Answer Weights===
Grant is buried in Grant's tomb.{FALSE#No one is buried in Grant's tomb.}

Difficult question.{~wrong answer ~%50%half credit answer =full credit answer}
         
::Jesus' hometown::Jesus Christ was from {
    ~Jerusalem#This was an important city, but the wrong answer.
    ~%25%Bethlehem#He was born here, but not raised here.
    ~%50%Galilee#You need to be more specific.
    =Nazareth#Yes! That's right!}.
    
::Jesus' hometown:: Jesus Christ was from {
    =Nazareth#Yes! That's right!
    =%75%Nazereth#Right, but misspelled.
    =%25%Bethlehem#He was born here, but not raised here.}

// ===Multiple Answers===

What two people are entombed in Grant's tomb? {
	~No one
	~%50%Grant
	~%50%Grant's wife
	~Grant's father }

What two people are entombed in Grant's tomb? {
	~%-50%No one
	~%50%Grant
	~%50%Grant's wife
	~%-50%Grant's father }

//-----------------------------------------//
//     EXAMPLES FROM gift/format.php
//-----------------------------------------//

Who's buried in Grant's tomb?{~Grant ~Jefferson =no one}

Grant is {~buried =entombed ~living} in Grant's tomb.

Grant is buried in Grant's tomb.{FALSE}

Who's buried in Grant's tomb?{=no one =nobody}

When was Ulysses S. Grant born?{#1822:5}

Match the following countries with their corresponding
capitals.{=Canada->Ottawa =Italy->Rome =Japan->Tokyo}

//-----------------------------------------//
//     MORE COMPLICATED EXAMPLES
//-----------------------------------------//

::Grant's Tomb::Grant is {
      ~buried#No one is buried there.
      =entombed#Right answer!
      ~living#We hope not!
} in Grant's tomb.

Difficult multiple choice question.{
     ~wrong answer           #comment on wrong answer
     ~%50%half credit answer #comment on answer
     =full credit answer     #well done!}

::Jesus' hometown (Short answer ex.):: Jesus Christ was from {
     =Nazareth#Yes! That's right!
     =%75%Nazereth#Right, but misspelled.
     =%25%Bethlehem#He was born here, but not raised here.
}.

//this comment will be ignored by the filter
::Numerical example::
When was Ulysses S. Grant born? {#
     =1822:0      #Correct! 100% credit
     =%50%1822:2  #He was born in 1822.
                  You get 50% credit for being close.
}
`,
  results: [{
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'Grant',
      correct: false,
      weight: 0
    }, {
      text: 'Jefferson',
      correct: false,
      weight: 0
    }, {
      text: 'no one',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: `Grant is${ANSWER_BLANKS}in Grant's tomb.`,
    answers: [{
      text: 'buried',
      correct: false,
      weight: 0
    }, {
      text: 'entombed',
      correct: true,
      weight: 100
    }, {
      text: 'living',
      correct: false,
      weight: 0
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "Grant is buried in Grant's tomb.",
    answers: [{
      correct: false
    }],
    type: QUESTION_TYPES.TF
  }, {
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'no one',
      correct: true,
      weight: 100
    }, {
      text: 'nobody',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.SHORT
  }, {
    title: null,
    body: 'When was Ulysses S. Grant born?',
    answers: [{
      value: 1822,
      range: 1
    }],
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'Grant',
      correct: false,
      weight: 0
    }, {
      text: 'Jefferson',
      correct: false,
      weight: 0
    }, {
      text: 'no one',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: `Grant is${ANSWER_BLANKS}in Grant's tomb.`,
    answers: [{
      text: 'buried',
      correct: false,
      weight: 0
    }, {
      text: 'entombed',
      correct: true,
      weight: 100
    }, {
      text: 'living',
      correct: false,
      weight: 0
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: `The American holiday of Thanksgiving is celebrated on the${ANSWER_BLANKS}Thursday of November.`,
    answers: [{
      text: 'second',
      correct: false,
      weight: 0
    }, {
      text: 'third',
      correct: false,
      weight: 0
    }, {
      text: 'fourth',
      correct: true,
      weight: 100
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: 'Japanese characters originally came from what country?',
    answers: [{
      text: 'India',
      correct: false,
      weight: 0
    }, {
      text: 'China',
      correct: true,
      weight: 100
    }, {
      text: 'Korea',
      correct: false,
      weight: 0
    }, {
      text: 'Egypt',
      correct: false,
      weight: 0
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'no one',
      correct: true,
      weight: 100
    }, {
      text: 'nobody',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.SHORT
  }, {
    title: null,
    body: `Two plus two equals${ANSWER_BLANKS}.`,
    answers: [{
      text: 'four',
      correct: true,
      weight: 100
    }, {
      text: '4',
      correct: true,
      weight: 100
    }],
    hasBlank: true,
    type: QUESTION_TYPES.SHORT
  }, {
    title: null,
    body: "Grant is buried in Grant's tomb.",
    answers: [{
      correct: false
    }],
    type: QUESTION_TYPES.TF
  }, {
    title: null,
    body: 'The sun rises in the east.',
    answers: [{
      correct: true
    }],
    type: QUESTION_TYPES.TF
  }, {
    title: null,
    body: 'Matching Question.',
    answers: [{
      match: ['subquestion1', 'subanswer1']
    }, {
      match: ['subquestion2', 'subanswer2'] 
    }, {
       match: ['subquestion3', 'subanswer3']
    }],
    type: QUESTION_TYPES.MATCH
  }, {
    title: null,
    body: 'Match the following countries with their corresponding capitals.',
    answers: [{
      match: ['Canada', 'Ottawa']
    }, {
      match: ['Italy', 'Rome']
    }, {
      match: ['Japan', 'Tokyo']
    }, {
      match: ['India', 'New Delhi']
    }],
    type: QUESTION_TYPES.MATCH
  }, {
    title: null,
    body: 'When was Ulysses S. Grant born?',
    answers: [{
      value: 1822
    }],
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: null,
    body: `What is the value of pi (to 3 decimal places)?${ANSWER_BLANKS}.`,
    answers: [{
      value: 3.1415,
      range: 0.0005
    }],
    hasBlank: true,
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: null,
    body: `What is the value of pi (to 3 decimal places)?${ANSWER_BLANKS}.`,
    answers: [{
      min: 3.141,
      max: 3.142
    }],
    hasBlank: true,
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: null,
    body: 'When was Ulysses S. Grant born?',
    answers: [{
      value: 1822,
      range: 0
    }, {
      value: 1822,
      range: 2,
      weight: 50
    }],
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: null,
    body: "What's 2 plus 2?",
    answers: [{
      value: 4
    }],
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: 'Kanji Origins',
    body: 'Japanese characters originally came from what country?',
    answers: [{
      text: 'China',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.SHORT
  }, {
    title: 'Thanksgiving Date',
    body: `The American holiday of Thanksgiving is celebrated on the${ANSWER_BLANKS}Thursday of November.`,
    answers: [{
      text: 'second',
      correct: false,
      weight: 0
    }, {
      text: 'third',
      correct: false,
      weight: 0
    }, {
      text: 'fourth',
      correct: true,
      weight: 100
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "What's the answer to this multiple-choice question?",
    answers: [{
      text: 'wrong answer',
      correct: false,
      weight: 0,
      feedback: 'feedback comment on the wrong answer'
    }, {
      text: 'another wrong answer',
      correct: false,
      weight: 0,
      feedback: 'feedback comment on this wrong answer'
    }, {
      text: 'right answer',
      correct: true,
      weight: 100,
      feedback: 'Very good!'
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'no one',
      correct: true,
      weight: 100,
      feedback: 'excellent answer!'
    }, {
      text: 'nobody',
      correct: true,
      weight: 100,
      feedback: 'excellent answer!'
    }],
    type: QUESTION_TYPES.SHORT
  }, {
    title: null,
    body: "Grant is buried in Grant's tomb.",
    answers: [{
      correct: false,
      feedback: "No one is buried in Grant's tomb."
    }],
    type: QUESTION_TYPES.TF
  }, {
    title: null,
    body: 'Difficult question.',
    answers: [{
      text: 'wrong answer',
      correct: false,
      weight: 0
    }, {
      text: 'half credit answer',
      correct: false,
      weight: 50
    }, {
      text: 'full credit answer',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: "Jesus' hometown",
    body: `Jesus Christ was from${ANSWER_BLANKS}.`,
    answers: [{
      text: 'Jerusalem',
      correct: false,
      weight: 0,
      feedback: 'This was an important city, but the wrong answer.'
    }, {
      text: 'Bethlehem',
      correct: false,
      weight: 25,
      feedback: 'He was born here, but not raised here.'
    }, {
      text: 'Galilee',
      correct: false,
      weight: 50,
      feedback: 'You need to be more specific.'
    }, {
      text: 'Nazareth',
      correct: true,
      weight: 100,
      feedback: "Yes! That's right!"
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: "Jesus' hometown",
    body: 'Jesus Christ was from',
    answers: [{
      text: 'Nazareth',
      correct: true,
      weight: 100,
      feedback: "Yes! That's right!"
    }, {
      text: 'Nazereth',
      correct: true,
      weight: 75,
      feedback: 'Right, but misspelled.'
    }, {
      text: 'Bethlehem',
      correct: true,
      weight: 25,
      feedback: 'He was born here, but not raised here.'
    }],
    type: QUESTION_TYPES.SHORT
  }, {
    title: null,
    body: "What two people are entombed in Grant's tomb?",
    answers: [{
      text: 'No one',
      correct: false,
      weight: 0
    }, {
      text: 'Grant',
      correct: false,
      weight: 50
    }, {
      text: "Grant's wife",
      correct: false,
      weight: 50
    }, {
      text: "Grant's father",
      correct: false,
      weight: 0
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "What two people are entombed in Grant's tomb?",
    answers: [{
      text: 'No one',
      correct: false,
      weight: -50
    }, {
      text: 'Grant',
      correct: false,
      weight: 50
    }, {
      text: "Grant's wife",
      correct: false,
      weight: 50
    }, {
      text: "Grant's father",
      correct: false,
      weight: -50
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'Grant',
      correct: false,
      weight: 0
    }, {
      text: 'Jefferson',
      correct: false,
      weight: 0
    }, {
      text: 'no one',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: `Grant is${ANSWER_BLANKS}in Grant's tomb.`,
    answers: [{
      text: 'buried',
      correct: false,
      weight: 0
    }, {
      text: 'entombed',
      correct: true,
      weight: 100
    }, {
      text: 'living',
      correct: false,
      weight: 0
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: "Grant is buried in Grant's tomb.",
    answers: [{
      correct: false
    }],
    type: QUESTION_TYPES.TF
  }, {
    title: null,
    body: "Who's buried in Grant's tomb?",
    answers: [{
      text: 'no one',
      correct: true,
      weight: 100
    }, {
      text: 'nobody',
      correct: true,
      weight: 100
    }],
    type: QUESTION_TYPES.SHORT
  }, {
    title: null,
    body: 'When was Ulysses S. Grant born?',
    answers: [{
      value: 1822,
      range: 5
    }],
    type: QUESTION_TYPES.NUMERIC
  }, {
    title: null,
    body: 'Match the following countries with their corresponding capitals.',
    answers: [{
      match: ['Canada', 'Ottawa']
    }, {
      match: ['Italy', 'Rome']
    }, {
      match: ['Japan', 'Tokyo']
    }],
    type: QUESTION_TYPES.MATCH
  }, {
    title: "Grant's Tomb",
    body: `Grant is${ANSWER_BLANKS}in Grant's tomb.`,
    answers: [{
      text: 'buried',
      correct: false,
      weight: 0,
      feedback: 'No one is buried there.'
    }, {
      text: 'entombed',
      correct: true,
      weight: 100,
      feedback: 'Right answer!'
    }, {
      text: 'living',
      correct: false,
      weight: 0,
      feedback: 'We hope not!'
    }],
    hasBlank: true,
    type: QUESTION_TYPES.MC
  }, {
    title: null,
    body: 'Difficult multiple choice question.',
    answers: [{
      text: 'wrong answer',
      correct: false,
      weight: 0,
      feedback: 'comment on wrong answer'
    }, {
      text: 'half credit answer',
      correct: false,
      weight: 50,
      feedback: 'comment on answer'
    }, {
      text: 'full credit answer',
      correct: true,
      weight: 100,
      feedback: 'well done!'
    }],
    type: QUESTION_TYPES.MC
  }, {
    title: "Jesus' hometown (Short answer ex.)",
    body: `Jesus Christ was from${ANSWER_BLANKS}.`,
    answers: [{
      text: 'Nazareth',
      correct: true,
      weight: 100,
      feedback: "Yes! That's right!"
    }, {
      text: 'Nazereth',
      correct: true,
      weight: 75,
      feedback: 'Right, but misspelled.'
    }, {
      text: 'Bethlehem',
      correct: true,
      weight: 25,
      feedback: 'He was born here, but not raised here.'
    }],
    hasBlank: true,
    type: QUESTION_TYPES.SHORT
  }, {
    title: 'Numerical example',
    body: 'When was Ulysses S. Grant born?',
    answers: [{
      value: 1822,
      range: 0,
      feedback: 'Correct! 100% credit'
    }, {
      value: 1822,
      range: 2,
      weight: 50,
      feedback: 'He was born in 1822. You get 50% credit for being close.'
    }],
    type: QUESTION_TYPES.NUMERIC
  }]
};
