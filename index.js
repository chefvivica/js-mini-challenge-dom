  
/***** Deliverable 1 *****/

// window.addEventListener(‘DOMContentLoaded’, (event) => {   
const header = document.getElementById("header");
// console.log("Here's your header:", header)
/***** Deliverable 2 *****/

header.style.color = "red";


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS);

const playerContainer = document.getElementsByClassName('player-container')[0];

PLAYERS.forEach(player => {
    const playerDiv = document.createElement('div');

    playerDiv.className = "player"
    playerDiv.dataset.number = `${player.number}`
    playerDiv.innerHTML = `
    <h3> ${player.name}(<em> ${player.nickname}</em>)</h3>
    <img src = ${player.photo} alt= "${player.name}">  
    `
    playerContainer.appendChild(playerDiv);  
});


/***** Deliverable 4 *****/

const players = document.querySelectorAll('.player'); 
    players.forEach(function(player){
        if (player.dataset.number === '7'){
            player.remove();
        }
    });








