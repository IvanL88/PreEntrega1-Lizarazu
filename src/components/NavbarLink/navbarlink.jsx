import styles from "./navbarlink.module.css";

const NavbarLink = ({text}) => {
  return <a href="#" className={styles.btn}>{text}</a>
}

export default NavbarLink