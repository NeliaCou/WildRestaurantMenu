import React from 'react';
import { useState } from 'react';

function MenuItem({ items }) {
  const [isFavorite, setIsFavorite] = useState(items.isFavorite);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={items.foodImage} alt={items.itemName} />
        </div>
        <div className="itemDescription">
          <h3>{items.itemName}</h3>

          <p>{items.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{items.price} EUR</div>

        <div
          id="favorite"
          onClick={handleClickFavorite}
          className={isFavorite ? 'isFavorite' : 'notFavorite'}
        ></div>
      </div>
    </div>
  );
}

export default MenuItem;
