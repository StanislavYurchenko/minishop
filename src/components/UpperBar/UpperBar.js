import styles from './UpperBar.module.css';

function UpperBar({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default UpperBar;
