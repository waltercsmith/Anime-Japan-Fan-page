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

//Created an object with properties that coincide with the three sub-sections of the page: cuisine,location & anime
var japanMain = {
    cuisine: ["Gyūdon","Ramen"],
    location: "Mount Fuji",
    anime: ["Guts", "Vegeta"]

};

//Executing an order for a set interval of time, specifically every 2 seconds

var count = 0;

var max = 5;

var interval = 2000;

var intervalId = setInterval(function () {
    if(count >= max){
        clearInterval(intervalId)
        console.log("Japan is awesome times " + max +"0000!");
    }else {
        count++;
        console.log("Japan is awesome, right!?!!");
    }
}, interval);


//Want to use a setTimeout() method to change the innerHTML of my h1 tag Japan to the official Japanese-language name
var delay = 15000;
var timeoutId = setTimeout(function () {
    (function () {
        var h1Tag = document.getElementById("japan-name-changer");
        console.log(h1Tag.innerHTML);
        h1Tag.innerText = "Nippon-koku";

    })();
    
},delay);

// (function () {
//     var h1Tag = document.getElementById("japan-name-changer");
//     console.log(h1Tag.innerHTML);
//     h1Tag.innerText = "Nippon-koku";
//
// })();



















    





