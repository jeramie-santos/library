let initialize = true;

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 295,
        isRead: "No"
    }, 
    {
        title: "Subtle art of not giving a f*ck",
        author: "Mark Manson",
        pages: 206,
        isRead: "Yes"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 380,
        isRead: "Yes"
    },
];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function() {
    return this.textContent = this.textContent == "Yes" ? "No" : "Yes";
}

const btnOpen = document.querySelector("header button");
const btnClose = document.querySelector(".btn-close");
const dialog = document.querySelector("dialog");
const btnSubmit = document.querySelector(".btn-submit");

const main = document.querySelector("main");
const container = document.createElement("div");

container.setAttribute("class", "container");
main.appendChild(container);

function displayBook(){

    if (!initialize) {
        const total = document.querySelectorAll(".card");
        for (let i = 0; i < total.length; i++){
            container.removeChild(total[i]);
        }
    }

    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement("div");
        let titleContainer = document.createElement("div");
        let infoContainer = document.createElement("div");

        let title = document.createElement("h2");
        let author = document.createElement("h3");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        let btnDel = document.createElement("button");
       
    
        card.className = "card";
        author.className = "author";
        titleContainer.className = "title-card";
        infoContainer.className = "info-card";
        author.className = "author";
        pages.className = "pages";
        read.className = "is-read";
        btnDel.className = "btn-delete";

        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        read.textContent = myLibrary[i].isRead;

        btnDel.textContent = "X";
        btnDel.addEventListener("click", function() {
            deleteItem(i);
        });
      
        Object.setPrototypeOf(myLibrary[i], Book);

        read.addEventListener("click", () => {
            read.textContent = myLibrary[i].prototype.toggleReadStatus();
            if (read.textContent == "Yes") {
                read.classList.remove("no-check");
                read.classList.add("check")
            } else if (read.textContent == "No") {
                read.classList.add("no-check");
                read.classList.remove("check")
            }
        })

        read.textContent == "Yes" ?  read.classList.add("check") :  read.classList.add("no-check")

        titleContainer.appendChild(title);
        titleContainer.appendChild(btnDel);
       
    
        infoContainer.appendChild(author);
        infoContainer.appendChild(pages);
        infoContainer.appendChild(read);

        card.appendChild(titleContainer);
        card.appendChild(infoContainer);
    
        container.appendChild(card);
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
    const bookRead = document.querySelector("#book-read");
    let isRead;

    if (bookRead.checked == true) {
        isRead = "Yes";
    } else {
        isRead = "No";
    }

    if (bookTitle == "" || bookAuthor == "" || bookPage == "" || isRead == "") {
            
    } else {
        myLibrary.push(new Book(bookTitle, bookAuthor, bookPage,isRead));
        addForm.reset();
        dialog.close();
    }
    
    displayBook();
    
}


btnOpen.addEventListener("click", () => {
    dialog.showModal();
});

btnClose.addEventListener("click", () => {
    dialog.close();
    addForm.reset();
});

function deleteItem(index){
    initialize = false;
    myLibrary.splice(index, 1);
    displayBook();
}















