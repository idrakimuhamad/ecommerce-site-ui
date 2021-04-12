import PropTypes from 'prop-types';
import React from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { Flex } from 'reflexbox';
import styles from '../../../styles/product-card.module.scss';

export default function Fav({ size = 'default', filled = false, onClick }) {
  return (
    <Flex
      as="a"
      justifyContent="center"
      alignItems="center"
      className={`pointer ${styles.productCard__fav} ${
        styles['productCard__fav--' + size]
      }`}
      onClick={onClick}>
      {filled ? (
        <IoHeartSharp
          className={styles['productCard__fav-heart--filled']}
          size={size === 'default' ? 16 : 32}
        />
      ) : (
        <IoHeartOutline size={size === 'default' ? 16 : 32} />
      )}
    </Flex>
  );
}

Fav.propTypes = {
  size: PropTypes.oneOf(['default', 'big']),
};
