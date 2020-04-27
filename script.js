console.log("Script is linked!");

//Containers and Buttons:
var container1 = $(".firstNum");
var container2 = $(".secNum");
var container3 = $(".thirdNum");
var container4 = $(".fourthNum");
var submitBtn = $("submitBtn");
var textField = $("textField");

//Function Declarations:
function randomNum(){
  var randDecimal = Math.random();
  randDecimal *= 9;
  return(Math.floor(randDecimal));
}

function checkCode(event){
  event.preventDefault();
  console.log("The button worked.");
//   var userInput = textField.val();
//   console.log(userInput);
}

//Function Calls:
container1.append(randomNum());
container2.append(randomNum());
container3.append(randomNum());
container4.append(randomNum());

//Event Listeners:
submitBtn.on("click", checkCode);



