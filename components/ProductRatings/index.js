import PropTypes from 'prop-types';
import React from 'react';
import { IoStarOutline } from 'react-icons/io5';
import { Box, Flex } from 'reflexbox';
import styles from '../../styles/product-card.module.scss';

export default function ProductRatings({ size = 'default', ratings }) {
  return (
    <Flex flexDirection="row" alignItems="center">
      <IoStarOutline
        className={styles.productCard__ratingStar}
        size={size === 'default' ? 10 : 24}
      />
      <Box
        className={`${styles.productCard__ratingNumber} ${
          styles['productCard__ratingNumber--' + size]
        }`}
        as="span"
        ml={1}>
        {ratings ?? '0.0'}
      </Box>
    </Flex>
  );
}

ProductRatings.propTypes = {
  ratings: PropTypes.string,
  size: PropTypes.oneOf(['default', 'big']),
};
