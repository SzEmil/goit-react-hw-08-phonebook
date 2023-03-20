import React from 'react';
import clsx from 'clsx';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filter/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleInput = event => {
    const inputValue = event.target.value;
    dispatch(setStatusFilter(inputValue));
  };

  return (
    <>
      <div className={clsx(css.filter)}>
        <label>Search contacts</label>
        <input
          className={clsx(css.filterInput)}
          onChange={handleInput}
          type="text"
          name="name"
          required
        />
      </div>
    </>
  );
};
