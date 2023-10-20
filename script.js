
///// games played

let gamesPlayed = [];

function Game(title, genre, timePlayed, havePlayed){
    this.title = title
    this.genre = genre
    this.timePlayed = timePlayed
    this.havePlayed = havePlayed
}

/////  DOM elements

const openFormButton = document.querySelectorAll('[data-new]')
const closeFormButton = document.querySelectorAll('[data-close]')
const resetPageButton = document.querySelectorAll('[data-reset]')
const addGame = document.getElementById('game-form')
const overlay = document.getElementById('overlay')
const gameTile = document.getElementById('gameTile')
const mainBodyElement = document.getElementById('mainBody')
const closeTileButton = document.querySelectorAll('[data-close-tile]')
const form = document.querySelector('form');
const gameTitle = document.querySelectorAll('[data-title]');
const gameGenre = document.getElementById('genre');
const playTime = document.getElementById('play-time');
const played = document.getElementById('played');


///// event listeners

openFormButton.forEach(button => {
    button.addEventListener('click', () => {
        openForm();
    })
})

resetPageButton.forEach(button => {
    button.addEventListener('click', () => {
        resetPage();
    })
})

closeFormButton.forEach(button => {
    button.addEventListener('click', () => {
        closeForm();
        
    })
})

closeTileButton.forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.removeP
    })
})

///// creates new game object to be displayed on tile

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents submit button from reloading page instead of storing data
    
   
    let newTitle = document.getElementById('game-title').value;
    let newGenre = document.getElementById('genre').value;
    let newPlayTime = document.getElementById('play-time').value;

    const newObject = new Game(newTitle, newGenre, newPlayTime);
    console.log(newObject);
    gamesPlayed.push(newObject);
    document.forms[0].reset();

    if(gameGenre === ''){
        closeForm();
    } else if(newGenre.length > 0){
        createTile(newObject);
        closeForm();
    }

})

///// functions


function addGametoLibrary(){
    this.gamesPlayed.push(Game);
}

function openForm() {
    if(!addGame.classList.contains('showForm')){
        addGame.style.display = 'block';
        overlay.classList.add('active')
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            addGame.classList.add('showForm')
        })

    }
}

function closeForm(){
    addGame.classList.add('fade-out');
    overlay.classList.remove('active');
    document.body.style = '';
    setTimeout(() => {
        addGame.classList = '';
        addGame.style = '';
    })
}

function resetPage(){
    document.querySelectorAll('.gameTile').forEach( e => {
        e.parentNode.removeChild(e)
    })
    
}

function newObj(){
    let newTitle = document.getElementById('game-title').value;
    let newGenre = document.getElementById('genre').value;
    let newPlayTime = document.getElementById('play-time').value;
    let newPlayed = document.getElementById('played').value;


    const newObject = new Game(newTitle, newGenre, newPlayTime, newPlayed);
    console.log(newObject);
    gamesPlayed.push(newObject);
    document.forms[0].reset();

}

//// creates tiles with form elements displayed in a tile

function createTile(object){

    const newTile = gameTile.cloneNode(true);

    const cloneTitle = newTile.querySelectorAll('p');

    cloneTitle.forEach((element) => {
        if(element.classList.contains('gameTitle')){
            element.innerText = object.title;
        } else if(element.classList.contains('gameGenre')){
            element.innerText = object.genre;
        } else if(element.classList.contains('gamePlayTime')){
            element.innerText = object.timePlayed;
        } else {
            return;
        }
    })

    mainBodyElement.appendChild(newTile);
   

    




    
    
}

