import React from 'react';
import { Flex } from 'reflexbox';
import Image from 'next/image';
import styles from '../../../styles/product-modal.module.scss';

export default function ImagePreview({ image, index, isSelected, onClick }) {
  function handleOnClick() {
    onClick(index);
  }

  return (
    <Flex
      as="a"
      alignItems="center"
      justifyContent="center"
      key={`${image}-${index}`}
      className={`pointer ${styles.modal__images__thumbnail} ${
        isSelected ? styles['modal__images__thumbnail--selected'] : ''
      }`}
      mb={2}
      onClick={handleOnClick}>
      <Image src={image} layout="fill" />
    </Flex>
  );
}
