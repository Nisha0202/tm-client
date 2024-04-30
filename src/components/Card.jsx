import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';
 import { useNavigate } from 'react-router-dom';
 import { Tooltip } from 'react-tooltip';
const Card = ({ spot, spots, setSpots}) => {
// Inside your component
const navigate = useNavigate();
  const {usern} = useContext(AuthContext);
  const handleView= () => {
    if (usern) {
      navigate(`/details/${spot._id}`);
    } else {
      // If usern does not exist, redirect to /login
      navigate('/login');
    }
  };
  return (
    <div className='' >
      <div className="card w-72 bg-base-100 md:w-80 border-2 p-4 rounded-xl h-xs " >
               <img className='w-full h-80 rounded-md border-2' src={spot.image_url} alt={spot.tourists_spot_name} />
      <h2 className='font-bold text-xl text-center my-2'>{spot.tourists_spot_name}</h2>
      <p className='text-center text-lg text-wrap'>{spot.country_name}</p>
      <p className='text-center text-wrap'>Average Cost: {spot.average_cost}£</p>
      <div><p className='text-center text-wrap py-3 text-sm/relaxed'> {spot.short_description}</p></div>
      <div className='flex justify-between mb-3'>
        <p className='text-center text-wrap '> {spot.seasonality}</p>
        <p className='text-center text-wrap '> {spot.location}</p></div>
      <div className='btn w-full rounded-md text-white bg-teal-800 mt-2' onClick={handleView} data-tooltip-id="my-tooltip" data-tooltip-content="Click to see more">View Details</div>
    </div>
    <Tooltip id="my-tooltip" />
    </div>
  );
}
export default Card;
