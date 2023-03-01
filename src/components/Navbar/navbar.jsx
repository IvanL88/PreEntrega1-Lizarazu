
import React from 'react'
import NavbarLink from '../NavbarLink/navbarlink';
import CartWidget from '../CartWidget/cartwidget';
import styles from "./navbar.module.css";
import MouseIcon from '@mui/icons-material/Mouse';

function navbar() {
  return (
    <nav className={styles.container}>
        <div className={styles.logo} >
            <MouseIcon   
            sx={{ 
                color: '#f1faee', 
              }} />
              Mouseland
        </div>     
        <NavbarLink text="Home"/> 
        <NavbarLink text="Categorías"/> 
        <NavbarLink text="Ofertas"/> 
        <NavbarLink text="Contacto"/> 
        <CartWidget />
    </nav>
  )
}

export default navbar