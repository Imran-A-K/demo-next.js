"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "../Card/page";
import React from "react";
import Container from "../Container/page";
import { useRouter } from "next/navigation";

function Carousel({ title, data, category, addToCart }) {
  const router = useRouter();
  // console.log(data);
  const scrollLeft = () => {
    document.getElementById(`${category}`).scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById(`${category}`).scrollLeft += 400;
  };
  const scrollsmLeft = () => {
    document.getElementById(`${category}`).scrollLeft -= 200;
  };
  const scrollsmRight = () => {
    document.getElementById(`${category}`).scrollLeft += 200;
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
      document.getElementById(`${category}`).scrollLeft += 200;
    } else if (touchEndX.current - touchStartX.current > threshold) {
      // Swipe right, scroll to the left
      document.getElementById(`${category}`).scrollLeft -= 200;
    }
  };

  return (
    <Container>
      <div className="relative flex items-center justify-center flex-col font-mono font-normal">
        <div className="relative group text-center my-4 py-4  text-2xl font-bold">
          {title}
          <span
            className={`h-[1px] inline-block bg-gray-900
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 w-0
      hover:w-full hover:max-md:bg-white} 
      dark:bg-white
       `}
          >
            &nbsp;
          </span>
        </div>
        <div className="max-sm:hidden absolute right-24 top-5">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft className="text-xl font-bold" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white"
          >
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
          id={`${category}`}
          className="carousel p-4 gap-16 flex items-center justify-start overflow-x-hidden scroll-smooth max-w-full max-sm:w-[280px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {data?.map((product) => (
            <Card
              key={product.id}
              img={product.images[0]}
              title={product.title}
              price={product.price}
              rating={product.rating}
              router={router}
              id={product.id}
              category={product.category}
              product={product}
              addToCart={addToCart}
            />
          ))}
          {/* <div>
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
        </div> */}
        </div>
      </div>
    </Container>
  );
}

export default Carousel;
