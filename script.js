// initialize playerSelection variable
//Wait for page to finish loading


// get user 
const onClick = (event) => {
  //console.log(event.srcElement.id);
  var playerInput = event.srcElement.id;
  var cSelect =  compInput();
  var winner = compare(playerInput, cSelect);



}
window.addEventListener('click', onClick);
// initialize computerSelection variable







// wait for user input, HTML will set up textbox

// set user input to lowerCase

// check if user input is valid

// return error if playerSelction is invalid

// calculate random computerSelection
function compInput(){

  let ranNum = Math.floor(Math.random() * 5);
  let compSlect = null;
  switch (ranNum){
    case 0:  compSelect = "rock";
      break;
    case 1:  compSelect = "paper";
      break;    
    case 2:  compSelect = "scissors";
      break;
    case 3:  compSelect = "lizard";
      break;   
    case 4:  compSelect = "spock";
      break;    
  }

  return compSelect;
}
// compare playerSelection to computerSelection
function compare(player, comp){
  var winner = null;

  if( player !== comp){
    
 
  }else{
    winner = 'tie';
  }


  return winner;
}
// set playerSelection image

// set computerSelection image



// return results of game




// set up button listing

