import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box, Flex } from 'reflexbox';
import { IoFlashSharp } from 'react-icons/io5';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Countdown from '../components/Countdown';
import ProductCard from '../components/ProductCard';
import Voucher from './../components/Voucher';
import FlashDeals from '../components/FlashDeals';
import Vouchers from '../components/Vouchers';
import TopNewProducts from '../components/TopNewProducts';

const ProductModal = dynamic(() => import('../components/ProductModal'), {
  ssr: false,
});

export default function Landing({ setToast }) {
  const [banner, setBanner] = useState({
    image: '',
    title: '',
    description: '',
  });
  const [vouchers, setVouchers] = useState([]);
  const [flashDeals, setFlash] = useState([]);
  const [topNewProducts, setAllProducts] = useState({
    topProduct: [],
    newProduct: [],
  });
  const [selectedProductTab, setProductTab] = useState('top');
  const [products, setProduct] = useState([]);
  const [showModal, setModal] = useState(false);
  const [loading, setLoading] = useState({
    banner: true,
    flash: true,
    voucher: true,
    products: true,
    productDetails: false,
  });
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCart] = useState([]);

  function bannerContent() {
    if (!banner.title) return null;

    return (
      <div className="bannner__content">
        <Box as="p" color="#404040" mb={2}>
          {banner?.title}
        </Box>
        <Box as="h3" color="#333" fontSize={5} mb={2}>
          {banner?.description}
        </Box>
        <Box as="a" className="banner__link">
          Shop now
        </Box>
      </div>
    );
  }

  const getBanner = useCallback(async () => {
    try {
      const response = await fetch('/api/banner');
      const result = await response.json();

      if (result) {
        const { title, image, description } = result[0];

        setBanner({
          title,
          image,
          description,
        });
      }
    } catch (error) {
      console.log(`error when retrieving banner data: ${error}`);
    } finally {
      setLoading((state) => ({ ...state, banner: false }));
    }
  });

  const getVouchers = useCallback(async () => {
    try {
      const response = await fetch('/api/vouchers');
      const result = await response.json();

      if (result) {
        setVouchers(result);
      }
    } catch (error) {
      console.log(`error when retrieving vouchers data: ${error}`);
    } finally {
      setLoading((state) => ({ ...state, voucher: false }));
    }
  });

  const getFlashDeals = useCallback(async () => {
    try {
      const response = await fetch('/api/flash');
      const result = await response.json();

      if (result) {
        setFlash(result);
      }
    } catch (error) {
      console.log(`error when retrieving flash deals data: ${error}`);
    } finally {
      setLoading((state) => ({ ...state, flash: false }));
    }
  });

  const getTopNewProducts = useCallback(async () => {
    try {
      const response = await fetch('/api/top-new-product');
      const result = await response.json();

      if (result) {
        setAllProducts(result);
        setProduct(result?.topProduct);
      }
    } catch (error) {
      console.log(`error when retrieving products data: ${error}`);
    } finally {
      setLoading((state) => ({ ...state, products: false }));
    }
  });

  async function getProductById(id) {
    setLoading((state) => ({ ...state, productDetails: true }));

    try {
      const response = await fetch(`/api/product/${id}`);
      const result = await response.json();

      if (result) {
        setProductDetails(result);
      }
    } catch (error) {
      console.log(`error when retrieving product data: ${error}`);
    } finally {
      setLoading((state) => ({ ...state, productDetails: false }));
    }
  }

  function onTabClick(product) {
    setProductTab(product);

    if (product === 'top') {
      setProduct(topNewProducts?.topProduct);
    } else {
      setProduct(topNewProducts?.newProduct);
    }
  }

  function onProductClick(id) {
    setModal(true);
    getProductById(id);
  }

  function onCloseModal() {
    setModal(false);
    setProductDetails(null);
  }

  function onAddToCart(item) {
    setCart((state) => [...state, item]);
    setModal(false);
    setToast('Item added to cart', 'success');
  }

  useEffect(() => {
    getBanner();
    getFlashDeals();
    getTopNewProducts();
    getVouchers();
  }, []);

  return (
    <div className="app">
      <Head>
        <title>eCommerce Something Something</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cartCount={cartItems.length} />

      {/* banner start */}
      <Banner
        image={banner?.image}
        alt={banner?.description}
        content={bannerContent()}
      />
      {/* banner end */}

      {/* Flash deals start */}
      <FlashDeals data={flashDeals} onProductClick={onProductClick} />
      {/* Flash deals end */}

      {/* Vouchers start */}
      <Vouchers data={vouchers} />
      {/* Vouchers end */}

      {/* Top New Products start */}
      <TopNewProducts
        data={products}
        onTabClick={onTabClick}
        selectedTab={selectedProductTab}
        onProductClick={onProductClick}
      />
      {/* Top New Products end */}

      <ProductModal
        visible={showModal}
        data={productDetails}
        isLoading={loading.productDetails}
        onClose={onCloseModal}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
