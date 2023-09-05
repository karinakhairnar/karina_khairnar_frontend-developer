// GridItem.js
import React from 'react';
import styles from './GridItem.module.css';

const GridItem = ({ item, openModel }) => {
  return (
    <div
      className={styles.gridItem}
      onClick={() => openModel(item)}>
      <h3>
        {item.type} ({item.capsule_serial})
      </h3>
      <p>
        Launch Date -{' '}
        {item.original_launch
          ? item.original_launch.slice(0, 10)
          : 'Not Updated'}
      </p>
      <p className={styles.status}>Status - {item.status}</p>
    </div>
  );
};

export default GridItem;
