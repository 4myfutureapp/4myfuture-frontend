import React from 'react';
import Layout from '../components/Layout';
import WelcomeSection from '../components/home/WelcomeSection';
import Information from '../components/home/Information';
import RoadMap from '../components/home/RoadMap';
import ContributorSection from '../components/home/ContributorSection';
import TeamSection from '../components/home/TeamSection';
import FrequentQuestionSection from '../components/home/FrequentQuestionSection';
import { Seo } from '../components/Seo/Seo';

export default function index() {
  return (
    <Layout>
      <Seo
          metaTitle="4MyFuture DApp"
          metaDescription="Help Students Reach Their Dreams"
          shareImage="/logo.png"
        />
      <WelcomeSection />
      <Information />
      <RoadMap />
      <ContributorSection />
      <TeamSection />
      <FrequentQuestionSection />
    </Layout>
  );
}
