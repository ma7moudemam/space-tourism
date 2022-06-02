import React, { Fragment, useState } from 'react'
import  data  from '../../data.json'
import classes from './Destination.module.css'

const Destination = () => {


    const [planets] = useState(data.destinations);
    const [destination, setDestination] = useState(0);
    const {name ,images ,description, distance , travel} = planets[destination];

  return (
    <Fragment>
        <div className={classes.destination}>
         
               <div className={classes.destImage}>
               <h1> <span>01</span>Pick your destination</h1>
               <img src={images.png} alt={name} />
               </div>
               
                <div  className={classes.content}>
                    <ul>
                        {planets.map((item, index) => {
                            return <li key={index} onClick={() => setDestination(index)}>{item.name}</li>
                        })}
                    </ul>

                    <h1>{name}</h1>

                    <p>
                        {description}
                    </p>

                    <div className={classes.travel}>
                        <div className={classes.distance}>
                            <h3>avg. distance</h3>
                            <p>{distance}</p>
                        </div>
                        <div className={classes.distance}>
                            <h3>est. travel time</h3>
                            <p>{travel}</p>
                        </div>
                    </div>
                </div>
        </div>
    </Fragment>
  )
}

export default Destination