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
        // Handle form submission (e.g., send data to backend)
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='flex flex-col gap-3 items-center my-6'>
            <h2 className='text-xl font-bold mb-6'>Add Tourists Spot</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="flex justify-between">
                    <label>Image URL:</label>
                    <input
                    className='border-2 w-2/3'
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Spot Name:</label>
                    <input     className='border-2 w-2/3'
                        type="text"
                        name="tourists_spot_name"
                        value={formData.tourists_spot_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Country:</label>
                    <select
                        name="country_name"
                        value={formData.country_name}
                        onChange={handleChange}
                    >
                        <option value="">Select a country</option>
                        {countryOptions.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between">
                    <label>Location:</label>
                    <input     className='border-2 w-2/3'
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Description:</label>
                    <input     className='border-2 w-2/3'
                        type="text"
                        name="short_description"
                        value={formData.short_description}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Average Cost (£):</label>
                    <input     className='border-2 w-2/3'
                        type="number"
                        name="average_cost"
                        value={formData.average_cost}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Seasonality:</label>
                    <input     className='border-2 w-2/3 h-12'
                        type="number"
                        name="seasonality"
                        value={formData.seasonality}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Travel Time:</label>
                    <input     className='border-2 w-2/3'
                        type="text"
                        name="travel_time"
                        value={formData.travel_time}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Visitors/Per Year:</label>
                    <input     className='border-2 w-2/3'
                        type="number"
                        name="total_visitors_per_year"
                        value={formData.total_visitors_per_year}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>User Email:</label>
                    <input     className='border-2 w-2/3'
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <label>User Name:</label>
                    <input     className='border-2 w-2/3'
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='btn bg-indigo-300 text-black'>Add</button>
            </form>
        </div>
    );
};

export default AddList;
