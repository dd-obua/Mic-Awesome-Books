// Sample array of books
var books = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];

function updateDisplay() {
  var bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Clear the existing list

  books.forEach(function (book, index) {
    var listItem = document.createElement('li');
    listItem.textContent = book;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      removeBook(index);
    });

    listItem.appendChild(removeButton);
    bookList.appendChild(listItem);
  });
}

function removeBook(index) {
  books.splice(index, 1);
  updateDisplay();
}

// Initial display
updateDisplay();
