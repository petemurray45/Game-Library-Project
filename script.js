let booksRead = [];

function addBooksRead(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const openFormButton = document.querySelectorAll('[data-new]')
const closeFormButton = document.querySelectorAll('[data-close]')
const addGame = document.getElementById('game-form')
const overlay = document.getElementById('overlay')

openFormButton.forEach(button => {
    button.addEventListener('click', () => {
        openForm()
    })
})

closeFormButton.forEach(button => {
    button.addEventListener('click', () => {
        closeForm()
        
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

closeFormButton()