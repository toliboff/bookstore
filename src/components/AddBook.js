import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ categories }) => (
  <>
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
  </>
);

export default AddBook;

AddBook.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};
