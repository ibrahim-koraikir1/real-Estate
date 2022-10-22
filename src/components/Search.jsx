import React, { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
   
   <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-center items-center  lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
   

<main className="flex  mr-2 items-center justify-center">

  <div
    className="grid grid-cols-2 w-full space-x-2 rounded-xl  p-2"
    x-data="app"
  >
    <div>
      <input type="radio" name="option" id="1" className="peer hidden" checked />
      <label
        for="1"
        className="block cursor-pointer select-none rounded-xl w-[5rem]  p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
        >buy </label >
    </div>

    <div>
      <input type="radio" name="option" id="2" className="peer hidden" />
      <label
        for="2"
        className="block cursor-pointer select-none rounded-xl p-2 w-[5rem] text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
        >rent</label  >
    </div>

    

   
  </div>
</main>



     <div className=' lg:mr-[-1rem] w-full mx-auto'>

    <div className="relative flex items-center w-full h-16 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-16  w-full outline-none text-base text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="San Francisco, CA" /> 
    </div>
</div>
      <button
        onClick={() => {
          handleClick();
        }}
        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;