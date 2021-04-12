import dynamic from 'next/dynamic';
import Toast, { useToast } from '../components/Toast';
import { useModal } from '../components/ProductModal';
import '../styles/globals.scss';

const ProductModal = dynamic(() => import('../components/ProductModal'), {
  ssr: false,
});

function App({ Component, pageProps }) {
  const { toastState, setToast, hideToast } = useToast();
  const { state, showModal, hideModal, onAddToCart } = useModal();

  return (
    <>
      <Component
        setToast={setToast}
        hideToast={hideToast}
        showModal={showModal}
        hideModal={hideModal}
        cartItems={state.cartItems}
        {...pageProps}
      />
      <Toast {...toastState} hideToast={hideToast} />
      <ProductModal
        {...state}
        setToast={setToast}
        onClose={hideModal}
        onAddToCart={onAddToCart}
      />
    </>
  );
}

export default App;
