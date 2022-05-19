import React from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../components/common/SearchBar';
import ProposalCarousel from '../../components/carousels/ProposalCarousel';

function ProposalPage() {
  return (
    <Layout>
      <SearchBar />
      <ProposalCarousel />
    </Layout>
  );
}

export default ProposalPage;