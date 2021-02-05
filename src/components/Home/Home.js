import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMore, selectCards } from '../../redux/slices/prodactsSlice';
import { getFiveUniqueCards } from '../../utils/getFiveUniqueCards';
import ProductCard from '../ProductCard/ProductCard';

import styles from './Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const cardList = useSelector(selectCards);
  const newCards = getFiveUniqueCards(cardList);

  useEffect(() => {
    cardList.length === 0 && dispatch(loadMore(newCards));
  }, []); // eslint-disable-line

  return (
    <>
      <div className={styles.box}>
        <div className={styles.cards}>
          {cardList.map(card => (
            <ProductCard
              color={card.color}
              price={card.price}
              key={card.color}
            />
          ))}
        </div>

        <button onClick={() => dispatch(loadMore(newCards))}>Load more</button>
      </div>
    </>
  );
}

export default Home;
