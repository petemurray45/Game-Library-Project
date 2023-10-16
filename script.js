let booksRead = [];

function addBooksRead(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const openFormButton = document.querySelectorAll('[data-new]')
const closeFormButton = document.querySelectorAll('[data-close]')
const resetPageButton = document.querySelectorAll('[data-reset]')
const addGame = document.getElementById('game-form')
const overlay = document.getElementById('overlay')
const gameTile = document.getElementById('gameTile')
const mainBodyElement = document.getElementById('mainBody')
const closeTileButton = document.querySelectorAll('[data-close-tile')

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
    gameTile.remove()
}

function resetPage(){
    document.querySelectorAll('.gameTile').forEach( e => {
        e.parentNode.removeChild(e)
    })
    
}

function createTile(){
    const newTile = document.createElement('div');
    newTile.classList.add('gameTile');
    const closeButton = document.createElement('button');
    closeButton.setAttribute('data', 'close-tile');
    closeButton.classList.add('tileCloseButton')
    const genreText = document.createElement('p');
    genreText.classList.add('gameGenre');
    const playTime = document.createElement('p');
    playTime.classList.add('gamePlayTime');



    mainBodyElement.appendChild(newTile);
    newTile.appendChild(closeButton);
    newTile.appendChild(genreText);
    newTile.appendChild(playTime);
    
    
}

closeFormButton()