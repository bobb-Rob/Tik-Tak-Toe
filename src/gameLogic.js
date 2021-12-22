import {ticTakToe } from "./index"
import { selectPlayer } from "./components/selectPlayer";


// Player two and Bot

const gameLogic = (function(){
 
    window.onload = () =>{
        ticTakToe.hideElement(selectPlayer.playersData);      
        ticTakToe.hideElement(ticTakToe.gameOver)        
        ticTakToe.hideElement(ticTakToe.gameBoard)  
    }


   // Play with Bot button event 
 const vsBotBtn = selectPlayer.vsBotBtn;
 vsBotBtn.addEventListener('click', ()=>{
     ticTakToe.hideElement(selectPlayer.gameMode);
     ticTakToe.elementAppear(selectPlayer.playersData);
     ticTakToe.hideElement(selectPlayer.player2);
 })
 
 // Play two Player section
 const twoPlayers = selectPlayer.vsTwoPlayers;
 twoPlayers.addEventListener('click', ()=>{
    ticTakToe.hideElement(selectPlayer.gameMode);
    ticTakToe.elementAppear(selectPlayer.playersData);
     ticTakToe.hideElement(selectPlayer.player2);
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

    

})()


export {gameLogic}