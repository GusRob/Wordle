

//letter key: class names used are:
//  'gaf':guessed and failed
//  'gay':guessed and yellow
//  'gag':guessed and green
var isGameActive = true;
var guesses = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];
var currentGuess = 0;
var currentLetter = 0;
var wordLength = 5;

var solution = ["A", "B", "B", "D", "E"];

var guessRowRefs = document.getElementsByClassName("guessRow");
var letterRefs = [];
for(var i = 0; i < guessRowRefs.length; i++){
  letterRefs.push(guessRowRefs[i].getElementsByClassName("letter"));
}


function updateGuesses(){
  for(var i = 0; i < guessRowRefs.length; i++){
    for(var j = 0; j < wordLength; j++){
      letterRefs[i][j].textContent = guesses[i][j];
      if(i == currentGuess){
        letterRefs[i][j].style.backgroundColor = "#333";
        if(j == currentLetter){
          letterRefs[i][j].style.backgroundColor = "#666";
        } else if( j <= currentLetter){
          letterRefs[i][j].style.backgroundColor = "#444";
        }
      }
    }
  }
}

function addLetter(letter){
  if(isGameActive && currentLetter < wordLength){
    guesses[currentGuess][currentLetter++] = letter;
  }
  updateGuesses();
}

function removeLetter(){
  if(isGameActive && currentLetter > 0){
    guesses[currentGuess][--currentLetter] = "";
  }
  updateGuesses();
}

function guessWord(){
  if(isGameActive && currentLetter >= wordLength){
    var guess = getWordInRow(currentGuess);
    var result = verify(guess, [...solution]);
    var isAllCorrect = true;
    for(var j = 0; j < wordLength; j++){
      isAllCorrect = isAllCorrect && (result[j]=="#0F0");
      letterRefs[currentGuess][j].style.backgroundColor = result[j];
      letterRefs[currentGuess][j].style.borderColor = result[j];
    }
    if(isAllCorrect){
      isGameActive = false;
      currentGuess = 6;
    } else {
      currentGuess++;
      currentLetter = 0;
    }
  }
  updateGuesses();
}

function getWordInRow(n){
  var result = [];
  for(var j = 0; j < wordLength; j++){
    result.push(letterRefs[n][j].textContent);
  }
  return result;
}

function verify(guess, answer){
  var result = ["#999", "#999", "#999", "#999", "#999"];
  var correctLetters = [];
  for(var i = 0; i < wordLength; i++){
    if(guess[i] == answer[i]){
      result[i] = "#0F0";
      answer[i] = "";
    }
  }
  for(var i = 0; i < wordLength; i++){
    var n = answer.indexOf(guess[i]);
    if(n != -1 && result[i] == "#999"){
      result[i] = "#FF0";
      answer[n] = "";
    }
  }
  return result;
}


updateGuesses();
console.debug(guesses);
