import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <li
            className={ImageGalleryItem}
            key={id}
            onClick={() => {
              openModal(largeImageURL, tags);
            }}
          >
            <ImageGalleryItem url={webformatURL} alt={tags} />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ImageGallery;
