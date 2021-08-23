import React from 'react';

const Book = ({
  id, category, name, author, progress, currentChapter,
}) => (
  <li key={id}>
    <div className="bookInfo">
      <span className="category">{category}</span>
      <h2>{name}</h2>
      <span className="author">{author}</span>
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
  </li>
);


export default Book;
