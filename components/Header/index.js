import React from 'react';
import { Flex, Box } from 'reflexbox';
import {
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoBagOutline,
  IoMenuSharp,
} from 'react-icons/io5';
import Button from '../Button';
import styles from '../../styles/header.module.scss';
import Wrapper from '../Wrapper';

export default function Header({ cartCount }) {
  return (
    <Flex className="header" flexDirection="column">
      <Box className={styles.header__secondary}>
        <Wrapper flexDirection="row" justifyContent="flex-end">
          <a className={styles['meta-link']}>Client Services</a>
          <a className={styles['meta-link']}>FAQ</a>
          <a className={styles['meta-link']}>About</a>
        </Wrapper>
      </Box>
      <Box className={styles.header__primary}>
        <Wrapper
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Flex flexDirection="row" alignItems="center">
            <Box as="h1" mr={4} className={styles.logo}>
              Blizoo.
            </Box>
            <Box
              as="a"
              className={`pointer ${styles.header__search}`}
              display={['none', 'block']}>
              <IoSearchOutline size={24} />
            </Box>
          </Flex>
          <Box display={['none', 'flex']}>
            <Flex flexDirection="row" alignItems="center">
              <a className={`${styles.topbar__link} pointer`}>Man</a>
              <a className={`${styles.topbar__link} pointer`}>Women's</a>
              <a className={`${styles.topbar__link} pointer`}>
                <IoHeartOutline size={24} />
              </a>
              <a className={`${styles.topbar__link} pointer`}>
                <IoPersonOutline size={24} />
              </a>
              <Button variant="primary" compact>
                <IoBagOutline size={24} />
                <Box as="span" ml={1}>
                  Cart ({cartCount})
                </Box>
              </Button>
            </Flex>
          </Box>
          <Box display={['box', 'none']}>
            <a className="pointer">
              <IoMenuSharp size={24} />
            </a>
          </Box>
        </Wrapper>
      </Box>
      <Wrapper
        className={styles.bottomBar}
        flexDirection="row"
        alignItems={['flex-start', 'center']}>
        <a className={`${styles.bottomBar__link} pointer`}>Top</a>
        <a className={`${styles.bottomBar__link} pointer`}>Bottom</a>
        <a className={`${styles.bottomBar__link} pointer`}>Swim wear</a>
        <a className={`${styles.bottomBar__link} pointer`}>Watch</a>
        <a className={`${styles.bottomBar__link} pointer`}>Shoes</a>
        <a className={`${styles.bottomBar__link} pointer`}>Bag</a>
        <a className={`${styles.bottomBar__link} pointer`}>Accessories</a>
        <a className={`${styles.bottomBar__link} pointer`}>Sports</a>
        <a className={`${styles.bottomBar__link} pointer`}>Cosmetics</a>
        <a className={`${styles.bottomBar__link} pointer`}>Muslim Wear</a>
      </Wrapper>
    </Flex>
  );
}
