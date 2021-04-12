import React from 'react';
import { Flex, BoxProps } from 'reflexbox';
import PropTypes from 'prop-types';

export default function Wrapper({ className, children, ...props }) {
  return (
    <Flex className={`wrapper ${className ?? ''}`} mx="auto" px={3} {...props}>
      {children}
    </Flex>
  );
}
Wrapper.propTypes = {
  children: PropTypes.node,
  ...BoxProps,
};
