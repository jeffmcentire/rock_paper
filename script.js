// initialize playerSelection variable
//Wait for page to finish loading

//const form = document.getElementById('playerInput');

// initialize computerSelection variable

// wait for user input, HTML will set up textbox
window.addEventListener("load",function(){
    //Run function when you submit form
    document.getElementById("form").addEventListener("submit",function(e){
      //Stop the form from submitting:
      e.preventDefault();
  
      //Get your input value
      var playerInput = document.getElementById("playerInput").value;
  
      //Log it to your console
      alert(playerInput)
    });
  });
// set user input to lowerCase

// check if user input is valid

// return error if playerSelction is invalid

// calculate random computerSelection

// compare playerSelection to computerSelection

// set playerSelection image

// set computerSelection image

// return results of game