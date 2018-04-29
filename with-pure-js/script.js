
let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
let ulEl = document.querySelector('ul');

let teams = [];

buttonEl.addEventListener('click', addTeam);

function addTeam() {
    let userInput = inputEl.value;
    
    if (userInput.trim() == '') { return }
    
    let newTeam = { id: Math.random(), value: userInput };
    teams.push(newTeam);
    
    let teamLi = document.createElement('LI');
    
    teamLi.textContent = userInput;
    teamLi.addEventListener('click', removeTeam);
    teamLi.dataset.id = newTeam.id;
    ulEl.appendChild(teamLi);
    console.log(teams);
}

function removeTeam(event) {
    let clickedLi = event.target;
    let itemId = clickedLi.dataset.id;
    
    for (var i = 0; i < teams.length; i++) {
        if (teams[i].id == itemId) {
            teams.splice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);
    console.log(teams);
}