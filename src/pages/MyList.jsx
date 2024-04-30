import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';
import Swal from 'sweetalert2';

const MyList = () => {
  const { usern } = useContext(AuthContext);
  const loaded = useLoaderData();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    setSpots(loaded.filter((spot) => spot.user_email === usern.email));
  }, [usern]);


  const handleDelete = _id => {
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristspots/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json' // Set the correct content type
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your chosen spot has been deleted.",
                icon: "success"
              });
            }
            window.location.reload();
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }
    });
  };
  
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        <thead>
          <tr>
            {/* <th>Spot ID</th> */}
            <th>User Email</th>
            <th>Spot Name</th>
            <th>Country</th>
            <th>Average Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        {usern.email &&
        
         <tbody>
          {spots.map((spot) => (
            <tr key={spot._id}>
              {/* <td>{spot._id}</td> */}
              <td>{spot.user_email}</td>
              <td>{spot.tourists_spot_name}</td>
              <td>{spot.country_name}</td>
              <td>{spot.average_cost}</td>
              <td>
                <button className='btn btn-sm bg-red-400' onClick={() => handleDelete(spot._id)}>Delete</button>
              </td>
              <td>
                <Link to={`/updatespots/${spot._id}`} className='btn btn-sm bg-teal-600' >Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
        
        }
       
      </table>
    </div>
  );
};

export default MyList;


// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Card from '../components/Card';
// import { AuthContext } from '../FirebaseProbider/FirbaseProvider';
// export default function MyList() { 
//    const { usern } = useContext(AuthContext);
//    const [spots, setData] =useState([]);
//    console.log(usern.email);
//    useEffect(() => {
//       fetch(`http://localhost:5000/touristspots/${usern.email}`)
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error('Error:', error));
//     }, [usern]);
   
//    return (
//     <div className='flex flex-col justify-center items-center pb-12'>
//        <h1 className='my-12 text-2xl font-bold'>Tourist Spots</h1>
//          <div className='flex flex-wrap flex-col gap-4 md:flex-row md:justify-between md:gap-12'>
//          {spots.map((spot, index) => (
//     <Card key={index} spot={spot} />
// ))}</div> </div>
    
//   )
// }