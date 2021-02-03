import { useSelector } from 'react-redux';
import { getTotalPrice, getTotalQuantity } from '../../redux/slices/cartSlice';

import CartItem from './CartItem';

function Cart() {
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <>
      <h2>Cart</h2>
      <ul>
        <CartItem />
      </ul>
      <div>
        <div>Total quantity: {totalQuantity}</div>
        <div>Total price: {totalPrice}$</div>
      </div>
    </>
  );
}

export default Cart;
