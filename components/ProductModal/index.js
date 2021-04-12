import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { Box, Flex } from 'reflexbox';
import { IoAddSharp, IoCloseOutline, IoRemoveSharp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/product-modal.module.scss';
import ImageList from './ImagePreview/index';
import ImagePreview from './ImagePreview/index';
import DiscountPill from '../ProductCard/DiscountPill';
import ProductRatings from '../ProductRatings';
import ProductColor from '../ProductColor';
import ProductSize from '../ProductSize';
import Input from '../Input';
import Button from '../Button';
import Fav from './Fav';

function RootModal({ children }) {
  const body = document.getElementsByTagName('body')[0];
  let el = document.createElement('div');
  el.className = 'root-modal';

  useEffect(() => {
    body.appendChild(el);

    return () => {
      body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
}

const variants = {
  initial: { top: '100%', transition: { type: 'spring', delay: 0.3 } },
  isOpen: { top: 0 },
  exit: { top: '100%' },
};

function InnerModal({ visible, data, onClose, onAddToCart }) {
  const [selectedImage, setImage] = useState(0);
  const [selectedColor, setColor] = useState(data?.colors[0]);
  const [selectedSize, setSize] = useState(data?.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  function onImageSelected(index) {
    setImage(index);
  }

  function onColorSelected(color) {
    setColor(color);
  }

  function onSizeSelected(size) {
    setSize(size);
  }

  function onQuantityChanged(type) {
    if (type === 'decrease') {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function onWishlist() {
    setWishlist(!wishlist);
  }

  function handleOnAddToCart() {
    onAddToCart({
      id: data?.id,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className={styles.rootModal__overlay}>
      <Box
        as="a"
        onClick={onClose}
        className={`${styles.rootModal__close} pointer`}>
        <IoCloseOutline size={24} />
      </Box>
      <motion.div key="dialog" variants={variants}>
        <Box className={styles.modal__dialog}>
          <Flex
            flexDirection="column"
            className={styles.modal__dialog__container}>
            <Flex
              flexDirection="row"
              className={styles.modal__dialog__innerContainer}>
              {/* Images start */}
              <Box className={styles.modal__images} flex={1}>
                <Flex
                  flexDirection="column"
                  className={styles.modal__images__inner}>
                  {data?.images.length > 0 &&
                    data.images.map((image, index) => (
                      <ImagePreview
                        key={`${image}-${index}`}
                        image={image}
                        index={index}
                        isSelected={selectedImage === index}
                        onClick={onImageSelected}
                      />
                    ))}
                </Flex>
              </Box>
              {/* Images end */}

              {/* Image preview start */}
              <Box
                className={styles.modal__image__preview}
                maxWidth={['100%', '50%']}
                flex={2}
                mr={4}>
                <AnimatePresence>
                  {data?.images && selectedImage !== null && (
                    <motion.div
                      key={data?.images[selectedImage]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}>
                      <Image src={data?.images[selectedImage]} layout="fill" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
              {/* Image preview end */}

              {/* product start */}
              <Flex overflow="auto" flexDirection="column" flex={2}>
                <Flex flexDirection="row" alignItems="center">
                  {data?.discount && (
                    <DiscountPill size="big" discount={data.discount} />
                  )}
                  <Box ml={4}>
                    {data?.ratings && (
                      <ProductRatings size="big" ratings={data.ratings} />
                    )}
                  </Box>
                </Flex>
                <Box as="h2" className={styles.modal__title}>
                  {data?.title}
                </Box>
                <Box as="p" className={styles.modal__sku} mb={2}>
                  SKU:{' '}
                  <Box as="span" className={styles.modal__skuNo}>
                    {data?.sku}
                  </Box>
                </Box>
                <Box as="p" className={styles.modal__brand}>
                  Brand:{' '}
                  <Box as="span" className={styles.modal__brandName}>
                    {data?.brand}
                  </Box>
                </Box>
                <Flex flexDirection="row" alignItems="flex-end" py={5}>
                  {data?.priceDiscount && (
                    <Box
                      as="span"
                      className={styles.modal__discountPrice}
                      mr={3}>
                      $ {data?.priceDiscount.toFixed(2)}
                    </Box>
                  )}
                  {data?.price && (
                    <Box as="span" className={styles.modal__price}>
                      $ {data?.price.toFixed(2)}
                    </Box>
                  )}
                </Flex>
                <Box mb={3}>
                  <Box as="h3" className={styles.modal__color__title}>
                    Colors
                  </Box>
                  <Flex flexDirection="row" alignItems="center" py={2}>
                    {data?.colors.length > 0 &&
                      data.colors.map((color, index) => (
                        <ProductColor
                          key={`${color}-${index}`}
                          color={color}
                          isSelected={selectedColor === color}
                          onClick={onColorSelected}
                          size="big"
                          mr={3}
                        />
                      ))}
                  </Flex>
                </Box>
                <Box mb={2}>
                  <Box as="h3" className={styles.modal__size__title}>
                    Size
                  </Box>
                  <Flex flexDirection="row" alignItems="center" py={2}>
                    {data?.sizes.length > 0 &&
                      data.sizes.map((size, index) => (
                        <ProductSize
                          key={`${size}-${index}`}
                          value={size}
                          isSelected={selectedSize === size}
                          onClick={onSizeSelected}
                          size="big"
                          mr={3}
                        />
                      ))}
                  </Flex>
                </Box>
                <Box as="a" className={styles.modal__sizeGuide}>
                  Size Guide
                </Box>
                <Box mt={4}>
                  <Box as="h3" className={styles.modal__quantity__title}>
                    Quantity
                  </Box>
                  <Flex flexDirection="row" alignItems="center" py={3}>
                    <Box width={1} maxWidth={['100%', '50%']}>
                      <Input value={quantity} placeholder="Quantity" readOnly />
                    </Box>
                    <Box ml={2}>
                      <Button
                        variant="default"
                        onClick={() => onQuantityChanged('decrease')}
                        p={0}
                        width="3rem"
                        height="3rem">
                        <IoRemoveSharp size={24} />
                      </Button>
                    </Box>
                    <Box ml={2}>
                      <Button
                        variant="default"
                        onClick={() => onQuantityChanged('increase')}
                        p={0}
                        width="3rem"
                        height="3rem">
                        <IoAddSharp size={24} />
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* product end */}
            </Flex>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
              py={3}>
              <Fav size="big" onClick={onWishlist} filled={wishlist} />
              <Box ml={2}>
                <Button variant="secondary" onClick={handleOnAddToCart}>
                  Add to Cart
                </Button>
              </Box>
              <Box ml={2}>
                <Button variant="primary">Buy Now</Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </motion.div>
    </Flex>
  );
}

export const useModal = () => {
  const [visible, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [cartItems, setAddToCart] = useState([]);

  function showModal({ data }) {
    console.log('showmodal');
    setModal(true);
    setModalData(data);
  }

  function hideModal() {
    setModal(false);
    setModalData(null);
  }

  function onAddToCart(item) {
    setAddToCart((state) => [...state, item]);
    hideModal();
  }

  return {
    state: { visible, data: modalData, cartItems },
    showModal,
    hideModal,
    onAddToCart,
  };
};

export default function ProductModal({
  visible,
  data,
  onClose,
  onAddToCart,
  setToast,
}) {
  function onAdd(item) {
    onAddToCart(item);
    setToast('Item added to cart', 'success');
  }

  return (
    <RootModal>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <InnerModal
              visible={visible}
              data={data}
              onClose={onClose}
              onAddToCart={onAdd}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </RootModal>
  );
}
