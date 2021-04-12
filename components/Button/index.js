import PropTypes from 'prop-types';
import React from 'react';
import { Flex } from 'reflexbox';

export default function Button({
  children,
  variant = 'primary',
  compact = false,
  onClick,
  ...props
}) {
  return (
    <Flex
      as="a"
      justifyContent="center"
      alignItems="center"
      className={`button button--${variant} ${compact && 'button--compact'}`}
      onClick={onClick}
      {...props}>
      {children}
    </Flex>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  compact: PropTypes.bool,
  onClick: PropTypes.func,
};
