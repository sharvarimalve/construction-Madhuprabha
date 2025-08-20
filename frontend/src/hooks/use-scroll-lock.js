import { useEffect } from 'react';

const useScrollLock = (lock) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow; // Restore original or 'auto' if not set
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lock]);
};

export default useScrollLock;
