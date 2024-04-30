import React, { useContext, useEffect, useState} from 'react'
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UpdatedSpot = () => {
    const loaded = useLoaderData();
    const [spots, setSpots] = useState(loaded);

    const [formData, setFormData] = useState({});
    useEffect(() => {
        setFormData({
            image_url: spots.image_url,
            tourists_spot_name: spots.tourists_spot_name,
            country_name: spots.country_name,
            location: spots.location,
            short_description: spots.short_description,
            average_cost: spots.average_cost,
            seasonality: spots.seasonality,
            travel_time: spots.travel_time,
            total_visitors_per_year: spots.total_visitors_per_year,
            user_name: spots.user_name, 
            user_email: spots.user_email,
        });
    }, [spots]);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const countryOptions = [
        { value: 'France', label: 'France' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Spain', label: 'Spain' },
        { value: 'England', label: 'England' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'Switzerland', label: 'Switzerland' },
    ];


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //       // Check if any required fields are empty (except for read-only ones)
    //       const requiredFields = ['tourists_spot_name', 'location', 'short_description', 'average_cost', 'seasonality', 'travel_time', 'total_visitors_per_year'];
    //       const emptyFields = requiredFields.filter((field) => !formData[field]);
  
    //       if (emptyFields.length > 0) {
    //           Swal.fire({
    //               icon: 'error',
    //               title: 'Oops!',
    //               text: `Please fill in the following required fields: ${emptyFields.join(', ')}`,
    //           });
    //           return;
    //       }
    //     console.log(formData);
    //     console.log(spots._id);
    //     fetch(`https://tm-server-psi.vercel.app/touristspots/${spots._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Form Updated!',
    //                 text: 'Your data has been Updated successfully submitted.',
    //             });
            
    //     })
    //     .catch(error => console.error('Error:', error));
        
        
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any required fields are empty (except for read-only ones)
        const requiredFields = ['tourists_spot_name', 'location', 'short_description', 'average_cost', 'seasonality', 'travel_time', 'total_visitors_per_year'];
        const emptyFields = requiredFields.filter((field) => !formData[field]);
      
        if (emptyFields.length > 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: `Please fill in the following required fields: ${emptyFields.join(', ')}`,
          });
          return;
        }
      
        console.log(formData);
        console.log(spots._id);
        fetch(`https://tm-server-psi.vercel.app/touristspots/${spots._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              icon: 'success',
              title: 'Form Updated!',
              text: 'Your data has been Updated successfully submitted.',
            });
          }
        })
        .catch(error => console.error('Error:', error));
      };
      
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
                <Helmet>
        <title>TM - Update Spots Data</title>
      </Helmet>
            <h2 className='text-2xl font-bold mb-6'>Update Tourists Spot (£)</h2>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-transparent border-2 rounded px-8 pt-6 pb-8 mb-4'>
                {Object.keys(formData).map((key, index) => (
                    // Exclude data field
                    index !== 2 && index !== 9 && index !==10 && (
                        <div className='mb-4' key={key}>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            <input
                                className='shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id={key}
                                type='text'
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        </div>
                    )
                ))}

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='country_name'>
                        Country Name
                    </label>
                    <select
                        className='shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='country_name'
                        name='country_name'
                        value={formData.country_name}
                        onChange={handleChange}
                    >
                        <option value=''>Select a country</option>
                        {countryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='user_name'>
                        User Name
                    </label>
                    <input
                        className='shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='user_name'
                        type='text'
                        placeholder='User Name'
                        name='user_name'
                        value={formData.user_name}
                        onChange={handleChange}
                        readOnly //readOnly
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='user_email'>
                        User Email
                    </label>
                    <input
                        className='shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='user_email'
                        type='email'
                        placeholder='User Email'
                        name='user_email'
                        value={formData.user_email}
                        onChange={handleChange}
                        readOnly //readOnly 
                    />
                </div>

                <div className='flex items-center justify-end'>
                    <button className=' hover:bg-teal-700 bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatedSpot;
