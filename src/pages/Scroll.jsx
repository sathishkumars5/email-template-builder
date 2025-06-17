import React, { useEffect, useRef } from 'react';
import './scroll.css';

const ScrollShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const intervalTime = 2000; // 3 seconds
    const cardWidth = container?.firstChild?.offsetWidth || 300;

    let scrollIndex = 0;
    let intervalId;

    const scrollStep = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScrollLeft = cardWidth * scrollIndex;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });

      scrollIndex++;
      const maxIndex = Math.floor(container.scrollWidth / cardWidth);

      if (targetScrollLeft >= maxScroll || scrollIndex >= maxIndex) {
        scrollIndex = 0;
      }
    };

    intervalId = setInterval(scrollStep, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="scroll-showcase">
      <div className="scroll-container" ref={scrollRef}>
        <div className="card img-div" />
        <div className="card component-img-div" />
        <div className="card canvas-img-div" />
        <div className="card property-img-div" />
        <div className="card header-img-div" />
        <div className="card img-div" />
        <div className="card component-img-div" />
        <div className="card canvas-img-div" />
      </div>
    </section>
  );
};

export default ScrollShowcase;