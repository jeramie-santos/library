let initialize = true;

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 295,
        read: "Planning"
    }, 
    {
        title: "Subtle art of not giving a f*ck",
        author: "Mark Manson",
        pages: 206,
        read: "Finished"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 380,
        read: "Currently Reading"
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
            let titleContainer = document.createElement("div");
            let infoContainer = document.createElement("div");

            let title = document.createElement("h2");
            let author = document.createElement("p");
            let pages = document.createElement("p");
            let read = document.createElement("p");
        
            card.className = "card";
            author.className = "author";
            titleContainer.className = "title-card";
            infoContainer.className = "info-card";


           

            title.textContent = myLibrary[i].title;
            author.textContent = `by ${myLibrary[i].author}`;
            pages.textContent = `Total pages: ${myLibrary[i].pages}`;
            read.textContent = `Read Status:  ${myLibrary[i].read}`;

            titleContainer.appendChild(title);
        
            
            infoContainer.appendChild(author);
            infoContainer.appendChild(pages);
            infoContainer.appendChild(read);

            card.appendChild(titleContainer);
            card.appendChild(infoContainer);
        
            container.appendChild(card);
        }
    } else {
            const total = document.querySelectorAll(".card");
            for (let i = 0; i < total.length; i++){
                container.removeChild(total[i]);
            }

            for (let i = 0; i < myLibrary.length; i++){
                let card = document.createElement("div");
                let titleContainer = document.createElement("div");
                let infoContainer = document.createElement("div");

                let title = document.createElement("h2");
                let author = document.createElement("p");
                let pages = document.createElement("p");
                let read = document.createElement("p");
            
                card.className = "card";
                author.className = "author";
                titleContainer.className = "title-card";
                infoContainer.className = "info-card";

            

                title.textContent = myLibrary[i].title;
                author.textContent = `by ${myLibrary[i].author}`;
                pages.textContent = `Total pages: ${myLibrary[i].pages}`;
                read.textContent = `Read Status: ${myLibrary[i].read}`;

                titleContainer.appendChild(title);
            
                
                infoContainer.appendChild(author);
                infoContainer.appendChild(pages);
                infoContainer.appendChild(read);

                card.appendChild(titleContainer);
                card.appendChild(infoContainer);
            
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
        dialog.close();
    }
    
    displayBook();
    
}


const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dialog = document.querySelector("dialog");
const btnSubmit = document.querySelector(".btn-submit");
let close = false;


btnOpen.addEventListener("click", () => {
    console.log("gumana");
    dialog.showModal();
});

btnClose.addEventListener("click", () => {
    close = true;
    dialog.close();
    addForm.reset();
});





