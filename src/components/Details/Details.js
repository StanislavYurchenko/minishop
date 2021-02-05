import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCards } from '../../redux/slices/prodactsSlice';
import { addItem } from '../../redux/slices/cartSlice';
import ControlQuantity from '../ControlQuantity/ControlQuantity';
import styles from './Details.module.css';
import { CARD_OPTIONS } from '../../data/cardOptions';

function Details() {
  const { color } = useParams();
  const cardList = useSelector(selectCards);
  const card = cardList.find(card => card.color === color);

  const normalizedColor = `#${card?.color}`;
  const initOption = CARD_OPTIONS[1];

  const [selectedOption, setSelectedOption] = useState(initOption);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(card?.price + initOption.price);
  const [price, setPrice] = useState(card?.price + initOption.price);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [price, quantity]);

  if (!card) {
    return <Redirect to="/" />;
  }

  const onSubmit = event => {
    event.preventDefault();

    const item = {
      item: { ...card },
      option: selectedOption,
      quantity,
    };

    dispatch(addItem(item));
  };

  const onIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const onDecrease = () => {
    if (quantity < 2) return;
    setQuantity(prevQuantity => prevQuantity - 1);
  };

  const onOptions = event => {
    const optionType = event.target.value;
    const selectedOption = getSelectedOption(optionType);
    setSelectedOption(selectedOption);
    setPrice(card.price + selectedOption.price);
  };

  const onClearOption = () => {
    setSelectedOption(initOption);
    setPrice(card.price);
    setQuantity(1);
  };

  const getSelectedOption = type => {
    return CARD_OPTIONS.find(option => option.type === type);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className="form">
        <h2 className={styles.title}>Card color- #{card.color}</h2>
        <div className={styles.box}>
          <div
            className={styles.imgBox}
            style={{ backgroundColor: normalizedColor }}
          >
            <div className="">{normalizedColor}</div>
            <div className="">price:{card.price}$</div>
          </div>
          <div className={styles.optionsBox}>
            <div>Price: {price}$</div>
            <div>
              <select
                onChange={onOptions}
                name="options"
                value={selectedOption.type}
              >
                {CARD_OPTIONS.map(({ type, price }) => (
                  <option key={type} value={type}>
                    {type}: {price}$
                  </option>
                ))}
              </select>
              <button onClick={onClearOption} className={styles.clearOptions}>
                clear
              </button>
            </div>
            <ControlQuantity
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              quantity={quantity}
            />

            <div>Total price: {totalPrice}$</div>
            <button className={styles.cartAdd} type="submit">
              Add to cart
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Details;
