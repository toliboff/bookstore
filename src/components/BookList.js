import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const categories = ['Action', 'Economy', 'Science Fiction'];
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      <ul>
        {books.map((book) => <Book key={book.id} books={book} />)}
      </ul>

      <AddBook categories={categories} />
    </div>
  );
};

export default BookList;
