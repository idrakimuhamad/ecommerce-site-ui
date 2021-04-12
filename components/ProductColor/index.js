import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'reflexbox';
import styles from '../../styles/product-color.module.scss';

export default function ProductColor({
  color,
  size = 'default',
  onClick,
  isSelected,
  ...props
}) {
  function handlePress() {
    typeof onClick === 'function' && onClick(color);
  }

  return (
    <Flex
      as="a"
      onClick={handlePress}
      className={`pointer ${styles.productColor} ${
        styles['productColor--' + size]
      } ${isSelected ? styles['productColor--selected'] : ''}`}
      alignItems="center"
      justifyContent="center"
      {...props}>
      <Box bg={color} className={styles.productColor__color} />
    </Flex>
  );
}

ProductColor.propTypes = {
  color: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['default', 'big']),
};
