import React from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../components/common/SearchBar';
import ProposalCarousel from '../../components/carousels/ProposalCarousel';
import ProposalsList from '../../components/dummyLists/ProposalsList.json'

function ProposalPage() {
  return (
    <Layout>
      <SearchBar />
      <ProposalCarousel list={ProposalsList} title="Newest Proposals" />
      <ProposalCarousel list={ProposalsList} title="Popular Proposals" />
    </Layout>
  );
}

export default ProposalPage;