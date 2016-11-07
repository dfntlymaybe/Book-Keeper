function validatePassword(errorlist){
        var passList = document.querySelectorAll("input[type=password]");
        if(passList[0].value.length < 6){
          var p = document.createElement("p");
          p.innerHTML = "Password too short";
          p.style.backgroundColor  = "red";
          errorlist[2].appendChild(p);
          return false;
        }else if(passList[0].value != passList[1].value){
          var p = document.createElement("p");
          p.innerHTML = "Password do NOT match";
          p.style.backgroundColor  = "red";
          errorlist[3].appendChild(p);
          return false;
        }else{
          return true;
        }
      }

function validatePhoneNumber(errorlist){
  var phoneNumber = document.getElementById('phoneNumber').value;
  if(phoneNumber.length < 15){
    var p = document.createElement("p");
    p.innerHTML = "Not a valid Phone Number(must be at least 15 digits)";
    p.style.backgroundColor  = "red";
    errorlist[4].appendChild(p);
    return false;
  }else{
    return true;
  }
}

function validateUserName(errorlist){
  var userName = document.getElementById('userName').value;
  if(userName.includes(" ") || userName === ""){
    var p = document.createElement("p");
    p.innerHTML = "Not a valid User Name(must be one word - no spaces)";
    p.style.backgroundColor  = "red";
    errorlist[0].appendChild(p);
     return false;
  }else{
    return true;
  }
}

function validateCountry(errorlist){
  var country = document.getElementById('country').value;
  if(country.toLowerCase() === "usa" || country.toLowerCase() === "israel"){
    return true;
  }else{
      var p = document.createElement("p");
      p.innerHTML = "Not a valid country(only accept USA and Israel)";
      p.style.backgroundColor  = "red";
      errorlist[5].appendChild(p);
      return false;
  }
}

var submitSignUp = function(){

  event.preventDefault(); 

  //Clearing errors from the screen
  var errorlist = document.getElementsByClassName('errorMsg');
  for (var i=0 ; i < errorlist.length ; i++){
    while(errorlist[i].firstChild){
      errorlist[i].removeChild(errorlist[i].firstChild)
    }
  }

  //validating all inputs
  var validPassword = validatePassword(errorlist);
  var validCountry = validateCountry(errorlist);
  var validUserName = validateUserName(errorlist);
  var validPhoneNumber = validatePhoneNumber(errorlist);

  if(validCountry && validPassword && validUserName && validPhoneNumber){
  //send all the information to the server...
  }
}

