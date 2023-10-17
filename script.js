
///// games played

let gamesPlayed = [];

function Game(name, genre, playtime, played){
    this.name = name;
    this.genre = genre;
    this.playtime = playtime;
    this.played = played;
    
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
const playTime = document.getElementById('playTime');
const played = document.getElementById('played')


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
    button.addEventListener('click', () => {
        closeTile();
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const game = new Game(gameTitle.value, gameGenre.value, playTime.value, played.checked);
    if (gamesPlayed.includes(game.gameTitle)){
        alert('This game is already included in the library')
    } else {
        addGametoLibrary(Game);
    } console.log(Game);


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

function createTile(gamesPlayed){

    mainBodyElement.forEach(gamesPlayed => {

        




        const newTile = document.createElement('div');
        newTile.classList.add('gameTile');

        const closeButton = document.createElement('button');
        closeButton.setAttribute('data', 'close-tile');
        closeButton.innerHTML = '&times;'
        closeButton.classList.add('tileCloseButton')

        const genreText = document.createElement('p');
        genreText.classList.add('gameGenre');

        const playTime = document.createElement('p');
        playTime.classList.add('gamePlayTime');



        mainBodyElement.appendChild(newTile);
        newTile.appendChild(closeButton);
        newTile.appendChild(genreText);
        newTile.appendChild(playTime);
        
    })





  
    
    
}

