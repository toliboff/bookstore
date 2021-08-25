import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook, removeBook } from '../redux/books/books';

const AddBook = ({ categories }) => {
  const defaultValues = {
    category: 'Action',
    progress: 0,
    currentChapter: 'Introduction',
  };
  const [newBookData, setNewBookData] = useState(defaultValues);

  const handleChange = (event) => {
    setNewBookData({ ...newBookData, [event.target.name]: event.target.value });
  };

  const dispatch = useDispatch();
  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = { ...newBookData, id: Date.now() };
    dispatch(addBook(newBook));
    event.target.reset();
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book title" onInput={handleChange} name="title" required />
        <input type="text" placeholder="Author" onInput={handleChange} name="author" required />
        <select onChange={handleChange} name="category">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default AddBook;

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// categories: PropTypes.arrayOf(PropTypes.shape({
//   map: PropTypes.func.isRequired,
// }).isRequired,));
