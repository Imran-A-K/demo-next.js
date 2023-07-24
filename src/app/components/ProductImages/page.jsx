"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ImageButton } from "../ImageButton/page";
function ProductImages({ images, activeImage, setActiveImage }) {
  // console.log(images);
  // console.log(activeImage);
  // const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <div className="flex flex-col">
      <div className="">
        <Image
          src={activeImage}
          className="max-w-full h-96 rounded-lg"
          alt="product image"
          width={500}
          height={500}
        />
      </div>
      <div className="flex gap-3 flex-grow-0 mt-4 px-2 max-sm:grid max-sm:grid-cols-3 max-sm:place-items-center">
        {images?.map((image) => (
          <ImageButton
            key={image}
            image={image}
            active={image === activeImage}
            setActiveImage={setActiveImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
