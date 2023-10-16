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
        createTile();
    })
})

resetPageButton.forEach(button => {
    button.addEventListener('click', () => {
        resetPage()
    })
})


closeFormButton.forEach(button => {
    button.addEventListener('click', () => {
        closeForm()
        
    })
})

closeTileButton.forEach(button => {
    button.addEventListener('click', () => {
        closeTile()
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
    gameTile.remove()
}

function createTile(){
    const newTile = document.createElement('div');
    mainBodyElement.appendChild(newTile);
    newTile.classList.add('gameTile');
    
}





closeFormButton()