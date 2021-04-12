import React from 'react';
import { Box, Flex } from 'reflexbox';
import styles from '../../styles/voucher.module.scss';

export default function Voucher({ voucher, ...props }) {
  return (
    <Box {...props}>
      <Flex
        className={styles.voucher}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box className={styles.voucherMeta} flex="auto">
          <p className={styles.voucher__title}>{voucher?.title}</p>
          <span className={styles.voucher__code}>{voucher?.code}</span>
        </Box>
        <Box width={1 / 3} className={styles.voucher__discount}>
          <Box fontWeight="600">{voucher?.discount}</Box>
          <Box>Off</Box>
        </Box>
      </Flex>
    </Box>
  );
}
