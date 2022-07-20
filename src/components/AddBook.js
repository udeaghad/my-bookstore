import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ handleSubmit, onChange }) => (

  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input
        name="title"
        type="text"
        placeholder="Book Title"
        onChange={(e) => onChange(e)}
      />

      <input
        name="author"
        type="text"
        placeholder="Author"
        onChange={(e) => onChange(e)}
      />

      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        ADD BOOK
      </button>
    </form>

  </div>

);

AddBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddBook;
