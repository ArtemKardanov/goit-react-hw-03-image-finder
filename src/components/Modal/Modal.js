import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  state = {};

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onCloseModal();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) return;

    this.props.onCloseModal();
  };

  render() {
    const { src, alt } = this.props;

    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  alt: 'some image',
};

Modal.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
