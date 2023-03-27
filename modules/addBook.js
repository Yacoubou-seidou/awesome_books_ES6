import addBookToPage from './addBookToPage.js';

const bookForm = document.querySelector('.book-form');
export default (bookName, bookAuthor, bookArray) => {
  const book = {};
  book.title = bookName;
  book.author = bookAuthor;
  bookArray.push(book);
  localStorage.setItem('books', JSON.stringify(bookArray));
  addBookToPage(bookName, bookAuthor, bookArray.length - 1);
  bookForm.reset();
};
