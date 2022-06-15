import React from 'react';
import ContributionCard from '../cards/ContributionCard';
import FilterIcon from '../icons/FilterIcon';

interface ContributionsCarouselProps {
  list: any[];
  title: string;
  filter: boolean;
}

function ContributionsCarousel({list, title, filter}: ContributionsCarouselProps) {
  return (
    <div className="md:h-80 h-72 w-full mt-10">
      <p className="text-blue-700 md:text-3xl text-xl font-extralight md:mb-5 mb-2 md:ml-20 ml-5">{title}</p>
      {
        filter ? (
        <button className="flex flex-row hover:text-blue-100 text-blue-800 mr-3 md:ml-20 ml-5 mb-5">
        <FilterIcon className="w-4 " />
        <p className="text-sm ml-2">Filter Search</p>
      </button>): null
      }
      <div className="w-full h-full overflow-x-scroll md:pl-20 pl-5 flex flex-row md:gap-x-10 gap-x-5">
        {
          list.map((item)=>(
          <ContributionCard name={item.name} nears={item.nears} date={item.date} key={item.id} />
          ))
        }
      </div>
    </div>
  );
}

export default ContributionsCarousel;