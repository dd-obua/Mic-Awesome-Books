const booksWrapper = document.querySelector('.books-wrapper');
const pTilte = document.createElement('p');
const pAuthor = document.createElement('p');
const btnAdd = document.querySelector('.add-btn');
const bookTitleInput = document.querySelector('.title');
const bookAuthorInput = document.querySelector('.author');
let card;

let books = [];

const AddBook = () => {
  pTilte.innerText = bookTitleInput.value;
  pAuthor.innerText = bookAuthorInput.value;
  const bookObject = {
    bookTitle: bookTitleInput.value,
    bookAuthor: bookAuthorInput.value,
  };
  books.push(bookObject);
  localStorage.setItem('books', JSON.stringify(books));
  // this.location.reload();
};

const updateStorage = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (title) => {
  books = books.filter((book) => book.title !== title);
  updateStorage();
};

btnAdd.addEventListener('click', AddBook);

if (localStorage.length > 0) {
  const bookStore = localStorage.getItem('books');
  books = JSON.parse(bookStore);
  booksWrapper.innerHTML = `${books
    .map(
      (book) =>
        `<li class="book-card">
        <p class="title">${book.bookTitle}</p>
        <p>${book.bookAuthor}</p>
        <button class="remove-btn">Remove</button>
      </li>
      <hr />`
    )
    .join('')}`;
}

const removeBtns = document.querySelectorAll('.remove-btn');
// console.log(removeBtn);
// removeBtn.addEventListener('click', removeBook);
removeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    card = e.target.closest('.book-card');
    console.log(card);
    // removeBook();
  });
});

// removeBtn.addEventListener('click', () => {
//   console.log('clicked');
// });
