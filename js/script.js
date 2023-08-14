const books = [];

function addBook(title, author) {
  return `"${title}" by ${author} `;
}

const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
