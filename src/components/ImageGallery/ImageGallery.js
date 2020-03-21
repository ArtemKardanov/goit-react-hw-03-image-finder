import React, { Component } from 'react';
import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {};

  onChange = e => {
    const { onChange, onModalOpen } = this.props;
    const { srcset } = e.target;

    if (e.target === e.currentTarget) return;

    onChange(srcset);
    onModalOpen();
  };

  render() {
    const { children } = this.props;

    return (
      <>
        <ul className={styles.ImageGallery} onClick={this.onChange}>
          {children}
        </ul>
      </>
    );
  }
}
