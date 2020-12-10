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

let likesToTravel = true

if(likesToTravel === true){
    console.log("Bon Voyage")
} else {
    console.log("Enjoy your couch!")
}


let favoriteFood = "fried pickles"

if(favoriteFood === "fried pickles" || "pepperoni rolls"){
    console.log("Congratulations! You have excellent taste!")
} else {
    console.log("Clearly you have not tried friend pickles or pepperoni rolls.")
}

// PRACTICE #1
if(1 + 1 > 5){
    console.log("True Fact!")
} else {
    console.log("Lies!")
}

if(4 * 5 <= 20){
    console.log("True Fact!")
} else {
    console.log("Lies!")
}

if(6 - 2 >= 0){
    console.log("True Fact!")
} else {
    console.log("Lies!")
}


// PRACTICE #2
let likesDogs = true

if(likesDogs){
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
}

// PRACTICE #3
let birthYear = 1987

if(birthYear <= 1994 || birthyear >= 1977){
    console.log("You're a Gen Y kid!")
} else {
    console.log("You missed out on being a Gen Y kid!")
}


// PRACTICE 4
let personObject = {
    name: "Patti",
    preferredLanguage: "English"
}

if(personObject.preferredLanguage === "English") {
    console.log("Hello, " +  personObject.name + "!")
} else if (personObject.preferredLanguage === "Spanish") { 
    console.log("Hola, " + personObject.name + "!")
}  else (personObject.preferredLanguage === "French") {
  console.log("Bonjour, " + personObject.name + "!" )
}

