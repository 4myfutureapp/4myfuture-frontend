import React from 'react';
import UserInfo from '../../components/UserInfo';
import Layout from '../../components/Layout';

function UserPage() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        
        <UserInfo />
      </div>
      
    </Layout>
  );
}

export default UserPage;