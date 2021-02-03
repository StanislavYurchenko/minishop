import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import styles from './Card.module.css';

function Card({ color, price }) {
  const normalizedColor = `#${color}`;
  const dispatch = useDispatch();
  const newItem = { color, price };

  const onAddItem = () => {
    dispatch(addItem({ item: newItem }));
  };

  return (
    <div className={styles.box}>
      <Link to={`/card/${color}`}>
        <div
          className={styles.img}
          style={{ backgroundColor: normalizedColor }}
        >
          {normalizedColor}
        </div>
        <div>Price: {price} $</div>
      </Link>
      <button onClick={onAddItem}>add too cart</button>
    </div>
  );
}
export default Card;
