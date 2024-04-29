import React, { useState, useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function CountrySpots() {
  let { state } = useLocation();
  let { countryName } = state;
  const loaded = useLoaderData();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    setSpots(loaded.filter(spot => spot.country_name === countryName));
  }, [loaded, countryName]);

  const handleSort = () => {
    const sortedSpots = [...spots].sort((a, b) => b.average_cost - a.average_cost);
    setSpots(sortedSpots);
  };

  return (
    <> 
      <div className='w-full flex justify-end'><button className='btn btn-sm' onClick={handleSort}>sort</button></div>
      <div className='flex flex-col lg:flex-row lg:flex-wrap items-center justify-around gap-8 my-12'>
        {
          spots.map(spot => <Card
            key={spot._id}
            spot={spot}
            spots={spots}
            setspots={setSpots}
          ></Card>)
        }
      </div>
    </>
  )
}

