import React from 'react';
import ProposalCard from '../cards/ProposalCard';

function ProposalCarousel() {
  return (
    <div className="w-full h-[500px]">
      <ProposalCard 
        title="Proposal Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        nears={0.09}
        />
    </div>
  );
}

export default ProposalCarousel;