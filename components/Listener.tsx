'use client'
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const ScrollToAnchor: React.FC = () => {
  const router = useRouter();
  const lastHash = useRef<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        lastHash.current = window.location.hash.slice(1);
      }

      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          const element = document.getElementById(lastHash.current);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            lastHash.current = '';
          }
        }, 100);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router.pathname]);

  return null;
};

export default ScrollToAnchor;