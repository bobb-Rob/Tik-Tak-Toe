



const selectPlayer = (() => {

    const gameMode = document.querySelector(".choose-player");
    const vsBotBtn = document.getElementById('vs-bot');
    
    const playersData = document.querySelector(".player-name");

    const _playerOneInput = document.getElementById('player-1').defaultValue = 'Leo';
    const playerOneValue = _playerOneInput.value;

    const _playerTwoInput = document.getElementById('player-2').defaultValue = 'Nikky';
    const playerTwoValue = _playerTwoInput.value;
   
    const player2 = document.querySelector(".player-two");
    const vsTwoPlayers = document.getElementById('vs-player-two');

    const selectBotSection = document.querySelector(".bots-box");

    

    return { gameMode, vsBotBtn, playersData, playerOneValue, playerTwoValue, player2, selectBotSection, vsTwoPlayers }

})()


export { selectPlayer }