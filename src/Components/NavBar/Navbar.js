import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import logo from '../../Components/assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'




const Navbar = (props) => {
  const [mobileNav, setMobileNav] = useState(false)
    const toggleNav =()=>{
    setMobileNav(prevState => !prevState)
  
  }
  return (

    <nav className={styles.navDesktop}>
      <Link to='/'><img src={logo} alt="logo" /></Link>
      <ul className={mobileNav ? styles.navMobile : styles.desktop}>
        <NavLink to='/' className={styles.navItems}>00 Home</NavLink>
        <NavLink to='/destination' className={styles.navItems}>01 Destination</NavLink>
        <NavLink to='/crew' className={styles.navItems}>02 Crew</NavLink>
        <NavLink to='/technology' className={styles.navItems}>03 Technology</NavLink>
      </ul>
      <button type='button'className={styles.button} onClick={toggleNav} >{mobileNav ? <MdClose /> : <FaBars /> }</button>
    </nav>

  )
}

export default Navbar