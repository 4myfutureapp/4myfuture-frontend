import React from 'react';
import Layout from '../../components/Layout';
import ImageSelector from '../../components/proposal/ImageSelector';
import ImageSelectorList from '../../components/dummyLists/ImageSelectorList.json'
import ProposalData from '../../components/proposal/ProposalData';

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut. "

function ProposalPage() {
  return (
    <Layout>
      <div className="flex md:flex-row flex-col w-full md:h-[600px]">
        <div className="md:w-2/5">
          <ImageSelector list={ImageSelectorList} />
        </div>
        <div className="md:w-3/5">
          <ProposalData name={'Proposal Name'} user={'John Smith'} goal={30} nears={7} institution={'https://instagram.com'} pensum={'https://intagram.com'} text={text} startDate={'01/02/2022'} endDate={'01/02/2023'} />
        </div>
      </div>
    </Layout>
  );
}

export default ProposalPage;