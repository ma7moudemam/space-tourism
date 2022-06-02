import React , {useState} from 'react'
import classes from './Technology.module.css'
import  data  from '../../data.json'



const Technology = () => {

  const [technologys] = useState(data.technology);
  const [tech, setTech] = useState(0);


  const {name , images , description} = technologys[tech];
  return (
    <div className={classes.tech}>
      <div className={classes.content}>
      <h1> <span>03</span>SPACE LAUNCH 101</h1>
      <div className={classes.contentData}>
        <ul>
          {technologys.map((item, index) => {
            return <li key={index} onClick={() => 
              {
                setTech(index);
              }}>{index+1}</li>
          })}
        </ul>

        <div className={classes.data}>
          <p>THE TERMINOLOGY…</p>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        
      </div>
      </div>

      <div className={classes.image}>
        <img src={images.portrait} alt={name} />
      </div>
    </div>
  )
}

export default Technology