
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
const gameTitle = document.getElementById('title');
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
        e.parentNode.remove();
    })
})

///// creates new game object to be displayed on tile

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents submit button from reloading page instead of storing data
    
   
    let newTitle = document.getElementById('game-title').value;
    let newGenre = document.getElementById('genre').value;
    let newPlayTime = document.getElementById('play-time').value;
    let newPlayed = document.getElementById('played').value;

    const newObject = new Game(newTitle, newGenre, newPlayTime, newPlayed);
    console.log(newObject);
    gamesPlayed.push(newObject);
    document.forms[0].reset();

    createTile(newObject);

    closeForm();
    

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

function closeTile(){
    gameTile.forEach(remove());
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

    const newTile = document.createElement('div');
    newTile.classList.add('gameTile');

    mainBodyElement.appendChild(newTile);

    const closeButton = document.createElement('button');
    closeButton.classList.add('tileCloseButton');
    closeButton.innerHTML = '&times;'
    closeButton.setAttribute('data', 'close-tile');
    newTile.appendChild(closeButton);

    newTile.appendChild(closeButton);

    const newGameTitle = document.createElement('p');
    newGameTitle.classList.add('gameTitle');
    newGameTitle.innerText = object.title;
    newTile.appendChild(newGameTitle);

    const genreText = document.createElement('p');
    genreText.classList.add('gameGenre');
    genreText.innerText = object.genre;
    newTile.appendChild(genreText);

    const gamePlayTime = document.createElement('p');
    gamePlayTime.classList.add('gamePlayTime');
    gamePlayTime.innerText = object.timePlayed;
    newTile.appendChild(gamePlayTime);

    const gamePlayed = document.createElement('p');
    gamePlayed.classList.add('havePlayed');
    newTile.appendChild(gamePlayed);


    const gamePlayedText = document.createElement('span');
    gamePlayedText.innerText = 'Played:'
    gamePlayed.appendChild(gamePlayedText);

    const switchContainer = document.createElement('div');
    const switctLabel = document.createElement('label');
    const switchDiv = document.createElement('div');
    switctLabel.classList.add('switch');
    switchContainer.classList.add('switchContainer');




    
    
}

