import React from 'react';
import Book from './Book';

const BookList = () => {
  const categories = ['Action', 'Economy', 'Science Fiction'];
  const books = [
    {
      id: 1,
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      progress: 64,
      currentChapter: 'Introduction',
    },
    {
      id: 2,
      name: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      progress: 8,
      currentChapter: 'Chapter 17',
    },
    {
      id: 3,
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      progress: 0,
      currentChapter: 'Introduction',
    },
  ];

  return (
    <div>
      <ul>
        {books.map((book) => <Book key={book.id} books={book} />)}
      </ul>

      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <select>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookList;
