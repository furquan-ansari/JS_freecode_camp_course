/* let welcomeEl = document.getElementById('welcome-el')

let name = "Muhammad"
let greeting = "Hi"

welcomeEl.innerText = greeting +" "+ name;

welcomeEl.innerText = welcomeEl.innerText + "%"
 */
// welcomeEl.innerText += "%"

// practice code
/* 
let sentence = ["Hello","my","name","is","Muhammad"]
let greetingEl = document.getElementById("greeting-el")

for(let i=0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " " 
}

 */
// practice code 1
/* let firstName = "Muhammad"
let lastName = "Ansari"

let fullName = firstName + " "+ lastName

console.log(fullName); */

// practice code 2

/* let name  = "Linda";
let greeting = "Hi there"

function greetLinda (){
    console.log( greeting +","+" "+ name+"!");
}
greetLinda(); */

// practice code 3
/* 
let myPoints = 3;

function add3Points(){
myPoints +=3

}


function removelPoints(){
myPoints -= 1
}
add3Points()
add3Points()
add3Points()
removelPoints()
removelPoints()

console.log(myPoints); */

// practice code array

/* let featuredPosts = [
"check out my netflix clone", 
"here's the code for my project",
"I've relauanched my portfolio"
]
// console.log(featuredPosts[2]);

let experience = [
    "2 years web developer",
    "CSE",
    "udemy",
    "Node.js",

] */
// console.log(experience[0]);
// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[3]);

// console.log(experience.length);

// let name =["Muhammad Furquan", 26, true]
// console.log(name[1]);

// let cards = [7,4]
// console.log("Hello");
// cards.push(6)
// console.log(cards);

/* let msg =[
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good, Been working on my portfolio lately"
]
console.log(msg);
let newMsg = "Same here!"

msg.push(newMsg)
console.log(msg);
msg.pop();
console.log(msg); */

// practice code loops

// for(let count = 10; count < 21; count+=1)
// {
// console.log(count);
// }

// practice code loops
/* for(let i = 10; i<=100; i+=10){
    console.log(i);
} */

// practice code array and loops
/* 
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good, Been working on my portfolio lately",
    "Same here!",
    "Great to hear",
    "----"
]
// DRY- Don't repeat yourself
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);

// for(let i = 0; i<messages.length; i+=1){
//     console.log(messages[i]);
// } */

// practice code

/* let cards = [7,3,9]

for(let i=0; i<cards.length; i++){
    console.log(cards[i]);
} */

//practice code

/* let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime(){
    if(player1Time<player2Time){
        return player1Time
    } else if(player2Time<player1Time){
        return player2Time
    }else {
        return player1Time
    }
}
//  getting total race time 
let fastestRace = getFastestRaceTime()
console.log(fastestRace);

function getTotalRaceTime(){
   return player1Time + player2Time
}
let totalTime = getTotalRaceTime()
console.log(totalTime); */

// practice code for random number
//  by using Math.random we get 0.000 - 0.999 but not including 1

/* let randomNumber = Math.random()
console.log(randomNumber); */

//practice code
// we get range from 0.000 - 5.999
// let randomNumber = Math.random()*6;
// console.log(randomNumber);

// practice code
// Math.floor removes the decimal value
/* let floorNumber = Math.floor(3.45632);
console.log(floorNumber);  */

// practice code
// Math.floor(Math.random()*6) we get 0-5
/* let randomNumber = Math.floor(Math.random()*6)
console.log(randomNumber); */

// practice code
//  Math.floor(Math.random()*6+1) we get 1-6
/* let randomNumber = Math.floor(Math.random()*6+1)
console.log(randomNumber); */

// practice code

/* function rollDice(){
    let randomNumber= Math.floor(Math.random()*6+1)
    return randomNumber
}
console.log(rollDice()); */

//  practice code logical operator AND &&
/* 
let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate();
//   if (givesCertificate === true) {
//     generateCertificate();
//   }
}

function generateCertificate() {
  console.log("Generating Certificate.......");
} */

// practice code 

/* let hasSolvedChallenge = false;
let hasHintsLeft = false;

if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution();
}

function showSolution(){
    console.log("Showing the solution...");
} */


//  practice code logical operator OR ||
/* let likesDocumentaries = false;
let likeStarups = false;

if(likesDocumentaries === true || likeStarups === true){
    recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this new film we think you'll like!");
} */

// practice code on Objects

/* let course ={
    title: "learn css for free",
    lessons: 16,
    creator: "Furquan",
    length: 63,
    level: 2,
    isFree: true,
    tags:["html", "css"]
}
console.log(course.tags); */

// practice code
/* 
let castle={
    title:"Live like a King",
    price: 190,
    isSuperHost: true,
    images:["img/castle1.png", "img/castle2.png"]

}
console.log(castle.price);
console.log(castle.isSuperHost); */

// practice code

/* let person={
    name: "Furquan",
    age: 26,
    country:"India"
}

function logData(){
    console.log(person.name + " is " +person.age +" years old and lives in "+person.country);
}
logData() */

// practice code
/* 
let age = 75;

if(age < 6){
    console.log("Free");
}else if(age <18){
console.log("Child Discount");
}else if (age < 27){
    console.log("Student Discount");
}else if(age < 67){
    console.log("Full Price");
}else{
    console.log("Senior citizen Discount");
}
 */

// practice code 
/* 
let largestCountries =["China","India","USA","Indonesia","Pakistan"]

for (let i = 0; i<largestCountries.length; i++){
console.log("-"+largestCountries[i]);
} */

// practice code

/* let largestCountries =["Tuvalu","India","USA","Indonesia","Monaco"]

largestCountries.pop()
largestCountries.push("Pakistan")
console.log(largestCountries);

largestCountries.shift()
largestCountries.unshift("China")
console.log(largestCountries); */

// practice code

/* let dayOfMonth =31;
let weekday = "Friday"

if(dayOfMonth === 31 && weekday === "Friday"){
    console.log("Wohoooooooooo!");
} */

// practice code 

/* let hands =["rock","paper","scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log( getHand()); */

// practice code
