import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
export default function All() {

  const loaded = useLoaderData();
  const [spots, setSpots] = useState(loaded);
  const handleSort = () => {
    const sortedSpots = [...spots].sort((a, b) => b.average_cost - a.average_cost);
    setSpots(sortedSpots);
  };

  return (
    <>   <div className='w-full flex justify-end'><button className='btn btn-sm' onClick={handleSort}>sort</button></div>
      <div className='flex flex-col lg:flex-row lg:flex-wrap items-center justify-between gap-8 my-12'>
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
