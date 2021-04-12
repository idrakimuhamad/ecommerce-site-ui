import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex } from 'reflexbox';
import styles from '../../styles/product-size.module.scss';

export default function ProductSize({
  value,
  size = 'default',
  onClick,
  isSelected,
  ...props
}) {
  function handlePress() {
    typeof onClick === 'function' && onClick(value);
  }

  return (
    <Flex
      as="a"
      onClick={handlePress}
      className={`pointer ${styles.productSize} ${
        styles['productSize--' + size]
      } ${isSelected ? styles['productSize--selected'] : ''}`}
      alignItems="center"
      justifyContent="center"
      {...props}>
      <Box className={styles.productSize__size}>{value}</Box>
    </Flex>
  );
}

ProductSize.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['default', 'big']),
  value: PropTypes.string,
};
