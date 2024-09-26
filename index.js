alert ("this is a sorry page");

// JavaScript function that prompts for a yes or no answer
function askYesNoQuestion(question) {
    let answer = prompt(question + " (si o no)");
    if (answer.toLowerCase() === "si") {
      return true;
    } else if (answer.toLowerCase() === "no") {
      return false;
    } else {
      // If the user enters an invalid response, prompt again
      alert("Please enter 'si' o 'no'");
      return askYesNoQuestion(question);
    }
  }
  
  // Example usage
  let answer = askYesNoQuestion("Me disculpas");
  if (answer) {
    alert("Te amo, babe");
  } else {
    alert("me disculpo otra vez, babe. Te amo.");
  }
