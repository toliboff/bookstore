import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBook } from '../redux/books/books';

const BookList = () => {
  const categories = ['Action', 'Economy', 'Science Fiction'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

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
