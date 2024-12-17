import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  /*let selected = 1;*/
  const [selected, setselected] = useState(
    localStorage.getItem('selectedCourseIdx')
  );

  const courses = ['Html', 'Css', 'Bootstrap', 'JavaScript', 'React'];

  const handleClick = (text, idx) => {
    setselected(idx);
  };

  const typeCourseClick = (idx) => {
    setselected(idx);
    /*localStorage.setItem('selectedCourseIdx', idx);*/
    const origin = location.origin;
    const searchPharms = '?selectedCourseIdx=${idx}'
    const url = origin + searchPharms;
    location.href = url;
  };

  const urlSearchParms = location.search 

  return (
    <>
      <h2>Your selected course: {courses[selected]}</h2>
      <ul>
        {courses.map((value, idx) => {
          return (
            <li
              className={selected === idx ? 'active' : ''}
              onClick={() => typeCourseClick(idx)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
