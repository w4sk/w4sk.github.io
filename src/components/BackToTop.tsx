import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="ページ上部に戻る"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 14V6M10 6L6 10M10 6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default BackToTop;
