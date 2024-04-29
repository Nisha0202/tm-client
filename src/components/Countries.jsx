import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const { usern } = useContext(AuthContext);
  const navigate = useNavigate(); // Change this line

  useEffect(() => {
    fetch('http://localhost:5000/countries')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
  }, []); // Change this line

  const handleClick = (countryName) => {
     // Check if user exists
     if (usern) {
          // If user exists, navigate to countryspot with the country name
    navigate('/countryspot', { state: { countryName } }); 

    }else{
      navigate('/login')
    }
};
  return (
    <div className='my-12 mx-auto flex flex-col items-center'> 
      <h1 className='my-12 text-2xl font-bold'>Countries</h1>
      <div className='flex flex-col max-w-64 md:max-w-screen-lg md:flex-row md:flex-wrap gap-6 md:gap-10 justify-between  mx-auto'>
      {countries.map((country) => (
  <div key={country.id} className="card p-4 w-64 h-64 border-2" onClick={() => handleClick(country.name)}>
    <img className='h-44 rounded-xl border-2 border-gray-300' src={country.image} alt={country.name} />
    <div className="container">
      <h4 className='py-3'>{country.name}</h4> 
    </div>
  </div>
))}

      </div>
    </div>
  )
}
