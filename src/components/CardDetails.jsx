import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);

  useEffect(() => {
    // Fetch the spot details based on the id
    fetch('http://localhost:5000/touristspots')
      .then((response) => response.json())
      .then((data) => {
        const foundSpot = data.find((spot) => spot.id === id);
        setSpot(foundSpot);
      });
  }, [id]);

  if (!spot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-details">
      <img className="w-full h-80 rounded-md border-2" src={spot.image_url} alt={spot.tourists_spot_name} />
      <h2 className="font-bold text-xl text-center">{spot.tourists_spot_name}</h2>
      <p className="text-center text-wrap">{spot.country_name}</p>
   
    </div>
  );
};

export default CardDetails;
