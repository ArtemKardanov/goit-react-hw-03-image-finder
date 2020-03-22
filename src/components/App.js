import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from '../components/App.module.css';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import imagesApi from '../api/imagesApi/imagesApi';
import Modal from './Modal/Modal';
import Button from './Button/Button';

const mapper = images => {
  return images.map(
    ({ webformatURL: url, largeImageURL: modalURL, ...props }) => ({
      url,
      modalURL,
      ...props,
    }),
  );
};

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    isModalOpen: false,
    modalSize: '',
    imgName: '',
  };

  imagesListQuery = () => {
    imagesApi
      .articlesQuery()
      .then(({ data }) => {
        if (data.hits.length === 0) {
          alert('Please try another request.');
        }

        imagesApi.incrementPage();

        this.setState(state => ({
          images: [...state.images, ...mapper(data.hits)],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  clearImages = () => {
    this.setState({ images: '' });
  };

  fetchImages = query => {
    this.setState({ isLoading: true, imgName: query });
    this.clearImages();

    imagesApi.resetPage();

    imagesApi.searchQuery = query;

    this.imagesListQuery();
  };

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    this.imagesListQuery();
  };

  handleModalUrlChange = url => {
    this.setState({ modalSize: url });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, modalSize: '' });
  };

  render() {
    const {
      images,
      isLoading,
      error,
      isModalOpen,
      modalSize,
      imgName,
    } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.fetchImages} />
        {error && <ErrorNotification text={error.message} />}

        {images.length > 0 && (
          <ImageGallery
            items={images}
            onChange={this.handleModalUrlChange}
            onModalOpen={this.handleOpenModal}
          >
            <ImageGalleryItem items={images} alt={imgName} />
          </ImageGallery>
        )}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal
            onCloseModal={this.handleCloseModal}
            src={modalSize}
            alt={imgName}
          />
        )}
        {images.length > 0 && <Button onChange={this.handleLoadMore} />}
      </div>
    );
  }
}
