import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {productShape} from '../../types/product-types';
import {withActiveImage} from '../../hocs/with-active-image';

const ProductSlider = ({
  product,
  activeImageIndex,
  isBackArrowEnabled, onBackArrowClick,
  isNextArrowEnabled, onNextArrowClick,
  onActiveImageTouchStart, onActiveImageTouchMove, onActiveImageTouchEnd,
}) => {
  const activeImageContainerClassName = getClassName({
    [`product-slider__active-image-container`]: true,
    [`product-slider__active-image-container--new-model`]: true,
  });

  const backArrowClassName = getClassName({
    [`product-slider__arrow-button`]: true,
    [`product-slider__arrow-button--back`]: true,
  });

  const nextArrowPathClassName = getClassName({
    [`product-slider__arrow-button`]: true,
    [`product-slider__arrow-button--next`]: true,
  });

  return (
    <div className="product-slider">
      <figure className={activeImageContainerClassName}>
        <img
          className="product-slider__active-image"
          src={product.images[activeImageIndex]}
          alt={`Изображение «${product.title}» №${activeImageIndex + 1}`}
          width="600" height="375"
          onTouchStart={onActiveImageTouchStart}
          onTouchMove={onActiveImageTouchMove}
          onTouchEnd={onActiveImageTouchEnd}
          draggable={false}
        />
      </figure>

      <div className="product-slider__controls">
        <button type="button"
          className={backArrowClassName}
          aria-label={`Выбрать предыдущее изображение ${product.title}`}
          onClick={onBackArrowClick}
          disabled={!isBackArrowEnabled}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513"/>
          </svg>
        </button>

        <button type="button"
          className={nextArrowPathClassName}
          aria-label={`Выбрать следующее изображение ${product.title}`}
          onClick={onNextArrowClick}
          disabled={!isNextArrowEnabled}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513"/>
          </svg>
        </button>

        <ul className="product-slider__thumbnails">
          {product.thumbnails.map((thumbnail, thumbnailIndex) => {
            const imageClassName = getClassName({
              [`product-slider__thumbnail-image`]: true,
              [`active`]: activeImageIndex === thumbnailIndex,
            });
            return (
              <li key={thumbnail} className="product-slider__thumbnails-item">
                <img
                  className={imageClassName}
                  src={thumbnail}
                  alt={`Превью «${product.title}» №${thumbnailIndex + 1}`}
                  width="128" height="80"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  product: productShape.isRequired,
  activeImageIndex: PropTypes.number.isRequired,
  isBackArrowEnabled: PropTypes.bool.isRequired,
  onBackArrowClick: PropTypes.func.isRequired,
  isNextArrowEnabled: PropTypes.bool.isRequired,
  onNextArrowClick: PropTypes.func.isRequired,
  onActiveImageTouchStart: PropTypes.func.isRequired,
  onActiveImageTouchMove: PropTypes.func.isRequired,
  onActiveImageTouchEnd: PropTypes.func.isRequired,
};

const ProductSliderWithActiveImage = withActiveImage(ProductSlider);

export {ProductSlider, ProductSliderWithActiveImage};
