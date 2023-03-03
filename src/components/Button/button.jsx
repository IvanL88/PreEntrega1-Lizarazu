import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.btnNav}>{text}</button>;
};

export default Button;
