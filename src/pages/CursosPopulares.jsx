import React, { useEffect, useState } from 'react'
import CursosCard from '../components/CursoCard'
import { getCourses } from '../api/api';
import moment from 'moment/moment';

const CursosPopulares = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const instructors = await getCourses();
        setCourseData(instructors);
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
          <h4>Cursos Populares</h4>
        </div>
      </div>
      <div className="row g-4">
        {
          courseData.map(item => {
            return (<CursosCard
              key={item.publishedDate}
              img={item.thumbnailUrl}
              title={item.title}
              description={item.description}
              fecha={moment(item.publishedDate).format("DD/MM/YY")}
              category={item.category}
              autor={item.instructor.name + " " + item.instructor.lastName}
            />)
          })
        }
      </div>
    </div>
  )
}

export default CursosPopulares