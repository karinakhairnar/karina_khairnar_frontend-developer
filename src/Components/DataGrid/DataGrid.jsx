import React, { useEffect, useState } from 'react';
import styles from './DataGrid.module.css';
import GridModal from '../GridModel/GridModel';
import { getData } from '../../Services/api';
import GridItem from '../GridItem/GridItem';

export const DataGrid = ({ status, launchDate, type }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to open the modal when a grid box is clicked
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  const filter = (array) => {
    if (status) {
      array = array.filter((elem) => elem.status === status);
    }

    if (type) {
      array = array.filter((elem) => elem.type === type);
    }

    if (launchDate) {
      if (launchDate === 'htl') {
        array.sort((a, b) => b.original_launch_unix - a.original_launch_unix);
      } else {
        array.sort((a, b) => a.original_launch_unix - b.original_launch_unix);
      }
    }
    setFilterData(array);
  };

  useEffect(() => {
    getData(setData, setFilterData);
  }, []);

  useEffect(() => {
    let result = [...data];
    filter(result);
  }, [status, type, launchDate]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={currentItems.length ? styles.gridData : styles.empty}>
        {currentItems.length ? (
          currentItems.map((elem, index) => {
            return (
              <GridItem
                key={index}
                item={elem}
                openModel={openModal}
              />
            );
          })
        ) : (
          <h2 className={styles.notFound}>Not matching with any data</h2>
        )}
      </div>
      {selectedItem && (
        <GridModal
          data={selectedItem}
          onClose={closeModal}
        />
      )}

      {/* Pagination */}
      <section className={styles.pagination}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}>
          Previous
        </button>
        <section className={styles.numberButtons}>
          {Array.from({
            length: Math.ceil(filterData.length / itemsPerPage),
          }).map((elem, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={
                index + 1 === currentPage
                  ? styles.paginationButtonActive
                  : styles.paginationButton
              }>
              {index + 1}
            </button>
          ))}
        </section>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(filterData.length / itemsPerPage)}
          className={styles.paginationButton}>
          Next
        </button>
      </section>
    </div>
  );
};
