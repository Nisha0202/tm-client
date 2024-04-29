import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

export default function Spots() {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch('spots.json')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error('Error:', error));
    // }, []);
      useEffect(() => {
      fetch('http://localhost:5000/touristspots')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
  
  return (
    <div className='flex flex-col justify-center items-center pb-12'>
       <h1 className='my-12 text-2xl font-bold'>Tourist Spots</h1>
         <div className='flex flex-wrap flex-col gap-4 md:flex-row md:justify-between md:gap-12'>

         {data.slice(0, 3).map((spot, index) => (
    <Card key={index} spot={spot} />
))}
    </div>
    <Link to={'/all'} className='my-4 btn btn-link text-base'>See More</Link>
    </div>
   
  )
}
