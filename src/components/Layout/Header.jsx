import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React , {Fragment}from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/shared/logo.svg'
import classes from './Header.module.css'


const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <img src={Logo} alt="logo" />
            <div className={classes.links}>
                <ul>
                    <li>
                        <Link to='/'>
                        <span>00</span> HOME
                        </Link>
                    </li>

                    <li>
                        <Link to='/destination'>
                        <span>01</span> DESTINATION
                        </Link>
                    </li>

                    <li>
                        <Link to='/crew'>
                        <span>02</span> CREW
                        </Link>
                    </li>

                    <li>
                        <Link to='/technology'>
                        <span>03</span> TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={classes.burgerIcon}>
            <i className="fas fa-bars"></i>
            </div>
        </header>
        
    </Fragment>
  )
}

export default Header