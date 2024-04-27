import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';
 import { useNavigate } from 'react-router-dom';
const Card = ({ spots }) => {
// Inside your component
const navigate = useNavigate();
  const {usern} = useContext(AuthContext);

  const handleView= () => {
    if (usern) {
      // If usern exists, redirect to /property_details/id
      // navigate('/property_details/${spots.id}');
      navigate(`/details/${spots.id}`);

    } else {
      // If usern does not exist, redirect to /login
      navigate('/login');
    }
  };
  
  return (
    <div >
      <div className="card w-80 bg-base-100 md:w-80 border-2 p-4 rounded-md h-xs gap-4">
               <img className='w-full h-80 rounded-md border-2' src={spots.image_url} alt={spots.tourists_spot_name} />
      <h2 className='font-bold text-xl text-center'>{spots.tourists_spot_name}</h2>

      <p className='text-center text-wrap'>{spots.country_name}</p>
      <div className='btn w-full rounded-md bg-indigo-300 mt-2' onClick={handleView}>View Details</div>

    </div>
    </div>
  );
}
export default Card;



