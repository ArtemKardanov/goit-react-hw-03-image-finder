import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onChange }) => (
  <button type="button" className={styles.Button} onClick={onChange}>
    Load more
  </button>
);

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Button;
