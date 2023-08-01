"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/page";
import {
  useFullProducts,
  useGetAllProducts,
  useLaptops,
  useSmartPhones,
  useSunglasses,
  useWatches,
} from "@/app/hooks/api/data";
import ProductCard from "@/app/components/Product-card/page";
import { useRouter } from "next/navigation";
import addToCart from "@/app/hooks/cartFunctions/cartFunctions";
import Card from "@/app/components/Card/page";
import Container from "@/app/components/Container/page";
import Loader from "@/app/components/Loader/page";

function Products() {
  const [fullProducts, fullProductsLoading] = useFullProducts();
  // const products = [...fullProducts];
  const router = useRouter();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(fullProducts || []);
  }, [fullProducts]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  // const [productsForPage, setProductsForPage] = useState();
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const options = [5, 10, 15, 20]; // dropdown options

  const [searchText, setSearchText] = useState("");
  const [searchNotMatched, setSeacrhNotMatched] = useState(false);
  // const filteredProducts = (searchText) => {
  //   const lowerSearchText = searchText.toLowerCase();
  //   if (!lowerSearchText) {
  //     setProducts([...fullProducts]);
  //     setSeacrhNotMatched(false);
  //   } else {
  //     const filtered = products.filter(
  //       (product) =>
  //         product.title.toLowerCase().includes(lowerSearchText) ||
  //         product.description.toLowerCase().includes(lowerSearchText) ||
  //         product.category.toLowerCase().includes(lowerSearchText)
  //     );
  //     setProducts(filtered);
  //     setSeacrhNotMatched(filtered.length === 0);
  //   }
  // };
  const filteredProducts = (event) => {
    const lowerSearchText = event.target.value.toLowerCase();
    if (!lowerSearchText) {
      setProducts([...fullProducts]);
      setSeacrhNotMatched(false);
    } else {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearchText) ||
          product.description.toLowerCase().includes(lowerSearchText) ||
          product.category.toLowerCase().includes(lowerSearchText)
      );
      setProducts(filtered);
      setSeacrhNotMatched(filtered.length === 0);
    }
  };
  // useEffect(() => {
  //   const filteredProducts = (searchText) => {
  //     const lowerSearchText = searchText.toLowerCase();
  //     if (!lowerSearchText) {
  //       setProducts([...fullProducts]);
  //       setSeacrhNotMatched(false);
  //     } else {
  //       const filtered = products.filter(
  //         (product) =>
  //           product.title.toLowerCase().includes(lowerSearchText) ||
  //           product.description.toLowerCase().includes(lowerSearchText) ||
  //           product.category.toLowerCase().includes(lowerSearchText)
  //       );
  //       setProducts(filtered);
  //       setSeacrhNotMatched(filtered.length === 0);
  //     }
  //   };
  //   filteredProducts(searchText);
  // }, [searchText, fullProducts]);
  // useEffect(() => {
  //   const fetchData = () => {
  //     const startIndex = currentPage * itemsPerPage;
  //     const endIndex = startIndex + itemsPerPage;
  //     const productsForPage = products.slice(startIndex, endIndex);
  //     // setProductsForPage(productsForPage);
  //     setProducts(productsForPage);
  //   };
  //   fetchData();
  // }, [currentPage, itemsPerPage, products]);

  // // Function to change the current page
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // // Function to change the items per page
  // const handleItemsPerPageChange = (e) => {
  //   const newItemsPerPage = parseInt(e.target.value);
  //   setItemsPerPage(newItemsPerPage);
  //   setCurrentPage(0); // Reset to the first page when changing items per page
  // };

  return (
    <Container>
      <div className="flex items-center max-sm:flex-col max-sm:gap-4 justify-between py-6 max-[830px]:px-20">
        <h1 className="text-4xl font-bold">Our Products</h1>

        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg shadow-sm lg:hover:shadow-md border-2 transform hover:scale-x-105 transition duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="search"
            placeholder="Search your product..."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              filteredProducts(event);
            }}
          />
          {/* <span>
            <span
              className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm rotate-45 translate-y-1 `}
            ></span>
            <span
              className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm -rotate-45 translate-y-[2px] `}
            ></span>
          </span> */}
        </div>
      </div>

      <div className=" relative flex items-center font-mono justify-center">
        {fullProductsLoading ? (
          <Loader />
        ) : (
          <div className="max-sm:px-4 lg:pb-24">
            {/* sm:px-6 lg:px-2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-14 lg:my-10 max-sm:mt-10 max-sm:mb-2">
              {/* <MobileFilters sizes={sizes} colors={colors} /> */}
              {/* <div className="hidden lg:block"></div> */}
              {/* <div className="mt-6 lg:col-span-4 lg:mt-0"> */}
              {/* {products.length === 0 && <NoResults />} */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
              {/* {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))} */}
              {/* </div> */}
              {/* </div> */}
              {products?.map((product) => (
                // <ProductCard
                //   key={product.id}
                //   id={product.id}
                //   img={product.images[0]}
                //   title={product.title}
                //   price={product.price}
                //   rating={product.rating}
                //   router={router}
                //   category={product.category}
                //   product={product}
                //   addToCart={addToCart}
                // ></ProductCard>
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
            </div>
            {searchNotMatched && (
              <div>
                <h2 className="text-4xl text-center font-mono font-semibold max-sm:text-2xl">
                  No Items matched your search.....
                </h2>
              </div>
            )}
          </div>
        )}

        {/* <div className="text-center mb-8">
          <p>
            Current Page: {currentPage + 1} and items per page: {itemsPerPage}
          </p>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={
                currentPage === number
                  ? "bg-blue-400 btn btn-sm mx-2"
                  : "btn btn-sm mx-2"
              }
              // onClick={() => setCurrentPage(number)}
              // onClick={() => handlePageChange(number)}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="select select-bordered"
            value={itemsPerPage}
            // onChange={handleSelectChange}
            // onChange={handleItemsPerPageChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div> */}
      </div>
    </Container>
  );
}

export default Products;

// const Categories = () => {
//   return (
//     <div className="mb-8">
//       <h3 className="text-lg font-semibold">Categories</h3>
//       <hr className="my-4" />
//       <div className="flex flex-wrap gap-2">
//         <div className="flex items-center">
//           <Button
//             title={"All"}

//           ></Button>
//         </div>
//         <div className="flex items-center">
//           <Button
//             title={"SmartPhones"}

//           ></Button>
//         </div>
//         <div className="flex items-center">
//           <Button
//             title={"Laptops"}

//           ></Button>
//         </div>

//         <div className="flex items-center">
//           <Button
//             title={"Watches"}

//           ></Button>
//         </div>
//       </div>
//     </div>
//   );
// };

{
  /* <div className="flex items-center max-sm:flex-col lg:gap-40 max-sm:gap-4 justify-between lg:px-5 py-6">
          <h1 className="text-4xl pt-5 font-bold">Our Products</h1>
          
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg shadow-lg hover:shadow-xl hover:border-1 transform hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-gray-100 outline-none"
              type="search"
              placeholder="Search your product..."
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
                filteredProducts(event);
              }}
            />
          </div>
        </div> */
}
