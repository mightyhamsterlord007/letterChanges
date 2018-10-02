/*
  Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

  Use the Parameter Testing feature in the box below to test your code with different arguments.

  function LetterChanges(str) { 
  var result = str.replace(/[a-z]/gi, function(c){
        //get the numeric representation
        var val = c.toLowerCase().charCodeAt();
        //shift by one and cast it back to a character
        return String.fromCharCode((val - 96) % 26 + 97);
    });
    return result.replace(/a|e|i|o|u/g, function(c){
        //capitalize every vowel
        return c.toUpperCase();
    });
}

*/



function LetterChanges(str) { 

  let alphabet = 'abcdefghijklmnopqrstuvwxyza';
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) >= 0) {
      let foundAlphabetIndex = alphabet.indexOf(str[i]);
      result += alphabet[foundAlphabetIndex+1];
    } else {
      result += str[i];
    }

  }
  return result.replace(/a|e|i|o|u/g, function(c){ 
    return c.toUpperCase();
  });
}

module.exports = LetterChanges;

//LetterChanges("this long cake z@&") //UIjt mpOh dblf@&

