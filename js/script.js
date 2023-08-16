const booksWrapper = document.querySelector('.books-wrapper');
const pTilte = document.createElement('p');
const pAuthor = document.createElement('p');
const btnAdd = document.querySelector('.add-btn');
const bookTitleInput = document.querySelector('.title');
const bookAuthorInput = document.querySelector('.author');
let bookStore;
let card;

let books = [];
const addBook = () => {
  const bookObject = {
    bookTitle: bookTitleInput.value.trim(),
    bookAuthor: bookAuthorInput.value.trim(),
  };
  books.push(bookObject);
  localStorage.setItem('books', JSON.stringify(books));
  pTilte.innerText = bookTitleInput.value;
  pAuthor.innerText = bookAuthorInput.value;
};

const updateStorage = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (title) => {
  books = books.filter((book) => book.bookTitle !== title);
  updateStorage();
};

btnAdd.addEventListener('click', () => {
  if (
    bookTitleInput.value.trim().length !== 0 &&
    bookAuthorInput.value.trim().length !== 0
  )
    addBook();
});

const showBookList = () => {
  if (localStorage.length > 0) {
    bookStore = localStorage.getItem('books');
    books = JSON.parse(bookStore);
    booksWrapper.innerHTML = `${books
      .map(
        (book) =>
          `<div class="book-card">
          <p class="book-title">
            ${book.bookTitle}
          </p>
          <p class="book-title">
           ${book.bookAuthor}
          </p>
          <button class="remove-btn">Remove</button>
        </div>
        <hr />`
      )
      .join('')}`;
  }
};
showBookList();

const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    card = e.target.closest('.book-card');
    const title = card.querySelector('.book-title');
    const author = card.querySelector('.book-author');
    removeBook(title.innerText);
    this.location.reload();
  });
});
