import Toast, { useToast } from '../components/Toast';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  const { toastState, setToast, hideToast } = useToast();
  return (
    <>
      <Component setToast={setToast} hideToast={hideToast} {...pageProps} />
      <Toast {...toastState} hideToast={hideToast} />
    </>
  );
}

export default App;
