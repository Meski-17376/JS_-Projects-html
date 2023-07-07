function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function showFib() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function ShowPerm() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function showComb() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function showCipher() {
    document.getElementById("mySidenav").style.width = "";
  }
 
  function factorial() {
 var n=document.getElementById("facText").value;
 var fact=1;
    // if number is 0
    for (x=1; x<=n;x++){
      if(n==0){
        fact=1;
      }
      fact=fact*x;
    }
      document.getElementById("facP").innerHTML= "The factorial of "+n+" is "+ fact;
    
}



function combinations() {
  var chars=document.getElementById("combText").value;
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  document.getElementById("combP").innerHTML=result;
}

function fibonacci() {
  var num=document.getElementById("fibText").value;
  var a = 1, b = 0, temp;

  while (num > 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
    document.getElementById("fibP").innerHTML=b+" ";
  }

  
}






// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}


// cipher
function cipher() {
  let message=document.getElementById("ciphText").value;
  let key=document.getElementById("ciphText1").value;
  //const arrOfKeys = key.split("")
  const cipheredMessage = []
  let newLettersArr = []
  for (let i = 0; i < message.length; i++) {
          let newLetter = message.charCodeAt(i) + key
          newLettersArr.push(newLetter)
      
  }
  
  newLettersArr.forEach((letter) => {
      let cipheredLetter = String.fromCharCode(letter)
      cipheredMessage.push(cipheredLetter)
      
  })
  document.getElementById("ciphP").innerHTML=cipheredMessage.join("");
}



// // program to check if the string is palindrome or not

// function palindrome() {
// var string=document.getElementById("palText").value;
//   // convert string to an array
//   const arrayValues = string.split('');

//   // reverse the array values
//   const reverseArrayValues = arrayValues.reverse();

//   // convert array to string
//   const reverseString = reverseArrayValues.join('');

//   if(string == reverseString) {
//     document.getElementById("palP").innerHTML="The given string is paindrom!";
//   }
//   else {
//     document.getElementById("palP").innerHTML="The given string is not paindrom!";
//   }
// }

function generatePalindrome() {
  var numChars=document.getElementById("palText").value;
  var halfLength = Math.floor(numChars / 2);
  var palindrome = '';
  for (var i = 0; i < halfLength; i++) {
    palindrome += String.fromCharCode(97 + i % 26);
  }
  if (numChars % 2 === 1) {
    palindrome += String.fromCharCode(97 + halfLength % 26);
    halfLength++;
  }
  for (var i = halfLength - 2; i >= 0; i--) {
    palindrome += palindrome[i];
  }
  document.getElementById("palP").innerHTML=palindrome;
}



function generatePassword() {
  var length=document.getElementById("pwdText").value;
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  document.getElementById("pwdP").innerHTML=result;
}

// function showfac(){
//   document.getElementById("mainDiv").append("enter number:");
//   var makeinput = document.createElement('input');
//   makeinput.id="facText";
//   makeinput.type="text";
//   document.getElementById("mainDiv").appendChild(makeinput);
//   var br = document.createElement('br');
//   document.getElementById("mainDiv").appendChild(br);
//   var btn1 = document.createElement('input');
//   btn1.type="button";
//   btn1.style.width="70px"
//   btn1.style.height="30px"
//   btn1.style.backgroundColor="grey"
//   btn1.innerText="find"
//   //btn1.createTextNode = ('factorial');
//   //btn1.onclick=factorial();
//   document.getElementById("mainDiv").append(btn1);
//   var makep1 = document.createElement('p');
//   makep1.id="facP";
//   document.getElementById("mainDiv").appendChild(makep1);

// }
function permut() {
   var string=document.getElementById("permutText").value;
   if (string.length < 2) return string;
   var permutations = [];
   for (var i = 0; i < string.length; i++) {
     var char = string[i];
     if (string.indexOf(char) != i) continue;
     var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
     for (var subPermutation of permut(remainingString))
       permutations.push(char + subPermutation)
   }
  document.getElementById("permutP").innerHTML=permutations;
  }

