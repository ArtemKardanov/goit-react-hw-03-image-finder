import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ items }) => (
  <>
    {items.map(({ id, modalURL, url }) => (
      <li key={id}>
        <img
          className={styles.ImageGalleryItemImage}
          src={url}
          alt=""
          srcSet={modalURL}
        />
      </li>
    ))}
  </>
);

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      modalURL: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGalleryItem;
