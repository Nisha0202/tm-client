import React, { useState } from 'react';

const AddList = () => {
    const [formData, setFormData] = useState({
        image: '',
        tourists_spot_name: '',
        country_name: '',
        location: '',
        short_description: '',
        average_cost: '',
        seasonality: '',
        travel_time: '',
        total_visitors_per_year: '',
        user_email: '',
        user_name: '',
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h2 className='text-2xl font-bold mb-6'>Add Tourists Spot</h2>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-transparent border-2 rounded px-8 pt-6 pb-8 mb-4'>
                {Object.keys(formData).map((key) => (
                    <div className='mb-4' key={key}>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id={key}
                            type='text'
                            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <div className='flex items-center justify-end'>
                    <button className=' hover:bg-teal-700 bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddList;
