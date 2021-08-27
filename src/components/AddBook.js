import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/books';

const AddBook = ({ categories }) => {
  const defaultValues = {
    category: 'Action',
    author: 'SomeOne',
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
    const newBook = { ...newBookData, id: String(Date.now()) };
    dispatch(addBook(newBook));
    setNewBookData(defaultValues);
    event.target.reset();
  };

  return (
    <div className="add-book">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="flex-row">
        <input type="text" placeholder="Book title" onInput={handleChange} name="title" required autoComplete="off" />
        <select onChange={handleChange} name="category" placeholder="hi">
          <option value="" disabled selected hidden>Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
