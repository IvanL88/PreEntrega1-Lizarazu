
import styles from './button.module.css';

const Button = ({text}) => {
    return <button className={styles.btnNav}>{text}</button>
}

export default Button