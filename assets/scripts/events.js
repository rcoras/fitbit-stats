'use strict'
const getFormFields = require('../../lib/get-form-fields')
const store = require('./store')


const statesObj = {
  'Alabama': 'Montgomery',
  'Alaska': 'Juneau',
  'Arizona': 'Phoenix',
  'Arkansas': 'Little Rock',
  'California': 'Sacramento',
  'Colorado': 'Denver',
  'Connecticut': 'Hartford',
  'Delaware': 'Dover',
  'Florida': 'Tallahassee',
  'Georgia': 'Atlanta',
  'Hawaii': 'Honolulu',
  'Idaho': 'Boise',
  'Illinois': 'Springfield',
  'Indiana': 'Indianapolis',
  'Iowa': 'Des Moines',
  'Kansas': 'Topeka',
  'Kentucky': 'Frankfort',
  'Louisiana': 'Baton Rouge',
  'Maine': 'Augusta',
  'Maryland': 'Annapolis',
  'Massachusetts': 'Boston',
  'Michigan': 'Lansing',
  'Minnesota': 'St. Paul',
  'Mississippi': 'Jackson',
  'Missouri': 'Jefferson City',
  'Montana': 'Helena',
  'Nebraska': 'Lincoln',
  'Nevada': 'Carson City',
  'New Hampshire': 'Concord',
  'New Jersey': 'Trenton',
  'New Mexico': 'Santa Fe',
  'New York': 'Albany',
  'North Carolina': 'Raleigh',
  'North Dakota': 'Bismarck',
  'Ohio': 'Columbus',
  'Oklahoma': 'Oklahoma City',
  'Oregon': 'Salem',
  'Pennsylvania': 'Harrisburg',
  'Rhode Island': 'Providence',
  'South Carolina': 'Columbia',
  'South Dakota': 'Pierre',
  'Tennessee': 'Nashville',
  'Texas': 'Austin',
  'Utah': 'Salt Lake City',
  'Vermont': 'Montpelier',
  'Virginia': 'Richmond',
  'Washington': 'Olympia',
  'West Virginia': 'Charleston',
  'Wisconsin': 'Madison',
  'Wyoming': 'Cheyenne'
}

let stateGuessed = ''

function guessCapital(state){
  $('#gameMessage').text('what is the capital of',state,'?')
  console.log('what is the capital of',state,'?')
  //give user ability to input
  //check if input matches state[value]
  $('#gameMessage').text('The capital is',statesObj[state])
  console.log('The capital is',statesObj[state])

}

const onStartGame = function (event) {
  //get a random number and use that state in message and function for game
  const states = Object.keys(statesObj)
  // $('.answer-box').css('display', '')
  $('.answer-box').show()
  const randomIndex = Math.floor(Math.random() * (49 - 0)) + 0;
  let stateToGuess = states[randomIndex]
  console.log(stateToGuess)
  $('#gameMessage').html('What\'s the capital of ').append(stateToGuess, "?")
  stateGuessed = stateToGuess
  $("#WinOrLoseMessage").html('')
}

const onSumbitAnswer = function (event) {
  event.preventDefault()
  $('.answer-box').hide()
  const form = event.currentTarget
  const data = getFormFields(form)
  console.log(data)
  console.log(data.answer)
  // const data = getFormFields(event.currentTarget.elements)
  const addedAnswer = data.answer
  console.log('this is added answer', addedAnswer)
  if (addedAnswer.toLowerCase() === statesObj[stateGuessed].toLowerCase()) {
    $('#WinOrLoseMessage').html('You got it!')
  } else {
    $('#WinOrLoseMessage').html('Nope, the answer is ').append(statesObj[stateGuessed])
  }
  stateGuessed = ''
  this.reset()
}


const addHandlers = function () {
  // document.addEventListener('click', onStartGame)
  $('#start-game-button').on('click', onStartGame)
  // document.addEventListener('submit', onSumbitAnswer)
  $('.answer-box').on('submit', onSumbitAnswer)
}

module.exports = {
  addHandlers
}
