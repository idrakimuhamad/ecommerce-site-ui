import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'reflexbox';
import styles from '../../../styles/product-card.module.scss';

export default function DiscountPill({ size = 'default', discount }) {
  return (
    <Box
      className={`${styles.productCard__discountPercentage} ${
        styles['productCard__discountPercentage--' + size]
      }`}>
      -{discount}%
    </Box>
  );
}

DiscountPill.propTypes = {
  discount: PropTypes.string,
  size: PropTypes.oneOf(['default', 'big']),
};
