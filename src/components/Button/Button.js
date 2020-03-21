import React, { Component } from 'react';
import styles from './Button.module.css';

export default class Button extends Component {
  state = {};
  render() {
    return (
      <>
        <button
          type="button"
          className={styles.Button}
          onClick={this.props.onChange}
        >
          Load more
        </button>
      </>
    );
  }
}
