function limitCharacters(event) {
    if (document.getElementById('i').value.length >= 10) {
      event.preventDefault(); 
    }
  }
  


  const p1 = {
    score: 24,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}


const p2 = {
    score: 24,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p1Display')
}

const winningScoreSelect = document.querySelector('#playto');
let winningScore = 100;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score -= 1;
        if(player.score === winningScore) {
            isGameOver = true;
           
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


function update(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
           
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}





p1.button.addEventListener('click', function () {
updateScores(p1);

})
p2.button.addEventListener('click', function () {
  update(p2)

    })










