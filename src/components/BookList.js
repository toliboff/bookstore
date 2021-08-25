import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
// import { removeBook } from '../redux/books/books';

const BookList = () => {
  const categories = ['Action', 'Economy', 'Science Fiction'];
  const books = useSelector((state) => state.booksReducer);
  // useSelector((state) => state.booksReducer);

  // const dispatch = useDispatch();

  // const removeBook = (id) => {
  //   dispatch(removeBook(id));
  // };

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
