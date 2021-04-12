import { motion } from 'framer-motion';
import { Box } from 'reflexbox';
import ProductCard from '../ProductCard';
import Wrapper from '../Wrapper';

function TabTitle({ isSelected, title, value, onClick }) {
  function handleClick() {
    onClick(value);
  }

  return (
    <Box
      as="h4"
      mr={3}
      className={`tab-title pointer ${isSelected && 'tab-title--selected'}`}>
      <a onClick={handleClick} className="pointer">
        {title}
      </a>
    </Box>
  );
}

export default function TopNewProducts({
  data,
  onTabClick,
  selectedTab,
  onProductClick,
}) {
  return (
    <div className="top-new-products">
      <Wrapper
        className="top-new-products__title"
        flexDirection="row"
        alignItems="center">
        <TabTitle
          title="Best Seller"
          value="top"
          onClick={onTabClick}
          isSelected={selectedTab === 'top'}
        />
        <TabTitle
          title="New Product"
          value="new"
          onClick={onTabClick}
          isSelected={selectedTab === 'new'}
        />
      </Wrapper>
      <Wrapper
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        className="top-new-product--container">
        {data.length > 0 &&
          data.map((product, index) => (
            <Box
              key={product.id}
              className="top-product"
              width={[1, 1 / 4]}
              mb={[3, 0]}
              pr={[0, index < 3 ? 4 : 0]}>
              <motion.div
                key={product.id}
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
                  image={product?.images[0]}
                  onClick={onProductClick}
                  {...product}
                />
              </motion.div>
            </Box>
          ))}
      </Wrapper>
    </div>
  );
}
