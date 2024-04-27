import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
export default function CardDetails() {
    const spotes = useLoaderData();
    const { id } = useParams();
    const spots = spotes.find(spots => spots.id === id);
    console.log(spots);
    if (!spots) {
        return <div>No spots found with id {id}</div>;
      }
      
    return (
        <div className='py-6 border-2 rounded-md px-2 lg:px-6 mb-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full'>
                {/* details */}
                <div className='w-full'>
                    <div className="flex flex-col w-full gap-2">
                        <h1 className=' playful text-xl font-bold text-black'>{spots.tourists_spot_name}</h1>
                        <div className='flex flex-col gap-4 intent'>
                            <p className='text-gray-600 text-base font-semibold '>{spots.short_description}</p>
                            <p className='text-gray-600 text-base border-y-2 py-2'>{spots.country_name}</p>
                            <p className=' font-normal lg:text-sm/8 text-xs/9'><span className='font-bold lexend lg:text-sm/8 text-xs'>Price:</span> {spots.average_cost}</p>
                
                            <table className='max-w-60 text-xs h-32'>
                                <tbody className='text-left'>
                                    <tr >
                                        <td>Location:</td>
                                        <th>{spots.location}</th>
                                    </tr>
                                    <tr>
                                        <td>Area:</td>
                                        <th>{spots.seasonality}</th>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <th>{spots.travel_time}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
 <div className='lg:w-full w-full lg:h-[610px] h-80 md:w-72 mx-auto lg:mx-0 rounded-2xl' >
                    <img src={spots.image_url} alt="" className='w-full h-full rounded-md border-[2px] border-base-400 object-fill' />
                </div>

            </div>
        </div>
    )
}

