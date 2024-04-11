/**
 * GAME - PEDRA PAPEL TESOURA
 * @william-devBr
 */

const buttons = document.querySelectorAll('button');
const reset = document.getElementById("reset");

const resultEl = document.getElementById('resultado');

const playerScoreEl = document.getElementById('meus-pontos');
const computerScoreEl = document.getElementById('pontos-computador');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button)=> {
     button.addEventListener("click",()=> {
          const result  = playRound(button.id, computerPlay());
          resultEl.textContent = result;
     })
});

reset.addEventListener("click",()=> {
     playerScore = 0;
     computerScore = 0;
     playerScoreEl.textContent = playerScore;
     computerScoreEl.textContent = computerScore;
     resultEl.textContent = " ";

})

// função de escolha do computador
function computerPlay(){
     const choices = ["pedra","papel","tesoura"];
     const randomChoices = Math.floor(Math.random() * choices.length);
     return choices[randomChoices];
}

function playRound(playerSelection,computerSelection){
      if(playerSelection === computerSelection){
         return "empatou !!!";
      }
      else if(
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
      ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "Você ganhou !!!" + playerSelection + " ganha de " + computerSelection;
      }else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "Você perdeu !!!"
      }
}