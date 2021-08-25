import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => {
  const {
    id, category, title, author, progress, currentChapter,
  } = books;

  return (
    <li key={id} className="card">
      <div className="bookInfo">
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <span className="author">{author}</span>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress">
        <progress value={progress} max="100" />
        <div className="number-progress">
          <div>
            {progress}
            %
          </div>
          <span>Completed</span>
        </div>
      </div>

      <div className="current-chapter">
        <span>CURRENT CHAPTER</span>
        <span>{currentChapter}</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
