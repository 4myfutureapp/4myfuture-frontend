import React from 'react';
import ContributionsCarousel from '../../components/carousels/ContributionsCarousel';
import ContributionData from '../../components/contributions/ContributionData';
import Layout from '../../components/Layout';
import ContributionsList from '../../components/dummyLists/ContributionsList.json'
import GenerousContributionCard from '../../components/contributions/GenerousContributionCard';

function ContributionPage() {
  return (
    <Layout>
      <ContributionData contributions={5} donated={7.3} students={4} />
      <ContributionsCarousel list={ContributionsList} title="Your Contributions" filter />
      <div className="w-full flex flex-row">
        <div className="md:w-1/2 w-full flex flex-col">
          <ContributionsCarousel list={ContributionsList} title="Top Contributions" filter={false} />
          <ContributionsCarousel list={ContributionsList} title="Top Contributions" filter={false} />
        </div>
        <div className="hidden w-1/2 lg:flex justify-center">
          <GenerousContributionCard name={'Proposal Name'} date={'01/02/2022'} nears={0.5} />
        </div>
      </div>
    </Layout>
  );
}

export default ContributionPage;