import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../redux/slices/cartSlice';
import CartItem from '../Cart/CartItem';
import styles from './Navigation.module.css';

function Navigation() {
  const totalPrice = useSelector(getTotalPrice);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            exact
            className={styles.navLink}
            activeClassName={styles.navActiveLink}
          >
            Home page
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/cart"
            className={styles.navLink}
            activeClassName={styles.navActiveLink}
          >
            cart <span>{totalPrice}$</span>
          </NavLink>
          <div className={styles.cartBox}>
            <ul className={styles.cartList}>
              <CartItem styles={styles} />
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
