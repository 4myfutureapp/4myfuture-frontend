import React from 'react';
import Layout from '../components/Layout';
import WelcomeSection from '../components/home/WelcomeSection';
import Information from '../components/home/Information';
import RoadMap from '../components/home/RoadMap';

export default function index() {
  return (
    <Layout>
      <WelcomeSection />
      <Information />
      <RoadMap />
    </Layout>
  );
}
