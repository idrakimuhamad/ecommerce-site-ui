import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Box } from 'reflexbox';
import styles from '../../styles/toast.module.scss';

export const useToast = () => {
  const [showToast, setToastShow] = useState(false);
  const [toastType, setToastType] = useState('default');
  const [toastMessage, setToastMessage] = useState('');
  const timer = useRef();

  function startTimer() {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      hideToast();
    }, 5000);
  }

  function setToast(message, type) {
    setToastShow(true);
    setToastMessage(message);
    setToastType(type);

    startTimer();
  }

  function hideToast() {
    setToastShow(false);
    setToastMessage('');
    setToastType('default');
    clearTimeout(timer.current);
  }

  return {
    toastState: { visible: showToast, message: toastMessage, type: toastType },
    setToast,
    hideToast,
  };
};

export default function Toast({ visible, message, type, hideToast }) {
  return (
    <Box className={styles.toast}>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              translateY: 44,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              translateY: 44,
            }}>
            <Box
              className={`${styles['toast-container']} ${
                styles['toast-container--' + type]
              }`}>
              <Box
                as="a"
                onClick={hideToast}
                className={`pointer ${styles.toast__close}`}>
                <IoCloseOutline size={24} />
              </Box>
              {message}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
