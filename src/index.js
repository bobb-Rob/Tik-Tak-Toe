import './style.css';
import { eventListener } from './events';

// Sections
const ticTakToe = (function(){
    console.log('I am gameMode');
    const gameName = document.querySelector(".game-name");
    const choosePlayer = document.querySelector(".choose-player");
    const selectPlayerSection = document.querySelector(".player-name");
    console.log(eventListener.printMe())
    // Player two and Bot
    const secondPlayerDiv = document.querySelector(".player-two");
    const botDiv = document.querySelector(".bots-box");

    // Game Bot
    const gameBoard = document.querySelector('.gameboard');
    const gameOver = document.querySelector('.game-over');

    // Players input names
    const _playerOne = document.getElementById('player-1').defaultValue = 'Leo';
    const playerOneValue = _playerOne.value;

    const _playerTwo = document.getElementById('player-2').defaultValue = 'Nikky';
    const playerTwoValue = _playerTwo.value;
    // Players input names ENDS

    // Grab AI Bot selected
    const allBots = document.querySelectorAll('.ai');
    
    // Grab number of Rounds to be played & Start game btn
    const threeRounds = document.querySelector('.three-rounds');
    const fiveRounds = document.querySelector('.five-rounds');
    
    const startGameBtn = document.querySelector('.start-game');

    // threeRounds.addEventListener('click', (e)=>{
    //     e.target.style.backgroundColor = 'blue' 
    // })
    // // 




    // Function to hide & show section
        // Function to hide section
        function hideElement(elem){
            elem.classList.add('hide');
        }
        // Function to show section
        function elementAppear(tag){
            tag.classList.remove('hide');
        }
    // Function to hide & show section ends

    // Hide Select player section, hide Game Over section, Hide GameBoard Section
    window.onload = () =>{
        hideElement(selectPlayerSection);      
        hideElement(gameOver)        
        hideElement(gameBoard)  
    }
            

    //Start of AI mode code
// gameMode.eventForBot()

return {hideElement, elementAppear, gameName, choosePlayer, selectPlayerSection,
    secondPlayerDiv, botDiv, startGameBtn, playerOneValue, playerTwoValue, allBots, threeRounds,
    fiveRounds, gameBoard, gameOver
}

})()

export {ticTakToe}

// function checkWinXCell() {
//     return winningConditions.some((combination) => {
//       return combination.every((i) => {
//         return cells[i].innerText === "X";
//       });
//     });
//   }

//   function checkWinOCell() {
//     return winningConditions.some((combination) => {
//       return combination.every((i) => {
//         return cells[i].innerText === "O";
//       });
//     });
//   }

//   function isTieCell() {
//     return cells.every((cell) => {
//       return cell.innerText === "X" || cell.innerText === "O";
//     });
//   }

//   let turnX = true;
//   let gameOver = false;
//   const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   const cells = [...document.querySelectorAll(".grids")];
//   console.log(cells)


  