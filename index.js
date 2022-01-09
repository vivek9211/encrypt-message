var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var submitButton = document.getElementById("button1");
var submitButton2 = document.getElementById("button2");
var encrypted_text = ""
var decrypted_text = ""

// Function for encrypt
submitButton.addEventListener("click", function() {
  var message = document.getElementById("EncryptTextarea").value;
  var shift = document.getElementById("EncryptShift").value;
  for (var i = 0; i < message.length; i++) {
    if (message[i] == "a" || message[i] == "b" || message[i] == "c" || message[i] == "d" || message[i] == "e" || message[i] == "f" || message[i] == "g" || message[i] == "h" || message[i] == "i" || message[i] == "j" || message[i] == "k" || message[i] == "l" || message[i] == "m" || message[i] == "n" || message[i] == "o" || message[i] == "p" || message[i] == "q" || message[i] == "r" || message[i] == "s" || message[i] == "t" || message[i] == "u" || message[i] == "v" || message[i] == "w" || message[i] == "x" || message[i] == "y" || message[i] == "z" || message[i] == "0" || message[i] == "1" || message[i] == "2" || message[i] == "3" || message[i] == "4" || message[i] == "5" || message[i] == "6" || message[i] == "7" || message[i] == "8" || message[i] == "9" || message[i] == " " || message[i] == "." || message[i] == ",") {
      var position = alphabet.indexOf(message[i]);
      var new_position = parseInt(position) + parseInt(shift);
      if (message[i] == " ") {
        encrypted_text += " ";
      } else if (message[i] == "." || message[i] == ",") {
        encrypted_text += message[i];
      } else if (message[i] == "0" || message[i] == "1" || message[i] == "2" || message[i] == "3" || message[i] == "4" || message[i] == "5" || message[i] == "6" || message[i] == "7" || message[i] == "8" || message[i] == "9") {
        encrypted_text += message[i];
      } else {
        encrypted_text += alphabet[new_position];
      }
    } else if (message[i] == "A" || message[i] == "B" || message[i] == "C" || message[i] == "D" || message[i] == "E" || message[i] == "F" || message[i] == "G" || message[i] == "H" || message[i] == "I" || message[i] == "J" || message[i] == "K" || message[i] == "L" || message[i] == "M" || message[i] == "N" || message[i] == "O" || message[i] == "P" || message[i] == "Q" || message[i] == "R" || message[i] == "S" || message[i] == "T" || message[i] == "U" || message[i] == "V" || message[i] == "W" || message[i] == "X" || message[i] == "Y" || message[i] == "Z") {
      var position = alphabetC.indexOf(message[i]);
      var new_position = parseInt(position) + parseInt(shift);
      if (message[i] == " ") {
        encrypted_text += " ";
      } else if (message[i] == "." || message[i] == ",") {
        encrypted_text += message[i];
      } else if (message[i] == "0" || message[i] == "1" || message[i] == "2" || message[i] == "3" || message[i] == "4" || message[i] == "5" || message[i] == "6" || message[i] == "7" || message[i] == "8" || message[i] == "9") {
        encrypted_text += message[i];
      } else {
        encrypted_text += alphabetC[new_position];
      }
    }
    //console.log(new_position, (typeof new_position));

    //document.getElementById("outputMessage").innerHTML = encrypted_text;
  }
  //alert(encrypted_text);
  var txt = document.getElementById("outputMessage");
  txt.innerHTML = "";
  txt.innerHTML = encrypted_text;
});

// Function for decrypt
submitButton2.addEventListener("click", function() {
  var message = document.getElementById("DecrypTextarea").value;
  var shift = document.getElementById("DecryptShift").value;
  for (var i = 0; i < message.length; i++) {
    if (message[i] == "a" || message[i] == "b" || message[i] == "c" || message[i] == "d" || message[i] == "e" || message[i] == "f" || message[i] == "g" || message[i] == "h" || message[i] == "i" || message[i] == "j" || message[i] == "k" || message[i] == "l" || message[i] == "m" || message[i] == "n" || message[i] == "o" || message[i] == "p" || message[i] == "q" || message[i] == "r" || message[i] == "s" || message[i] == "t" || message[i] == "u" || message[i] == "v" || message[i] == "w" || message[i] == "x" || message[i] == "y" || message[i] == "z" || message[i] == "0" || message[i] == "1" || message[i] == "2" || message[i] == "3" || message[i] == "4" || message[i] == "5" || message[i] == "6" || message[i] == "7" || message[i] == "8" || message[i] == "9" || message[i] == " " || message[i] == "." || message[i] == ",") {
      var position = alphabet.indexOf(message[i]);
      var new_position = parseInt(position) - parseInt(shift);
      if (message[i] == " ") {
        decrypted_text += " ";
      } else if (message[i] == "." || message[i] == ",") {
        decrypted_text += message[i];
      } else if (message[i] == "0" || message[i] == "1" || message[i] == "2" || message[i] == "3" || message[i] == "4" || message[i] == "5" || message[i] == "6" || message[i] == "7" || message[i] == "8" || message[i] == "9") {
        decrypted_text += message[i];
      } else {
        decrypted_text += alphabet[new_position];
      }
    }
    else if(message[i] == "A" || message[i] == "B" || message[i] == "C" || message[i] == "D" || message[i] == "E" || message[i] == "F" || message[i] == "G" || message[i] == "H" || message[i] == "I" || message[i] == "J" || message[i] == "K" || message[i] == "L" || message[i] == "M" || message[i] == "N" || message[i] == "O" || message[i] == "P" || message[i] == "Q" || message[i] == "R" || message[i] == "S" || message[i] == "T" || message[i] == "U" || message[i] == "V" || message[i] == "W" || message[i] == "X" || message[i] == "Y" || message[i] == "Z"){
      var position = alphabetC.indexOf(message[i]);
      var new_position = parseInt(position) - parseInt(shift);
      if (message[i] == " ") {
        decrypted_text += " ";
      } else if (message[i] == "." || message[i] == ",") {
        decrypted_text += message[i];
      } else if (message[i] == "0" || message[i] == "1" || message[i] == "2" || message[i] == "3" || message[i] == "4" || message[i] == "5" || message[i] == "6" || message[i] == "7" || message[i] == "8" || message[i] == "9") {
        decrypted_text += message[i];
      } else {
        decrypted_text += alphabetC[new_position];
      }
    }
  }
  var txt = document.getElementById("outputMessage");
  txt.innerHTML = "";
  txt.innerHTML = decrypted_text;
});
