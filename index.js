// Get all DOM elements
const homeScore = document.querySelector('.home-score');
const awayScore = document.querySelector('.away-score');
const winner = document.querySelector('.winner-team');

// Initialize the scores
let homeScoreValue = 0;
let awayScoreValue = 0;
let winnerTeam = '-';

// Update the scores
function updateScores() {
    homeScore.textContent = homeScoreValue;
    awayScore.textContent = awayScoreValue;
    winner.textContent = winnerTeam;
}

// Update the winner
function updateWinner() {
    if (homeScoreValue > awayScoreValue) {
        winnerTeam = 'Home';
    } else if (homeScoreValue < awayScoreValue) {
        winnerTeam = 'Away';
    } else {
        winnerTeam = 'Draw';
    }
}

// Update UI on document load
updateScores();

// Add event listener to the buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (button.classList.contains('home-point')) {
            switch(buttonText) {
                case '+1':
                    homeScoreValue++;
                    break;
                case '+2':
                    homeScoreValue += 2;
                    break;
                case '+3':
                    homeScoreValue += 3;
                    break;
            }
        } else {
            switch(buttonText) {
                case '+1':
                    awayScoreValue++;
                    break;
                case '+2':
                    awayScoreValue += 2;
                    break;
                case '+3':
                    awayScoreValue += 3;
                    break;
            }
        }
        updateWinner();
        updateScores();
    });
});