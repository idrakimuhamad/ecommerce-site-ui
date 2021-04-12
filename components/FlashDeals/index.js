import { motion } from 'framer-motion';
import React from 'react';
import { IoFlashSharp } from 'react-icons/io5';
import { Box } from 'reflexbox';
import Countdown from '../Countdown';
import ProductCard from '../ProductCard';
import Wrapper from '../Wrapper';

export default function FlashDeals({ data, onProductClick }) {
  return (
    <div className="flash-deals">
      <Wrapper
        className="flash-deals--title"
        flexDirection="row"
        alignItems="center">
        <IoFlashSharp size={18} />
        <Box as="h4" px={2}>
          Flash Sale
        </Box>
        <Countdown />
      </Wrapper>
      <Wrapper
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        className="flash-deals--container">
        {data.length > 0 &&
          data.map((deal, index) => (
            <Box
              key={deal.id}
              className="flash-deals-product"
              width={[1, 1 / 4]}
              mb={[3, 0]}
              pr={[0, index < 3 ? 4 : 0]}>
              <motion.div
                key={deal.id}
                initial={{
                  opacity: 0,
                  y: 44,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}>
                <ProductCard
                  width={1}
                  image={deal?.images[0]}
                  onClick={onProductClick}
                  {...deal}
                />
              </motion.div>
            </Box>
          ))}
      </Wrapper>
    </div>
  );
}
