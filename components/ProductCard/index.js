import React from 'react';
import { Box, Flex } from 'reflexbox';
import Image from 'next/image';
import { IoHeartOutline, IoStarOutline } from 'react-icons/io5';
import styles from '../../styles/product-card.module.scss';
import ProductColor from '../ProductColor';
import ProductSize from '../ProductSize';
import ProductRatings from './../ProductRatings';
import DiscountPill from './DiscountPill';
import Fav from './../ProductModal/Fav';

export default function ProductCard({
  id,
  title,
  price,
  priceDiscount,
  description,
  image,
  discount,
  sizes,
  colors,
  ratings,
  isWishlisted,
  width,
  selectedColor,
  onClick,
}) {
  function handleClick() {
    onClick(id);
  }

  return (
    <Flex
      className={styles.productCard}
      flexDirection="column"
      width={width}
      onClick={handleClick}>
      <Box className={styles.productCard__heading}>
        <Box className={styles.productCard__discountFav}>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p={3}>
            <DiscountPill discount={discount} />
            <Fav />
          </Flex>
        </Box>
        {!!image && (
          <Image
            className={styles.productCard__headingImg}
            src={image}
            layout="fill"
          />
        )}
      </Box>
      <Box className={styles.productCard__meta}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start">
          <Box as="h5" className={styles.productCard__title} width={2 / 3}>
            {title}
          </Box>
          <Flex
            className={styles.productCardPrice}
            flexDirection="column"
            alignItems="flex-end"
            flexGrow={1}>
            <Box as="span" className={styles.productCard__discountPrice}>
              $ {priceDiscount.toFixed(2)}
            </Box>
            <Box as="span" className={styles.productCard__price}>
              $ {price.toFixed(2)}
            </Box>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          className={styles.productCard__options}>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            title={
              colors.length > 0
                ? 'Available colors'
                : 'No colors option available'
            }>
            {colors.length > 0 &&
              colors.map((color, index) => (
                <ProductColor key={`${color}-${index}`} color={color} mr={2} />
              ))}
          </Flex>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            title={
              sizes?.length > 0
                ? 'Available sizes'
                : 'No sizes option available'
            }>
            {sizes?.length > 0 &&
              sizes.map((size, index) => (
                <ProductSize key={`${size}-${index}`} value={size} ml={2} />
              ))}
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          py={2}>
          <ProductRatings ratings={ratings} />
          <Box as="a" className={styles.productCard__buy}>
            Buy +
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
