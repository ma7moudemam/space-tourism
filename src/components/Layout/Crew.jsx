import React ,{useState}from 'react'
import data from './../../data.json'
import classes from './Crew.module.css';



const Crew = () => {

    const [crews]=useState(data.crew);
    const [crew,setCrew]=useState(0); 

    const {name ,images ,role, bio } = crews[crew];
  return (
    <div className={classes.crew}>
     
      <div className={classes.content}>
        <h1> <span>02</span> meeting your crew</h1>
        <h3>{role}</h3>
        <h1>{name}</h1>
        <p>{bio}</p>
        <ul>
          {crews.map((item, index) => {
            return <li key={index} onClick={() => setCrew(index)}></li>
          })}
        </ul>
      </div>

      <div className={classes.image}>
      <img src={images.png} alt={name} />
      </div>
    </div>
  )
}

export default Crew