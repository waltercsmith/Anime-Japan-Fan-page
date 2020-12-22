"use strict"

// var sayHey = "Hey, visitor!";
// console.log(sayHey);
// alert(sayHey);

// alert("Welcome to the page!");


var firstPart = "Hey visitor(s)! How are you?";
console.log(firstPart);
//
// Realized why my alerts, prompts, or console logs would repeat at least twice because
// I had two script tags with src to anime-japan-fan-page.js 😝
// face with stuck out tongue and tightly-closed eyes
// Unicode: U+1F61D, UTF-8: F0 9F 98 9D

var userInput = prompt("Welcome visitor! What is your name: ");
alert("Nice to meet you, " + userInput);

console.log("Nice to meet you, " + userInput);

var confirmed = confirm(userInput +", Do you want to view the page?");
console.log(confirmed);





