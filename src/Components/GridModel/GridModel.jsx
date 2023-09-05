import React from 'react';
import styles from './GridModel.module.css';

const GridModal = ({ data, onClose }) => {
  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}>
      <div className={styles.modal}>
        <h3>
          {data.type} ({data.capsule_serial})
        </h3>
        <span>{data.details}</span>
        <p>
          Launch Date -{' '}
          {data.original_launch
            ? data.original_launch.slice(0, 10)
            : 'Not Updated'}
        </p>
        <p>Status - {data.status}</p>
        <h4>Missions</h4>
        {data.missions.length &&
          data.missions.map((elem, index) => {
            return (
              <div key={elem.name}>
                <p>
                  {index + 1}) Name - {elem.name} Flights - {elem.flight}
                </p>
              </div>
            );
          })}
        {/* Add other data here */}
      </div>
    </div>
  );
};

export default GridModal;
