let initialize = true;

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 295,
        read: "No"
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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}




const main = document.querySelector("main");
const container = document.createElement("div");
container.setAttribute("class", "container");
main.appendChild(container);

function displayBook(){
    
    if (initialize) {
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
        
            container.appendChild(card);
        }
    } else {
            const total = document.querySelectorAll(".card");
            for (let i = 0; i < total.length; i++){
                container.removeChild(total[i]);
            }

            for (let i = 0; i < myLibrary.length; i++){
                let card = document.createElement("div");
                let title = document.createElement("h2");
                let author = document.createElement("p");
                let pages = document.createElement("p");
                let read = document.createElement("p");
            
                card.className = "card";
                author.className = "author";
            
                title.textContent = myLibrary[i].title ;
                author.textContent = myLibrary[i].author;
                pages.textContent = myLibrary[i].pages;
                read.textContent = myLibrary[i].read;
            
                card.appendChild(title);
                card.appendChild(author);
                card.appendChild(pages);
                card.appendChild(read);
            
                container.appendChild(card);
                main.appendChild(container);
            }
            
    }
    
}

displayBook();





const addForm = document.querySelector(".add-book");
addForm.addEventListener("submit", addBookToLibrary)


function addBookToLibrary(event) {
    initialize = false;
    event.preventDefault();
    
    const bookTitle = document.querySelector("#book-title").value;
    const bookAuthor = document.querySelector("#book-author").value;
    const bookPage = document.querySelector("#book-page").value;
    const bookRead = document.querySelector("#book-read").value;
    
    // console.log(`${bookTitle} by ${bookAuthor}, ${bookPage} pages, ${bookRead}`);

    if (bookTitle == "" || bookAuthor == "" || bookPage == "" || bookRead == "") {
            
    } else {
        myLibrary.push(new Book(bookTitle, bookAuthor, bookPage,bookRead));
        addForm.reset();
    }

    
    displayBook();
    
}




