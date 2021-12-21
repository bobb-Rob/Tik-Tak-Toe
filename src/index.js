import './style.css';
import { gameLogic } from './gameLogic';
import { gameTitle } from './components/gameTitle';
import { selectPlayer } from './components/selectPlayer';


// Sections
const ticTakToe = (function(){
        // Game Board
    const gameBoard = document.querySelector('.gameboard');
    const gameOver = document.querySelector('.game-over');
              
    // Grab number of Rounds to be played & Start game btn
    const threeRounds = document.querySelector('.three-rounds');
    const fiveRounds = document.querySelector('.five-rounds');
    
    const startGameBtn = document.querySelector('.start-game');

    
    // Function to hide & show section
        // Function to hide section
        function hideElement(elem){
            elem.classList.add('hide');
        }
        // Function to show section
        function elementAppear(tag){
            tag.classList.remove('hide');
        }
   
return {hideElement, elementAppear, startGameBtn, threeRounds,
    fiveRounds, gameBoard, gameOver
}

})()

export {ticTakToe}

  