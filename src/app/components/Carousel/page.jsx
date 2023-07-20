"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "../Card/page";
import React from "react";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  const scrollsmLeft = () => {
    document.getElementById("content").scrollLeft -= 200;
  };
  const scrollsmRight = () => {
    document.getElementById("content").scrollLeft += 200;
  };
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchStartX.current - touchEndX.current > threshold) {
      // Swipe left, scroll to the right
      document.getElementById("content").scrollLeft += 200;
    } else if (touchEndX.current - touchStartX.current > threshold) {
      // Swipe right, scroll to the left
      document.getElementById("content").scrollLeft -= 200;
    }
  };

  return (
    <div className="relative flex items-center justify-center flex-col font-mono font-normal">
      <div className="text-center py-4  text-xl font-bold">Carousel</div>
      <div className="max-sm:hidden absolute right-24 top-5">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft className="text-xl font-bold" />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight className="text-xl font-bold" />
        </button>
      </div>
      <div className="absolute right-0 top-5">
        <button
          onClick={scrollsmLeft}
          className="p-2 m-2 md:hidden rounded-full bg-white"
        >
          <FiChevronLeft className="" />
        </button>
        <button
          onClick={scrollsmRight}
          className="p-2 m-2 md:hidden rounded-full bg-white"
        >
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel p-4 gap-14 flex items-center justify-start overflow-x-hidden scroll-smooth max-w-7xl max-sm:w-[280px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
