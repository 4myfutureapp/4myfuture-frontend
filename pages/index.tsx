import React from 'react';
import Layout from '../components/Layout';
import WelcomeSection from '../components/home/WelcomeSection';
import Information from '../components/home/Information';
import RoadMap from '../components/home/RoadMap';
import ContributorSection from '../components/home/ContributorSection';
import TeamSection from '../components/home/TeamSection';
import FrequentQuestionSection from '../components/home/FrequentQuestionSection';
import MobileRoadMap from '../components/home/mobileRoadmap';

export default function index() {
  return (
    <Layout>
      <WelcomeSection />
      <Information />
      {/* <div className="hidden lg:block"> */}
        <RoadMap />
      {/* </div> */}
      {/* <div className="block md:hidden">
        <MobileRoadMap />
      </div> */}
      <ContributorSection />
      <TeamSection />
      <FrequentQuestionSection />
    </Layout>
  );
}
