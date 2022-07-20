import React from 'react';
import { checkBookStatus } from '../redux/categories/categories';
import { useDispatch } from 'react-redux';


const Categories = () => {

  const dispatch = useDispatch()

  const checkStatus =(e) => {
    console.log(e.target)
    dispatch(checkBookStatus())
  }

  return ( 
   <button 
   type="button"
   onClick={(e) => checkStatus(e)}
   >
    Check Status
    </button>
  )
}

export default Categories;
