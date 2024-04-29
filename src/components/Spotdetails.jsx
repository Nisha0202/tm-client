import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'

const Spotdetails = () => {
  const  {id}  = useParams();
  console.log(id);
  const [spot, setSpot] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/touristspots/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
      })
      .then(data => {
        console.log('Received data:', data); // Log the data
        setSpot(data);
      })
      .catch(error => console.error('Error:', error));
  }, [id]);


  

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
            <h2 className="font-bold text-2xl">{spot.tourists_spot_name}</h2>
            <p className=" text-wrap">Country: {spot.country_name}</p>
            <p className=" text-wrap">Description: {spot.short_description}</p>
            <p className=" text-wrap">Average Cost: £{spot.average_cost}</p>
            <p className=" text-wrap">Seasonality: {spot.seasonality}</p>
            <p className=" text-wrap">Travel Time: {spot.travel_time}</p>
            <p className=" text-wrap">Total Visitors Per Year: {spot.total_visitors_per_year}</p></div>
         
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