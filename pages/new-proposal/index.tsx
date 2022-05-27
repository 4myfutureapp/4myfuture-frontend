import React from 'react';
import Layout from '../../components/Layout';
import NewProposalForm from '../../components/NewProposalForm';

function NewProposalPage() {
  return (
    <Layout>
      <div className="h-[600px]">
        <NewProposalForm />
      </div> 
    </Layout>
  );
}

export default NewProposalPage;