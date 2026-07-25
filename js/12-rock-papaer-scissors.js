 /*
      const score = {
        Wins: 0,
        Losses:0,
        Ties: 0
      }
      */

      // const score = JSON.parse(localStorage.getItem('score'));

      let score = JSON.parse(localStorage.getItem('score')) || {
        Wins: 0,
        Losses:0,
        Ties: 0
      }


      //document.querySelector('.js-score')
        //.innerHTML = `Wins: ${score.Wins}, Ties: ${score.Ties}, Losses: ${score.Losses}`; 
        
      updateScoreElement();

      //console.log(JSON.parse(localStorage.getItem('score')));

      // function autoPlay() {
      //   setInterval(function(){
      //     playGame(pickComputerMove());
      //   }, 1000);
      // }

      let isAutoPlaying = false;
      let intervalId;

      function autoPlay() {

        if (!isAutoPlaying) {
          intervalId = setInterval( () => {
          playGame(pickComputerMove());
          document.querySelector('.auto-play-button-element').innerHTML='Stop Play';
          }, 1000);
          isAutoPlaying = true;
          console.log(intervalId);
        } else {
          clearInterval(intervalId);
          document.querySelector('.auto-play-button-element').innerHTML='Auto Play';
                    console.log(intervalId);
          isAutoPlaying = false;
        }

       }

       document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
          playGame('Rock');
        });

      document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
          playGame('Paper');
        });

      document.querySelector('.js-scissors-button')
        .addEventListener('click',() => {
          playGame('Scissors');
        });
      
      document.body.addEventListener('keydown', (event) => {

        if (event.key === 'r') {
          playGame('Rock');
        } else if (event.key === 'p') {
          playGame('Paper');
        } else if (event.key === 's') {
          playGame('Scissors');
        }
        });
        

      function playGame(playerMove) {
      
        const computerMove = pickComputerMove();
        
        let result = '';

        if (playerMove === 'Rock') { 
          if (computerMove === 'Rock') {
            result = 'Tie!'
          } else if (computerMove === 'Paper') {
            result = 'You Lose!';
          } else if (computerMove === 'Scissors') {
            result = 'You Win!';
          }

        } else if (playerMove === 'Paper') {  
          if (computerMove === 'Rock') {
            result = 'You Win!';
          } else if (computerMove === 'Paper') {
            result = 'Tie!';
          } else if (computerMove === 'Scissors') {
            result = 'You Lose!';
          }
          
        } else if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You Lose!';
          } else if (computerMove === 'Paper') {
            result = 'You Win!';
          } else if (computerMove === 'Scissors') {
            result = 'Tie!';
          }
        }

        if (result === 'You Win!') {
          score.Wins += 1;
        } else if (result === 'Tie!') {
          score.Ties += 1;
        } else if ( result === 'You Lose!' ) {
          score.Losses += 1;
        }
        
        localStorage.setItem('score', JSON.stringify(score));

        //document.querySelector('.js-score')
        //.innerHTML = `Wins: ${score.Wins}, Ties: ${score.Ties}, Losses: ${score.Losses}`; 
      
        updateScoreElement();

        document.querySelector('.js-result')
          .innerHTML = result;

        document.querySelector('.js-moves')
          .innerHTML = `You 
                            <img src="/images/${playerMove}-emoji.png" class="move-icon">
                            <img src="/images/${computerMove}-emoji.png" class="move-icon">`;

        //console.log(score);
//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
// Wins: ${score.Wins}, Ties: ${score.Ties}, Losses: ${score.Losses}`);
      }
      
      // function resetScores() {
      //   score.Wins = 0;
      //   score.Ties = 0;
      //   score.Losses = 0;

      //   localStorage.removeItem('score');

      //   console.log(score);
      //   //alert(`${score}`);
      // }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.Wins}, Ties: ${score.Ties}, Losses: ${score.Losses}`;

        document.querySelector('.js-moves')
          .innerHTML = 'You have to wait until a move is picked!';

        document.querySelector('.js-result')
          .innerHTML = 'Pick a move, to see the result!';
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
          //alert('Rock is selected')
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'Paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'Scissors';        // var randomNumber = 0.5  -- doen't follow scope
        }

        return computerMove;
        //return; // undefined
        console.log('after'); // after return this will not execue
      }