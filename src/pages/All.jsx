import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { Helmet } from 'react-helmet';

export default function All() {
  const loaded = useLoaderData();
  const [spots, setSpots] = useState(loaded);
  const [loading, setLoading] = useState(true); // Add this line

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSort = () => {
    const sortedSpots = [...spots].sort((a, b) => b.average_cost - a.average_cost);
    setSpots(sortedSpots);
  };

  return (
    <>  
      <Helmet>
        <title>TM - All Tourist Spots</title>
      </Helmet>
    
      <div className='w-full flex justify-end'><button className='btn btn-sm mx-4' onClick={handleSort}>sort by average cost</button></div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2  border-teal-500"></div>
        </div>
      ) : (
        <div className='flex flex-col lg:flex-row lg:flex-wrap items-center justify-between gap-8 my-12'>
          {spots.map(spot => <Card key={spot._id} spot={spot} spots={spots} setspots={setSpots}></Card>)}
        </div>
      )}
    </>
  )
}
