import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMore, selectCards } from '../../redux/slices/cardsSlice';
import { getFiveUniqueCards } from '../../utils/getFiveUniqueCards';
import Card from '../Card/Card';

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
            <Card color={card.color} price={card.price} key={card.color} />
          ))}
        </div>

        <button onClick={() => dispatch(loadMore(newCards))}>Load more</button>
      </div>
    </>
  );
}

export default Home;
