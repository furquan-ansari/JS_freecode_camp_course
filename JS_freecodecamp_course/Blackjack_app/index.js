// let firstCard = 10;
// let secondCard = 4;

let player = {
    name : "Furquan",
    chips: 145
}
let cards = []
let sum = 0 ;
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = ("Do you want to draw a new card?");
    }
    else if(sum === 21){
      message = ( "You've got Blackjack!");
      hasBlackJack = true
    //   alert(hasBlackJack)
    }
    else{
        message = ("You're out of the game!");
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
console.log("Drawing a new card from the deck");
if (isAlive === true && hasBlackJack === false){
let card = getRandomCard()
// let card = 6;
sum += card;
cards.push(card)
console.log(cards);

renderGame();
}
}


/* __________________________________________________ */




// practice code 1
/* let age = 21;

  
if(age <= 20){
    alert("You can't enter the club")
}
else{
    alert("Welcome!")
} */

// practice code 2
/* let age = 101;

if(age < 100){
    alert("Not eligibe!")
}
else if(age === 100){
    alert("Here is your birthday card from the king!")
}
else{
    alert("Not eligible, You have already gotten one")
}
 */

