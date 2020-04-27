//Containers and Buttons:
var container1 = $(".firstNum");
var container2 = $(".secNum");
var container3 = $(".thirdNum");
var container4 = $(".fourthNum");
var submitBtn = $(".submitBtn");
var textField = $(".textField");

//Function Calls:
container1.append(randomNum());
container2.append(randomNum());
container3.append(randomNum());
container4.append(randomNum());

//Event Listeners:
submitBtn.on("click", checkCode);

//Function Declarations & Event Handlers:
function randomNum(){
  var randDecimal = Math.random();
  randDecimal *= 9; return(Math.floor(randDecimal));
}

function checkCode(event){
  event.preventDefault();
  $(".outcome")[0].innerHTML = "";
  var userInput = textField.val();
  var compInput = stringNums();
  action(userInput,compInput);
  //compares user input against the nums
  //displays a confirmation message in the container
}

function stringNums(){
  var num1 = $(".firstNum")[0].innerHTML;
  var num2 = $(".secNum")[0].innerHTML;
  var num3 = $(".thirdNum")[0].innerHTML;
  var num4 = $(".fourthNum")[0].innerHTML;
  return(`${num1}${num2}${num3}${num4}`);
}

function action(num1, num2){
  var container = $(".outcome");
  if (num1 === num2){
    container.append("<p>SUCCESS!</p>")
  } else {
    container.append("Sorry! There was an error. Please refresh and try again.");
  }
}

// console.log($(".firstNum")[0].innerHTML);




