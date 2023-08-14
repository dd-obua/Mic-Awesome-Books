const books = [];

function addBook(title, author) {
  this.title = title;
  this.author = author;
  return `"${this.title}" by ${this.author} `;
}

const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
