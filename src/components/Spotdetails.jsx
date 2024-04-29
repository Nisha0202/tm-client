import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom'

const Spotdetails = () => {

  const spots = useLoaderData();
  const { id } = useParams();
  const spot = spots.find(spot => spot._id === id);
  console.log(spot);

  if (!spot) {
      return <div>Loading...</div>;
  }

    return (
        <div className="spot-details">
           <div className="card border-2 flex flex-col items-center justify-between md:flex-row p-6 m-4">
            <div className='w-full md:w-1/3'>
                <img
                className="w-full md:w-56 h-80 rounded-md border-2"
                src={spot.image_url}
                alt={spot.tourists_spot_name}
            />
            </div>
          <div className='w-full *:text-xl *:py-2'>
            <h2 className="font-bold text-3xl">{spot.tourists_spot_name}</h2>
            <p className=" text-wrap"><span className='inter text-base'>Country: </span>{spot.country_name}</p>
            <p className=" text-wrap"><span className='inter text-base'>Description: </span> {spot.short_description}</p>
            <p className=" text-wrap"><span className='inter text-base'>Average Cost: £</span>{spot.average_cost}</p>
            <p className=" text-wrap"><span className='inter text-base'> Seasonality:</span> {spot.seasonality}</p>
            <p className=" text-wrap"><span className='inter text-base'>Travel Time:</span> {spot.travel_time}</p>
            <p className=" text-wrap"><span className='inter text-base'>Total Visitors Per Year: </span> {spot.total_visitors_per_year}</p></div>
         
        </div>
        </div>
    );
};

export default Spotdetails;

  // useEffect(() => {
  //   // Fetch data from server
  //   fetch(`http://localhost:5000/touristspots/${id}`)
  //     .then(response => response.json())
  //     .then(data => setSpot(data))
  //     .catch(error => console.error(error));
  // }, [id]);