// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Card from '../components/Card';
// import { AuthContext } from '../FirebaseProbider/FirbaseProvider';
// export default function MyList() { 
//    const { usern } = useContext(AuthContext);
//    const [spots, setData] =useState([]);
//    console.log(usern.email);
//    useEffect(() => {
//       fetch(`http://localhost:5000/touristspots/${usern.email}`)
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error('Error:', error));
//     }, [usern]);
   
//    return (
//     <div className='flex flex-col justify-center items-center pb-12'>
//        <h1 className='my-12 text-2xl font-bold'>Tourist Spots</h1>
//          <div className='flex flex-wrap flex-col gap-4 md:flex-row md:justify-between md:gap-12'>
//          {spots.map((spot, index) => (
//     <Card key={index} spot={spot} />
// ))}</div> </div>
    
//   )
// }

import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Card from '../components/Card';
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';

export default function MyList() { 
  const { usern } = useContext(AuthContext);
  const loaded = useLoaderData();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    setSpots(loaded.filter(spot => spot.user_email === usern.email));
  }, [loaded]);

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