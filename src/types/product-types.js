import PropTypes from 'prop-types';

const featureShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

const specificationShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

const productType = {
  id: PropTypes.string.isRequired,
  isNewModel: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  creditPrice: PropTypes.number.isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  features: PropTypes.arrayOf(featureShape.isRequired).isRequired,
  specifications: PropTypes.arrayOf(specificationShape.isRequired).isRequired,
};

const productShape = PropTypes.shape(productType);

export {
  productType,
  productShape,
};
