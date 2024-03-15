import React, { useEffect, useState } from 'react'
import ExpertCard from '../components/ExpertCard';
import { getInstructors } from '../api/api';

const Experts = () => {
  const [expertsData, setExpertsData] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const instructors = await getInstructors();
        console.log(instructors, "INSTRUCTORS")
        setExpertsData(instructors);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);
  
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col my-2 text-left">
          <h4>Conoce a Nuestros Expertos</h4>
        </div>
      </div>
      <div className="row g-4">
        {
          expertsData.map(item => {
            return (<ExpertCard
              key={item.fecha}
              img={item.profilePictureUrl}
              title={item.occupation}
              description={item.description}
              fecha={item.fecha}
              autor={item.name + " " + item.lastName}
            />)
          })
        }
      </div>
    </div>
  )
}

export default Experts
