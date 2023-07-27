"use client";
import Container from "@/app/components/Container/page";
import Rating from "@/app/components/Rating/page";
import { useGetCategoryWiseProduct, useGetProduct } from "@/app/hooks/api/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import addPercentage from "@/app/hooks/customFunctions/functions";
import ProductImages from "@/app/components/ProductImages/page";
import Carousel from "@/app/components/Carousel/page";
import addToCart from "@/app/hooks/cartFunctions/cartFunctions";

function Product({ params, searchParams }) {
  const [product, refetch, isLoading] = useGetProduct(params.productId);
  // console.log(searchParams.searchQuery);
  const [productsOfCategory, categoryLoading] = useGetCategoryWiseProduct(
    params.productId,
    searchParams.searchQuery
  );
  console.log(productsOfCategory);
  const {
    images,
    category,
    description,
    rating,
    brand,
    price,
    discountPercentage,
  } = product;
  const [activeImage, setActiveImage] = useState(product.images?.[0]);
  const mainPrice = addPercentage(price, discountPercentage);
  // console.log(images);
  //   console.log(product);
  useEffect(() => {
    setActiveImage(images?.[0]); // Set activeImage to the first image of the new product
  }, [images]);

  return (
    <>
      <Container>
        {isLoading ? (
          <div></div>
        ) : (
          <div className="pt-16">
            <div className="grid md:grid-cols-2 gap-4 px-4">
              <div className="flex justify-center px-2">
                {/* <Image
                  src={images[0]}
                  className="max-w-full max-h-96 rounded-lg"
                  alt="product image"
                  width={500}
                  height={500}
                /> */}
                <ProductImages
                  images={images}
                  activeImage={activeImage}
                  setActiveImage={setActiveImage}
                />
              </div>
              <div className="max-sm:p-2">
                <h2 className="text-left text-3xl font-semibold">
                  {product.title}
                </h2>
                <p className="text-gray-500 pt-2">— in {category}</p>
                <p className="pt-4 pb-2">
                  <span className="font-semibold text-lg">Brand:</span> {brand}
                </p>
                <p className="pb-2 text-lg">
                  <span className="font-semibold">Details:</span> {description}
                </p>
                <p className="text-lg flex pb-2">
                  <span className="pr-2 font-semibold">Rating:</span>{" "}
                  <Rating rating={rating} />
                </p>
                <div>
                  <p className="flex gap-2 text-xl pb-2">
                    <span className="font-semibold">Price:</span>
                    <span>${price}</span>
                    <del className="text-gray-500">${mainPrice}</del>
                    <span className="text-gray-500 text-sm pt-1.5">
                      — {discountPercentage}% off!
                    </span>
                  </p>
                </div>
                <div className="flex items-center my-2">
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="border px-5 py-1 text-lg text-white bg-gray-800 rounded-lg "
                  >
                    Add to Cart
                  </button>
                </div>
                {/* <div className="">
                  <span className="border-b-2 border-black"></span>
                </div> */}
              </div>
            </div>
            <div>
              {!categoryLoading && (
                <Carousel
                  title={"Related"}
                  data={productsOfCategory}
                  category={`${searchParams}1`}
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default Product;
