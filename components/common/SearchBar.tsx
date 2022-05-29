import React from 'react';
import { SearchIcon } from '../icons';
import FilterIcon from '../icons/FilterIcon';
import { Fade } from 'react-reveal';

function SearchBar() {
  return (
    <Fade top>
    <div className="md:h-60 h-40 w-full flex items-center justify-center flex-col">
        <div className="w-4/5 md:h-16 h-10 flex justify-center md:rounded-xl rounded-2xl drop-shadow-md bg-gray-100">
          <input 
            type="text"
            className="w-11/12 md:h-16 h-10 bg-gray-100 md:rounded-none rounded-2xl outline-none text-gray-500 font-light"
          />
          <button className="md:h-16 h-10">
            <SearchIcon className="text-blue-700 md:w-10 w-6" />
          </button>
        </div>
        <div className="flex w-3/4 justify-end mt-3">
          <button className="flex flex-row hover:text-blue-100 text-blue-800 mr-3">
            <FilterIcon className="w-4 " />
            <p className="text-sm ml-2">Filter Search</p>
          </button>
        </div>
    </div>
    </Fade>
  );
}

export default SearchBar;