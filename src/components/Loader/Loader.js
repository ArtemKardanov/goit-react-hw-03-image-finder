import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <Spinner
    className={styles.Loader}
    type="ThreeDots"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000}
  />
);

export default Loader;
