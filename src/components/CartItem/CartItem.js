import { useSelector, useDispatch } from 'react-redux';
import { getItems, deleteItem } from '../../redux/slices/cartSlice';
import styles from './CartItem.module.css';

function CartItem(props) {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const actualStyles = props.styles ?? styles;

  const getPrice = item => {
    return (item.item.price + item.option.price) * item.quantity;
  };

  const onDelete = item => {
    dispatch(deleteItem(item));
  };

  return (
    <>
      {items.map(item => (
        <li
          key={item.item.color + item.option.type}
          className={actualStyles.item}
        >
          <div
            className={actualStyles.img}
            style={{ backgroundColor: `#${item.item.color}` }}
          ></div>
          <span className={actualStyles.name}>#{item.item.color}</span>
          <span className={actualStyles.x}>&#215;</span>
          <span className={actualStyles.quantity}>{item.quantity} </span>
          <span className={actualStyles.price}>{getPrice(item)}$</span>
          <button
            className={actualStyles.delete}
            onClick={() => onDelete(item)}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </>
  );
}

export default CartItem;
