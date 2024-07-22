let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>  Math.floor(Math.random() * 10);
/*computer guess, human guess, target numberを引数に取り、それぞれの差を計算し、それぞれの差を比較して、どちらが近いかを決める。
人が勝てばtrue、コンピュータが勝てばfalseを返す。引き分けの場合はtrueを返す。 */
const compareGuesses = (humanGuess, compGuess, targetGuess) => {
    const humanDiff = Math.abs(targetGuess - humanGuess);
    const compDiff = Math.abs(targetGuess - compGuess);
    if (humanDiff <= compDiff) {
       return true;
    } else {
       return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    };
}

const advanceRound = () => {
    currentRoundNumber++;
}