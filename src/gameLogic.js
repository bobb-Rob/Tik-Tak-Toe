import {ticTakToe } from "./index"
import { selectPlayer } from "./components/selectPlayer";
import { gameTitle } from "./components/gameTitle";


// Player two and Bot

const gameLogic = (function(){
 
    window.onload = () =>{
        ticTakToe.hideElement(selectPlayer.playersData);      
        ticTakToe.hideElement(ticTakToe.gameOver)        
        ticTakToe.hideElement(ticTakToe.gameBoard)  
    }

    
    const removeClasses = (target, arr, className) => arr.forEach((bot) => 
    (bot == target) ? bot.classList.add(className) : bot.classList.remove(className));
      
    const randomMarker = () => Math.floor(Math.random() * 10) > 5 ? 'X' : 'O';  

    // let gameBoardLabel = document.querySelector('.game-vs-label');
    let gameBoardLabelOne = document.querySelector('.play1-display');
    let gameBoardLabelTwo = document.querySelector('.play2-display');
    let turnDisplay = document.querySelector('.turn-display');

    class Player {
        constructor(name,marker) {
            this.name = name;                    
            this.marker = marker;                    
        }
        getName(){
            return this.name
        }
    }

    
   // Play with Bot button event 
    selectPlayer.vsBotBtn.onclick = () => {
        ticTakToe.hideElement(selectPlayer.gameMode);
        ticTakToe.elementAppear(selectPlayer.playersData);
        ticTakToe.hideElement(selectPlayer.player2);
        gameMode = true;
    }


    let playerOne = new Player('Leo', 'O')
    let playerTwo = new Player('Nikky', 'X'); 
      

    // Play two Player section
    selectPlayer.vsTwoPlayers.onclick =  () =>{
        ticTakToe.hideElement(selectPlayer.gameMode);
        ticTakToe.elementAppear(selectPlayer.playersData);
        ticTakToe.elementAppear(selectPlayer.player2);
        ticTakToe.hideElement(selectPlayer.selectBotSection);      
   

        selectPlayer.playerOneInput.onchange = (e) => {
            console.log(e.target.value)
            playerOne.name = e.target.value;        
           gameBoardLabelOne.textContent = playerOne.name;

        }    

        selectPlayer.playerTwoInput.oninput = (e) => {
            playerTwo.name = e.target.value
           gameBoardLabelTwo.textContent = playerTwo.name;  
        }       
    }
  


    // ROunds variables and function

        let rounds = [];
        let noOfRound = undefined;

        function getRounds(){
            if(document.querySelector('.three-rounds').classList.contains('dgame-round')){
                return 3;
            }
            return 5;
        };



        // select round to play
    const allRounds = document.querySelectorAll('.roud')
    allRounds.forEach(round => {
        round.addEventListener('click', ()=>{
            removeClasses(round, allRounds, 'dgame-round');
        })
    }); 
   

    function createRoundsDivs(){
        noOfRound = getRounds();
        for (let  i = 1;  i < noOfRound + 1 ;  i++) {
            const div = document.createElement('div');
            div.className = `each-rounds round-${i}`;
            div.textContent = `Round: ${i}`
            const roundWinnerDisplay = document.createElement('div');
            roundWinnerDisplay.className = `each-round-winner round-${i}-Winner`;
            document.querySelector('.how-many-rounds').append(div);
            document.querySelector('.round-winner').append(roundWinnerDisplay);
        }            
    }
    // Rounds Logic ends here



    // start game btn
    const startGameBtn = document.getElementById('start-game');
    startGameBtn.onclick = (e) => {
        ticTakToe.hideElement(selectPlayer.playersData); 
        ticTakToe.hideElement(gameTitle.gameName); 
        ticTakToe.elementAppear(ticTakToe.gameBoard);
        // ticTakToe.elementAppear(ticTakToe.gameOver);
        gameBoardLabelTwo.textContent = playerTwo.name;
        gameBoardLabelOne.textContent = playerOne.name;
        turnDisplay.textContent = `${gameBoardLabelOne.textContent}'s turn`;
        createRoundsDivs();
        selectRound('.round-1', 0)
    }


    const resetRound = () => document.querySelectorAll('.each-rounds').forEach(r => {
            r.style.backgroundColor = '';
            r.style.color = 'black';
        });
    

    const toggleRound = (klass, round) => { 
        resetRound(); selectRound(klass, round)
    }

    const changeRoundColor = (klass) => {
        let e = document.querySelector(klass);
        e.style.backgroundColor = '#5F4744';
        e.style.color = '#F4CDC8';
    }

    function selectRound(klass, roundNo){
        if(noOfRound === 3 && rounds.length === roundNo){
            changeRoundColor(klass);
        } else if(noOfRound === 5 && rounds.length === roundNo){
            changeRoundColor(klass);
        }       
    }


    // Select Bots
    const allBots = document.querySelectorAll('.ai');
    allBots.forEach(bot => {                 
        bot.addEventListener('click', ()=>{           
            removeClasses(bot, allBots, "ai-bot");               
        })       
    });



       
        
        var occurrence = function (array) {
            "use strict";
            let countedMark = array.reduce(function (allItems, mark) {
                if (mark in allItems) {
                    allItems[mark]++
                }
                else {
                    allItems[mark] = 1
                }
                return allItems
              }, {})

              return countedMark
        };


    // Game play Logic   
    const boxes = document.querySelectorAll('.grids');
    const winningDisplay = document.querySelector('.winningStatus');  
    const restartGameBtn = document.querySelector('.restart-btn');
    const newGameBtn = document.querySelector('.new-game-btn');

    const gameObj = {
        spaces: [],
        tick_circle: 'O',
        tick_x: 'X',
        currentPlayer: '',
    }



    let spaces = [];
    const tick_circle = "O";
    const tick_x = 'X';
    let currentPlayer = tick_circle;

    const drawBoard = () => {
        boxes.forEach((box) => {
            box.addEventListener('click', boxClicked)     
        });       
    }


    function displayGameWinner(winner){
        setTimeout(() => {
            ticTakToe.hideElement(ticTakToe.gameBoard);
            ticTakToe.elementAppear(ticTakToe.gameOver);
            winningDisplay.innerText = `${ winner} has won!`;
        }, 1000);
    }

    

    function checkForWinner(arr){        
        let winner = occurrence(arr);               
        console.log(winner['O'] + 'player O')
        let x = winner.X
        let y = winner.O
        console.log((x > y));

        if(x > y){                  
            displayGameWinner(gameBoardLabelOne.textContent);
            return;
        } else{
            displayGameWinner(gameBoardLabelTwo.textContent);
            console.log(winner['X'] + 'Player X')
        }      
    }


    const boxClicked = (e) => {
        const id = e.target.id;
        console.log(id);
        if(!spaces[id]) {
            spaces[id] = currentPlayer;           
            e.target.innerText = currentPlayer;
            console.log(spaces);
            if(currentPlayer !== 'O'){
                turnDisplay.textContent = `${gameBoardLabelOne.textContent}'s turn` ;
            }else{
                turnDisplay.textContent = `${gameBoardLabelTwo.textContent}'s turn`;
            }

            noOfRound = getRounds();

            if(playerWon()) {                                         
                rounds.push(currentPlayer);
                console.log(rounds);
                // console.log(currentPlayer);   
              
               setTimeout( restart(), 3000); 
                // return;
            }
            
            if( (noOfRound === 3 || noOfRound === 5) &&  rounds.length === 1){
                toggleRound('.round-2', 1);                      
            }               
            
            if( (noOfRound === 3 || noOfRound === 5) &&  rounds.length === 2){
                toggleRound('.round-3', 2);                                    
            }

            if( (noOfRound === 3 ) &&  rounds.length === 3){
                toggleRound('.round-3', 3); 
                checkForWinner(rounds);                    
            }
           
            if( noOfRound === 5 && rounds.length === 3){
                toggleRound('.round-4', 3);
                          
            }

            if( (noOfRound === 5) &&  rounds.length === 4){
                toggleRound('.round-5', 4);                  
            }              

            if( (noOfRound === 5) &&  rounds.length === 5){
                toggleRound('.round-5', 5);
                checkForWinner(rounds);                  
            }              
      



            

            if(playerDraw()) {
                return;
            }
            currentPlayer = (currentPlayer === tick_circle) ? tick_x : tick_circle;
        }
    };
    
    const playerWon = () => {
        if (spaces[0] === currentPlayer) {
          if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins up to top`;
            return true;
          }
          if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins on the left`;
            return true;
          }
          if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins diagonally`;
            return true;
          }
        }
        if (spaces[8] === currentPlayer) {
          if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins on the right`;
            return true;
          }
          if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins on the bottom`;
            return true;
          }
        }
        if (spaces[4] === currentPlayer) {
          if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins vertically on middle`;
            return true;
          }
          if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins horizontally on the middle`;
            return true;
          }
          if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins diagonally`;
            return true;
          }
        }
      };

      const playerDraw = () => {
        let draw = 0;
        spaces.forEach((space, i) => {
          if (spaces[i] !== null) draw++;
        });
        if (draw === 9) {
          winningDisplay.innerText = `Draw`; // the logic for draw display will be here;
          restart();
        }
      };

      const restart = () => {
        setTimeout(() => {
          spaces.forEach((space, i) => {
            spaces[i] = null;
          });
          boxes.forEach((box) => {
            box.innerText = '';
          });
          winningDisplay.innerText = ``;
          ticTakToe.elementAppear(ticTakToe.gameBoard);
          ticTakToe.hideElement(ticTakToe.gameOver);
        }, 1000);
      };

      function restartGame(){
        restart();
        noOfRound = getRounds();
        rounds = [];
        toggleRound('.round-1', 0)
      }

      restartGameBtn.addEventListener('click', restartGame);     
      drawBoard();


})()


export {gameLogic}