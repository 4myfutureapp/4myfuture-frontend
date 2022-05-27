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
    <div className="h-80 w-full mt-10">
      <p className="text-blue-700 text-3xl font-extralight mb-5 ml-20">{title}</p>
      {
        filter ? (
        <button className="flex flex-row hover:text-blue-100 text-blue-800 mr-3 ml-20 mb-5">
        <FilterIcon className="w-4 " />
        <p className="text-sm ml-2">Filter Search</p>
      </button>): null
      }
      <div className="w-full h-full overflow-x-scroll pl-20 flex flex-row gap-x-10">
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