import { motion } from 'framer-motion';
import React from 'react';
import { Box } from 'reflexbox';
import Voucher from '../Voucher';
import Wrapper from '../Wrapper';

export default function Vouchers({ data }) {
  return (
    <div className="vouchers">
      <Wrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        mb={3}>
        <Box as="a" className="voucher-link pointer">
          More Voucher
        </Box>
      </Wrapper>
      <Wrapper flexDirection={['column', 'row']} alignItems="center">
        {data.length > 0 &&
          data.map((voucher, index) => (
            <Box
              key={voucher.id}
              width={[1, 1 / 4]}
              mb={[3, 0]}
              pr={[0, index < 3 ? 4 : 0]}>
              <motion.div
                key={voucher.id}
                initial={{
                  opacity: 0,
                  y: 44,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}>
                <Voucher voucher={voucher} />
              </motion.div>
            </Box>
          ))}
      </Wrapper>
    </div>
  );
}
