



const selectPlayer = (() => {

    const gameMode = document.querySelector(".choose-player");
    const vsBotBtn = document.getElementById('vs-bot');
    
    const playersData = document.querySelector(".player-name");

    const playerOneInput = document.getElementById('player-1');
   
    const playerTwoInput = document.getElementById('player-2');
    
   
    const player2 = document.querySelector(".player-two");
    const vsTwoPlayers = document.getElementById('vs-player-two');

    const selectBotSection = document.querySelector(".bots-box");



    return { gameMode, vsBotBtn, playersData, playerOneInput, playerTwoInput, player2, selectBotSection, vsTwoPlayers }

})()


export { selectPlayer }