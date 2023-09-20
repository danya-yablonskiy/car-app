import { useEffect } from 'react';

export const useHandleKeyDown = closeModal => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
};

export const useLockBody = () => {
  useEffect(() => {
    const [body] = document.getElementsByTagName('body');

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  }, []);
};
