import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';

const Input = ({ getInputValue }) => {
  const [inputSearch, setInputSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    getInputValue(inputSearch);
    setInputSearch('');
  }

  function inputHandleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputSearch}
          placeholder="tapez votre recherche cocktail"
          onChange={inputHandleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
