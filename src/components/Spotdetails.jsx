import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Spotdetails = ({ data }) => {
  const { id } = useParams();
  const spot = data.find((spot) => spot.id === parseInt(id));

  if (!spot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="spot-details">
      <img className="w-full h-80 rounded-md border-2" src={spot.image_url} alt={spot.tourists_spot_name} />
      <h2 className="font-bold text-xl text-center">{spot.tourists_spot_name}</h2>
      <p className="text-center text-wrap">Country: {spot.country_name}</p>
      {/* Add other spot details here */}
    </div>
  );
};

export default Spotdetails;
