import styles from './ControlQuantity.module.css';

const ControlQuantity = ({ onDecrease, onIncrease, quantity }) => {
  return (
    <div className={styles.quantityBox}>
      <button className={styles.decrease} onClick={onDecrease} type="button">
        -
      </button>
      <div className={styles.quantity}> {quantity} </div>
      <button className={styles.increase} onClick={onIncrease} type="button">
        +
      </button>
    </div>
  );
};

export default ControlQuantity;
