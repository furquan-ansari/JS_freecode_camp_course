// document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById("count-el")


// console.log(countEl);
let count = 0;
// console.log(saveEl);

function increment(){
    // console.log("clicked");
    // count = count +1;
    count += 1;
    // countEl.innerText = count
    countEl.textContent = count
    // console.log(count);
}

function save(){
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    // console.log(count);
    countEl.textContent = 0
    count = 0
}
// save()











/* function countdown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
countdown(); */

/* function myLogger(){
    console.log(42);
}
myLogger(); */
/* 
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
function logLapTime(){
    let totalTime = lap1 +lap2 + lap3
    console.log(totalTime);
}
logLapTime()
 */

/*  let lapsCompleted = 0;
 function incrementLaps(){
    
    lapsCompleted = lapsCompleted + 1
  

 }
incrementLaps();
incrementLaps();
incrementLaps();
console.log(lapsCompleted); */

/* let firstBatch = 5;
let secondBatch = 7

let count = firstBatch + secondBatch;

console.log(count); */

/* let myage = 27;
let humanDogRatio = 7;
let myDogAge = myage*humanDogRatio;
console.log(myDogAge);  */

/* let count = 5;

count = count +1;

console.log(count); */

/* let bonusPoint = 50;
bonusPoint = bonusPoint+100;
console.log(bonusPoint);
bonusPoint = bonusPoint-25
console.log(bonusPoint);
bonusPoint = bonusPoint+75
console.log(bonusPoint); */
