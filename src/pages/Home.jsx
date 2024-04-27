import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from '../components/Slider';
import Spots from '../components/Spots';

export default function Home() {
  return (
    <div className='container'>
      <Helmet>
        <title>TM - Home</title>
      </Helmet>
      <Slider />
      <Spots />
    </div>
  );
}


