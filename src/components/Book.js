import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ books }) => {
  const {
    id, category, title, author, progress, currentChapter,
  } = books;

  useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li key={id} className="card">
      <div className="bookInfo">
        <span className="category">{category}</span>
        <h2 className="title">{title}</h2>
        <span className="author">{author}</span>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemoveBook(id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress flex-row">
        <progress value={progress} max="100" />
        <div className="number-progress flex-column">
          <div>
            {progress}
            %
          </div>
          <span>Completed</span>
        </div>
      </div>

      <div className="current-chapter flex-column">
        <span>CURRENT CHAPTER</span>
        <span className="chapter">{currentChapter}</span>
        <button type="button" className="btn">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }),
};

Book.defaultProps = {
  books: {},
};
