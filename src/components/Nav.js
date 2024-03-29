import React from 'react'
import styles from '../css/Nav.module.css'
import { NavLink } from 'react-router-dom'

function Nav(props) {

    const { setIsMenu, setCloseMenu } = props
    const { link, linkContainer } = styles
    const onClickHandler = () => {
        setIsMenu(true)
        setCloseMenu(false)
    }

    return (
        <>
            <div className={linkContainer}>
                <NavLink 
                    className={link} 
                    activeClassName={styles.activeLink} 
                    exact 
                    to='/'
                    onClick={onClickHandler}>
                    Home
                </NavLink>
            </div>

            <div className={linkContainer}>
                <NavLink 
                    className={styles.link} 
                    activeClassName={styles.activeLink} 
                    exact 
                    to='/projects'
                    onClick={onClickHandler}>
                    Projects
                </NavLink>
            </div>

            <div className={linkContainer}>
                <NavLink 
                    className={styles.link} 
                    activeClassName={styles.activeLink} 
                    exact 
                    to='/contact'
                    onClick={onClickHandler}>
                    Contact
                </NavLink>
            </div>

            <div className={linkContainer}>
                <NavLink 
                    className={styles.link} 
                    activeClassName={styles.activeLink} 
                    exact 
                    to='/about'
                    onClick={onClickHandler}>
                    About
                </NavLink>
            </div>
        </>
    )
}

export default Nav
