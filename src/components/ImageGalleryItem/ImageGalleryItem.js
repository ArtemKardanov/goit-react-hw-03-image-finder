import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { items } = this.props;

    return (
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
  }
}
