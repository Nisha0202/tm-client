import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const { usern } = useContext(AuthContext);
  const navigate = useNavigate(); // Change this line

  useEffect(() => {
    fetch('https://tm-server-psi.vercel.app/countries')
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
    <div className='my-12 flex flex-col items-center justify-center'> 
      <h1 className='my-12 text-2xl font-bold'>Countries</h1>
      <div className='flex flex-col max-w-fit md:max-w-screen-lg md:flex-row md:flex-wrap gap-4 md:gap-10 justify-between'>
      {countries.map((country) => (
  <div key={country.id} className="card p-4 w-72 min-h-72 border-2" onClick={() => handleClick(country.name)}>
    <img className='h-44 rounded-xl border-2 border-gray-300' src={country.image} alt={country.name} />
    <div className="flex flex-col items-center justify-center">
      <h4 className='py-3'>{country.name}</h4> 
      <h4 className='text-xs/relaxed text-center'>{country.description}</h4> 
    </div>
  </div>
))}

      </div>
    </div>
  )
}
