import React from 'react';
import { useDispatch } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkBookStatus());
  };

  return (
    <button
      type="button"
      onClick={(e) => checkStatus(e)}
    >
      Check Status
    </button>
  );
};

export default Categories;
