import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./CartWidget.module.css";

function CartWidget() {
  return (
    <div className={styles.cartZone}>
        <a href="#">
        <ShoppingCartIcon 
            sx={{ 
            color: '#f1faee',
            }} />
        </a>
        <div className={styles.notification}> 
            3   
        </div>           
    </div>
  )
}

export default CartWidget