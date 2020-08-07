//Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 



var passwordLower = "abcdefghijklmnopqrstuvwxyz";
var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passowrdNumber = "0123456789";
var passwordSpechar = ":;=_!%&,*+-./<>?~";


    function generatePassword() {
      console.log("Generate password")
  
      //length
    var length = prompt("How many characters would you like the password to be?");
      console.log(length);
     
    if (length > 8 && length < 128) 
      console.log(length);

    else if (length < 8 || length > 128) 
      alert("Password must be 8-128 characters");
      
    //lowercase
    var passwordLower = confirm("Should there be lower case letters?")
    console.log(passwordLower);

    
    if (passwordLower === true) 
      console.log("Add lower case " + passwordLower);

    else {
      console.log("Do not add lowercase " + passwordLower);
    }
  
    //uppercase
    var passwordUpper = confirm("Should there be upper case letters?")
      console.log(passwordUpper);
  
      
    if (passwordUpper === true) 
      console.log("Add uppercase " + passwordUpper);
  
    else {
      console.log("Do not add uppercase " + passwordUpper);
      }

    //number
    var passwordNumber = confirm("Should there be numbers?")
      console.log(passwordNumber);
  
      
    if (passwordNumber === true) 
      console.log("Add numbers " + passwordNumber);
  
    else {
      console.log("Do not add numbers " + passwordNumber);
      }
      
    //special
    var passwordSpechar = confirm("Should there be special characters?")
      console.log(passwordSpechar);
  
      
    if (passwordSpechar === true) 
      console.log("Add special characters " + passwordSpechar);
  
    else {
      console.log("Do not add special characters " + passwordSpechar);
      }
    }

    /*for (let i = 0; i< length; i++) {
      let optionsArray = options[Math.floor(Math.random() * options.length)];
      console.log(optionsArray.charset(Math.floor(Math.random() * optionsArray.length)));

      document.getElementById("generate").innerHTML = options; 
    } 
    */