const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 295,
        read: "not read yet"
    }, 
    {
        title: "Subtle art of not giving a f*ck",
        author: "Mark Manson",
        pages: 206,
        read: "yes"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 380,
        read: "currently"
    },
];

function Book() {

}

function addBookToLibrary() {

}

const mainContainer = document.querySelector(".main-container");
const content = document.createElement("div");

content.className = "content";
mainContainer.appendChild(content);

for (let i = 0; i < myLibrary.length; i++){
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");

    card.className = "card";
    author.className = "author";

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    content.appendChild(card);
}


