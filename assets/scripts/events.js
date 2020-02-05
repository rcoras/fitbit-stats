'use strict'
var statesObj = {
  "Alabama":"Montgomery",
  "Alaska":"Juneau",
  "Arizona":"Phoenix",
  "Arkansas":"Little Rock",
  "California":"Sacramento",
  "Colorado":"Denver",
  "Connecticut":"Hartford",
  "Delaware":"Dover",
  "Florida":"Tallahassee",
  "Georgia":"Atlanta",
  "Hawaii":"Honolulu",
  "Idaho":"Boise",
  "Illinois":"Springfield",
  "Indiana":"Indianapolis",
  "Iowa":"Des Moines",
  "Kansas":"Topeka",
  "Kentucky":"Frankfort",
  "Louisiana":"Baton Rouge",
  "Maine":"Augusta",
  "Maryland":"Annapolis",
  "Massachusetts":"Boston",
  "Michigan":"Lansing",
  "Minnesota":"St. Paul",
  "Mississippi":"Jackson",
  "Missouri":"Jefferson City",
  "Montana":"Helena",
  "Nebraska":"Lincoln",
  "Nevada":"Carson City",
  "New Hampshire":"Concord",
  "New Jersey":"Trenton",
  "New Mexico":"Santa Fe",
  "New York":"Albany",
  "North Carolina":"Raleigh",
  "North Dakota":"Bismarck",
  "Ohio":"Columbus",
  "Oklahoma":"Oklahoma City",
  "Oregon":"Salem",
  "Pennsylvania":"Harrisburg",
  "Rhode Island":"Providence",
  "South Carolina":"Columbia",
  "South Dakota":"Pierre",
  "Tennessee":"Nashville",
  "Texas":"Austin",
  "Utah":"Salt Lake City",
  "Vermont":"Montpelier",
  "Virginia":"Richmond",
  "Washington":"Olympia",
  "West Virginia":"Charleston",
  "Wisconsin":"Madison",
  "Wyoming":"Cheyenne"
}

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
  const randomIndex = Math.floor(Math.random() * (49 - 0)) + 0;
  let stateToGuess = states[randomIndex]
  console.log(stateToGuess)
  $('#gameMessage').text('what is the capital of', stateToGuess,'?')
}


const addHandlers = function () {
  $('#start-game-button').on('click', onStartGame)
}

module.exports = {
  addHandlers
}
