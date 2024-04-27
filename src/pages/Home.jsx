import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from '../components/Slider';
import Spots from '../components/Spots';
import Countries from '../components/Countries';

export default function Home() {
  return (
    <div className='container'>
      <Helmet>
        <title>TM - Home</title>
      </Helmet>
      <Slider />
       <Countries/>
      <Spots />
     
    </div>
  );
}


