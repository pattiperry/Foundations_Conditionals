// CONDITIONALS

// if(2 + 2 === 4){
//     console.log("we can do math")
// }


let myName = "Jordan"


console.log(myName === "Tommy")

if(myName === "Tommy"){
    console.log("wheres the pizza?")
}
else if (myName === "Jordan") {
    console.log("Hi Jordan")
}
else {
    console.log("you should be Tommy")
}


let isHungry = true

if(isHungry){
    console.log("You should go eat!")
}


let a = 2
let b = 3

if(a + b ===5){
    console.log("You Rock!")
}

// LIGHTNING EXERCISE
// Bon Voyage!
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.
let likesToTravel = true

if(likesToTravel === true){
    console.log("Bon Voyage")
} else {
    console.log("Enjoy your couch!")
}

// LIGHTNING EXERCISE 2
let favoriteFood = "fried pickles"

if(favoriteFood === "fried pickles" || "pepperoni rolls"){
    console.log("Congratulations! You have excellent taste!")
} else {
    console.log("Clearly you have not tried friend pickles or pepperoni rolls.")
}

// PRACTICE
// 1. Check Your Math
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log `True fact!` to the console if the condition evaluates to true and `LIES!` to the console if it doesn't.

//is the sum of 1 and 1 greater than 5?
if(1 + 1 > 5){
    console.log("True Fact!")
} else {
    console.log("Lies!")
}

//is the product of 4 and 5 less than or equal to 20?
if(4 * 5 <= 20){
    console.log("True Fact!")
} else {
    console.log("Lies!")
}

//is the difference between 6 and 2 greater than or equal to 0?
if(6 - 2 >= 0){
    console.log("True Fact!")
} else {
    console.log("Lies!")
}


// 2. Dog People vs. Cat People
// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log `You're a dog person!` to the console. If not, log `You're a cat person!` to the console.
let likesDogs = true

if(likesDogs){
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
}

// 3. Generation Gaps
// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.
let birthYear = 1987

if(birthYear <= 1994 || birthyear >= 1977){
    console.log("You're a Gen Y kid!")
} else {
    console.log("You missed out on being a Gen Y kid!")
}


// 4. Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
// Write a conditional that checks for the following:
// If the person's preferred language is English, print `Hello, [name]!` to the console.
// If the person's preferred language is Spanish print `Hola, [name]!` to the console.
// If their preferred language is French, print `Bonjour, [name]!` to the console.
let personObject = {
    name: "Patti",
    preferredLanguage: "English"
}

if(personObject.preferredLanguage === "English") {
    console.log("Hello, " +  personObject.name + "!")
} else if (personObject.preferredLanguage === "Spanish") { 
    console.log("Hola, " + personObject.name + "!")
}  

// else (personObject.preferredLanguage === "French") 
//   console.log("Bonjour, " + personObject.name + "!" )


