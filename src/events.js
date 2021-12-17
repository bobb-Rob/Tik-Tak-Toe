import {ticTakToe } from "./index"
export {eventListener}


// Player two and Bot

const eventListener = (function(){
  console.log('Am i first?')

    function printMe(){
    return 'robertson is programmer';
}

 // Play with Bot section 
 const playWithBotButton = document.getElementById('vs-bot');
 playWithBotButton.addEventListener('click', ()=>{
     ticTakToe.hideElement(ticTakToe.choosePlayer);
     ticTakToe.elementAppear(ticTakToe.selectPlayerSection);
     ticTakToe.hideElement(ticTakToe.secondPlayerDiv);
 })
 
 // Play with second Player section
 const playWithSecondButton = document.getElementById('vs-player-two');
 playWithSecondButton.addEventListener('click', ()=>{
    ticTakToe.hideElement(ticTakToe.choosePlayer);
    ticTakToe.elementAppear(ticTakToe.selectPlayerSection);
     ticTakToe.hideElement(ticTakToe.botDiv);
 })

//  AI bot selection event
    function removeClasses(target, arr, className) {
        arr.forEach((boot) => {
          if(boot == target) { boot.classList.add(className); }
          else { boot.classList.remove(className); }
        });
      }

    const allBots = document.querySelectorAll('.ai');
    allBots.forEach(bot => {                 
        bot.addEventListener('click', ()=>{           
            removeClasses(bot, allBots, "ai-bot");               
        })       
    });

    // AI selection event ends
    

// Rounds choice buttons event
    const allRounds = document.querySelectorAll('.roud')
    allRounds.forEach(round => {
        round.addEventListener('click', ()=>{
            removeClasses(round, allRounds, 'dgame-round');
        })
    });   


// Start game Button event

function checkForSelection(arrEl, claseName){
    let result = '';
    for(let bot of arrEl){
       if(bot.classList.contains(claseName)){
            result = true;
            return;
        }
        else{
           result = false;
        }       
    }  
    return result 
}

// console.log(!checkForSelection(allBots, 'ai-bot'))
let chekc = checkForSelection(allBots, 'ai-bot');
console.log(chekc)

    const startGameBtn = document.querySelector('.start-game')
    startGameBtn.addEventListener('click', ()=>{
        console.log('I am clicked, start button')
        if(chekc){
            
            ticTakToe.hideElement(ticTakToe.selectPlayerSection)
            ticTakToe.elementAppear(ticTakToe.gameBoard)
        }else{
            alert('Please choose one AI bot as well as how many rounds to play')
        }       
    })



return {
   printMe
}
})()

