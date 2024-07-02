import React from 'react'
import { Tooltip } from 'react-tooltip'
export default function About() {
  return (
    <div>
        <div className="p-4 mb-16">
            <h2 data-tooltip-id="my-tooltip" data-tooltip-content="About Us" className="text-2xl font-bold text-center my-4">About Us</h2>
            <p className="text-sm/relaxed max-w-3xl mx-auto inter text-center py-3 px-4">
            At TM Tourism Management, we specialize in curating unforgettable travel experiences across Europe. 
            Our passion lies in showcasing the rich cultural tapestry, breathtaking landscapes, and vibrant cities of this diverse continent. Whether you’re savoring French cuisine in Paris, exploring ancient ruins in Rome, dancing to flamenco rhythms in Barcelona, or cruising Amsterdam’s picturesque canals, we’re here to make your journey seamless and extraordinary. With personalized itineraries, expert guides, and a commitment to sustainability, 
            TM Tourism Management invites you to discover the heart and soul of Europe.
            </p>
        </div>
        <Tooltip id="my-tooltip" />
      </div>
  )
}

