import { useSelector } from 'react-redux';
import {
  getTotalPrice,
  getTotalQuantity,
  getItems,
} from '../../redux/slices/cartSlice';
import styles from './OrderForm.module.css';

const OrderForm = () => {
  const items = useSelector(getItems);
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <form
      className={styles.form}
      action="https://formsubmit.co/yurchenko.stanislav@ukr.net"
      method="POST"
    >
      <h4 className={styles.title}>Place order</h4>
      <input
        className={styles.input}
        type="text"
        name="name"
        required
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        required
        placeholder="Email Address"
      />
      <input
        className={styles.input}
        type="number"
        name="phone"
        required
        placeholder="Phone Address"
      />

      <input
        className={styles.hidden}
        type="hidden"
        name="_subject"
        value="New Order!"
      ></input>
      <input type="hidden" name="_template" value="table"></input>
      <textarea
        className={styles.hidden}
        type="hidden"
        name="message"
        value={`totalQuantity ${totalQuantity}, totalPrice ${totalPrice}$`}
      />
      {items.map(item => (
        <textarea
          className={styles.hidden}
          type="hidden"
          name={`color_#${item.item.color}`}
          value={`type: ${item.option.type}, Quantity: ${item.quantity}`}
        />
      ))}
      <button type="submit">Place order</button>
    </form>
  );
};

export default OrderForm;
