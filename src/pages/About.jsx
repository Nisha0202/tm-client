import React from 'react'
import { Helmet } from 'react-helmet'
import Slider from '../components/Slider'
export default function About() {
  return (
    <div>
       <Helmet>
        <title>Luxury You - About</title>
      </Helmet>
        <div className="container p-4">
            <h1 className="text-xl font-bold text-center mb-6">About Luxury You</h1>
            <p className="text-sm text-gray-700 max-w-prose mx-auto text-center">
                Luxury You is the premier destination for those seeking to live in the lap of luxury. 
                With an exclusive collection of penthouses, resorts, villas, and mansions, we offer 
                unparalleled opulence and comfort. Our properties are located in the most sought-after 
                destinations around the world, providing breathtaking views and world-class amenities.
            </p>
            <div className="my-6 text-center">
                <Slider/>
                <p className="text-sm text-gray-500 my-1">Examples of our luxurious properties.</p>
            </div>
        </div>
      
      
      </div>
  )
}

