import React from 'react';
import Layout from '../components/Layout';
import WelcomeSection from '../components/home/WelcomeSection';
import Information from '../components/home/Information';
import RoadMap from '../components/home/RoadMap';
import ContributorSection from '../components/home/ContributorSection';
import TeamSection from '../components/home/TeamSection';
import FrequentQuestionSection from '../components/home/FrequentQuestionSection';
import { Seo } from '../components/Seo/Seo';


export default function Index() {
  const [language, setLanguage] = React.useState('en');
  
  
  const changeLang = (lang) =>{
    Lang(lang)
      
    }

  const Lang = (lang) =>{
  if(lang=='en'){
    setLanguage('en');
  }else{
    setLanguage('es');
  }
    
  }

  return (
     <div className="">     
        
      <Layout>
        {/* <br></br>
      <div className="w-full h-full flex justify-end items-end mt-2 mb-2">
        <button className={`md:text-xl text-sm font-${en} text-blue-700 hover:text-blue-300`}  onClick={() => Lang('en') } >EN</button>
        <p className="md:text-xl text-sm text-blue-700">/</p>
        <button className={`md:text-xl text-sm font-${es} text-blue-700 hover:text-blue-300 mr-4`} onClick={() => Lang('es')}>ES</button>
      </div> */}
      <Seo
          metaTitle="4MyFuture DApp"
          metaDescription="Help Students Reach Their Dreams"
          shareImage="/blue-logo.svg"
        />
     
      <WelcomeSection changeLang = {changeLang}/>
      
     
      <Information lang = {language} />
      <RoadMap lang = {language}/>
      <ContributorSection lang = {language}/>
      <TeamSection lang = {language} />
      <FrequentQuestionSection lang = {language} />
    </Layout>
    </div>
  );
}
