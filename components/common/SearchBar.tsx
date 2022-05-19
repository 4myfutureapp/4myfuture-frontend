import React from 'react';
import { SearchIcon } from '../icons';
import FilterIcon from '../icons/FilterIcon';

function SearchBar() {
  return (
    <div className="h-60 w-full flex items-center justify-center flex-col">
      
        <div className="w-3/4 h-16 flex justify-center rounded-xl drop-shadow-md bg-gray-100">
          <input 
            type="text"
            className="w-11/12 h-16 bg-gray-100 outline-none text-gray-500 font-light"
          />
          <button className="h-16">
            <SearchIcon className="text-blue-700 w-10" />
          </button>
        </div>
        <div className="flex w-3/4 justify-end mt-3">
          <button className="flex flex-row hover:text-blue-100 text-blue-800 mr-3">
            <FilterIcon className="w-4 " />
            <p className="text-sm ml-2">Filter Search</p>
          </button>
        </div>
    </div>
  );
}

export default SearchBar;