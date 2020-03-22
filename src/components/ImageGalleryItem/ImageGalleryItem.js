import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ items, alt }) => (
  <>
    {items.map(({ id, modalURL, url }) => (
      <li key={id}>
        <img
          className={styles.ImageGalleryItemImage}
          src={url}
          alt={alt}
          srcSet={modalURL}
        />
      </li>
    ))}
  </>
);

ImageGalleryItem.defaultProps = {
  alt: 'some image',
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      modalURL: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGalleryItem;
