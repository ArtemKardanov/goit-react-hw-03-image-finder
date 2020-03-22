import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onChange = e => {
    const { onChange, onModalOpen } = this.props;
    const { srcset } = e.target;

    if (e.target === e.currentTarget) return;

    onChange(srcset);

    onModalOpen();
  };

  render() {
    return (
      <>
        <ul className={styles.ImageGallery} onClick={this.onChange}>
          {this.props.children}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
