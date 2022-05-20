import React from 'react';
import ProposalCard from '../cards/ProposalCard';

interface ProposalCarouselProps {
  list: any[];
  title: string;
}

function ProposalCarousel({list, title}:ProposalCarouselProps) {
  return (
    <div className="w-full h-[600px] flex flex-col justify-center">
      <p className="text-blue-700 font-light text-3xl ml-10">{title}</p>
      <div className="flex flex-row gap-x-10 overflow-scroll h-[500px] pl-10 mt-8">
        {
          list.map((item)=>(
            <ProposalCard
            key={item.id} 
            title={item.title}
            description={item.description}
            nears={item.nears}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ProposalCarousel;