"use strict"

// var sayHey = "Hey, visitor!";
// console.log(sayHey);
// alert(sayHey);

// alert("Welcome to the page!");

var userInput = prompt("Welcome visitor! What is your name: ");
alert("Nice to meet you, " + userInput);

var likePage = confirm("Do you like the page?");
console.log(likePage);

if(likePage === true){
    console.log("Thanks for liking the page!");
}else {
    console.log("It's a shame you don't like the page...");
}

alert("I'm going to ask you two more questions, " + userInput);


var areYouSure = confirm("Are you SURE you like the page? Be honest!");

if(areYouSure === true){
    var answer = prompt("Are you interested in coding, (yes or no)?")
    if (answer === 'yes' || answer === 'Yes' || answer === 'YES'){
        alert("That's fantastic!");
    }else {
        alert("Well, not everyone likes coding! Thanks for the answer tho!");
    }

}

for (var i = 0; i < 20; i++){
    if(i % 2 === 0) {
        console.log("For loop iteration #" + i);
    }
}
















    





