/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, roundScores, gamePlaying;

init();


//event handler

document.querySelector('.btn-roll').addEventListener('click', function() {

  if (gamePlaying) {


    //Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //update the round score only if the rolled number was not a 1

    if (dice !== 1) {
      //add score

      roundScores += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }
    else {
      //next player

      nextPlayer();

    };

  }

});





document.querySelector('.btn-hold').addEventListener('click', function() {

  if (gamePlaying) {

    //add current score to the globe scoreboard
    scores[activePlayer] += roundScores;

    //update the UI with the actual score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won the game

    if (scores[activePlayer] >= 20) {

      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }
    else {
      //nextPlayer();
    }
  }

});






function nextPlayer() {

  //next player

  //new method
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScores = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';

}



document.querySelector('.btn-new').addEventListener('click', function() {
  init();
})



function init() {

  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}



