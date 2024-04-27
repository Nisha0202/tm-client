import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Spots() {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('spots.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
  return (
    <div className='flex justify-center items-center pb-12'>
         <div className='flex flex-wrap flex-col gap-4 md:flex-row md:justify-between md:gap-12'>

{data.map((spots, index) => (
        <Card key={index} spots={spots} />
      ))}
    </div>
    </div>
   
  )
}
