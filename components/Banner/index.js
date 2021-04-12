import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Box, Flex } from 'reflexbox';
import styles from '../../styles/banner.module.scss';
import Wrapper from '../Wrapper';

// in real application this should be the carousel,
// though for now it'd be static banner with one image
export default function Banner({ image, alt, content }) {
  return (
    <Box className={styles.banner} height={['20rem', '40rem', '50rem']}>
      <Box className={styles.bgImg}>
        {!!image && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}>
            <Image src={image} alt={alt} layout="fill" priority />
          </motion.div>
        )}
      </Box>
      {content && (
        <Flex
          className={styles.banner__content}
          height={['20rem', '40rem', '50rem']}>
          <Wrapper>
            <Flex
              flexDirection="column-reverse"
              alignItems="flex-end"
              className={styles.banner__innerContent}>
              <Box className={`${styles.banner__innerContentWrapper}`}>
                <motion.div
                  initial={{
                    opacity: 0,
                    translateY: 44,
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }}>
                  {content}
                </motion.div>
              </Box>
            </Flex>
          </Wrapper>
        </Flex>
      )}
    </Box>
  );
}
