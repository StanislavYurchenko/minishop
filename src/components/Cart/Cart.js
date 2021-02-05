import { useSelector } from 'react-redux';
import { getTotalPrice, getTotalQuantity } from '../../redux/slices/cartSlice';
import { NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import OrderForm from '../../components/OrderForm/OrderForm';
import styles from './Cart.module.css';

function Cart() {
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Cart</h2>

      {totalQuantity === 0 ? (
        <>
          <div>Sorry cart is empty!</div>
          <NavLink to="/" className={styles.navLink}>
            Home page
          </NavLink>
        </>
      ) : (
        <>
          <ul>
            <CartItem />
          </ul>
          <div className={styles.total}>
            <p className={styles.total}>Total quantity: {totalQuantity}</p>
            <p className={styles.total}>Total price: {totalPrice}$</p>
          </div>
          <OrderForm />
        </>
      )}
    </div>
  );
}

export default Cart;
