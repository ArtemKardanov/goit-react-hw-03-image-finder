import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

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
    const { onCloseModal } = this.props;

    if (e.code !== 'Escape') return;

    onCloseModal();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    const { onCloseModal } = this.props;

    if (current && e.target !== current) return;

    onCloseModal();
  };

  render() {
    const { src } = this.props;

    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal}>
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}
