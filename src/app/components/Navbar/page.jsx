"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useGetCart, useGetUser } from "@/app/hooks/api/data";
import Image from "next/image";
import dummyUser from "/public/images/dummyUser.png";
import logo from "/public/images/logo.png";

const CustomLink = ({ href, title, className = "" }) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-gray-900
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
      ${pathName === href ? "w-full max-md:bg-white" : "w-0"}
      dark:bg-white
       `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-gray-900
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
      ${pathName === href ? "w-full max-md:bg-white" : "w-0"} 
      dark:bg-white
       `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
function Navbar({ sideBarIsOpen, setSideBarIsOpen }) {
  // console.log(sideBarIsOpen);
  const [isOpen, setIsOpen] = useState(false);
  // const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  // console.log(isOpen);
  const pathName = usePathname();
  // console.log(pathName !== "/");
  const [cart, cartLoading] = useGetCart();
  const [user, userLoading, reloadUser] = useGetUser();
  // console.log(user);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`${
        pathName !== "/" && "bg-blend-lighten border-b-stone-200"
      } bg-gray-100 flex  items-center place-items-center justify-between w-full max-w-full lg:px-32 md:px-12 px-8 sticky top-0 z-20 font-bold text-xl font-mono `}
    >
      <nav className="lg:pl-10 py-2 relative">
        <Link href={"/"}>
          <Image src={logo} height={80} width={130} alt="logo" className="" />
        </Link>
      </nav>
      {/* <nav className="hidden lg:flex items-center gap-x-8">
        <CustomLink href={"/"} title={"Home"} />
        <CustomLink href={"/products"} title={"Products"} />
      </nav> */}
      <nav className="flex items-center justify-between gap-x-5">
        <CustomLink href={"/"} title={"Home"} className="max-md:hidden" />
        <CustomLink
          href={"/products"}
          title={"Products"}
          className="max-md:hidden"
        />
        <button
          onClick={() => {
            setSideBarIsOpen(true);
          }}
          className="flex max-lg:hidden items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {!cartLoading && cart?.length ? (
            <span className="flex absolute -mt-9 ml-4">
              {/* <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span> */}
              <span
                className={`absolute  rounded-full h-4 w-4 text-white text-xs text-center bg-gray-900 ${
                  cart.length > 9 && "w-7"
                }`}
              >
                {cart?.length}
              </span>
            </span>
          ) : null}
        </button>
        {/* <Link className="flex max-lg:hidden mr-6 items-center" href={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {!cartLoading && cart?.length ? (
            <span className="flex absolute -mt-9 ml-4">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75">not needed</span>
              <span
                className={`absolute  rounded-full h-4 w-4 text-white text-xs text-center bg-gray-900 ${
                  cart.length > 9 && "w-7"
                }`}
              >
                {cart?.length}
              </span>
            </span>
          ) : null}
        </Link> */}

        <button
          className="lg:hidden flex items-center cursor-pointer"
          onClick={() => {
            setSideBarIsOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {!cartLoading && cart?.length ? (
            <span className="flex absolute -mt-9 ml-4">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span
                className={`absolute  rounded-full h-4 w-4 text-white text-xs text-center bg-gray-900 ${
                  cart.length > 9 && "w-7"
                }`}
              >
                {cart?.length}
              </span>
            </span>
          ) : null}
          {/* <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span> */}
        </button>
        {user && user.email ? (
          <>
            <Image
              src={user.userImage ?? dummyUser}
              height={40}
              width={40}
              alt="current user image"
              className="rounded-full border-2"
              priority
            />
            <button
              onClick={() => {
                localStorage.removeItem("loggedUser");
                reloadUser();
              }}
              className="cursor-pointer md:block hidden mx-auto bg-black hover:bg-gray-700  text-white rounded-lg px-3 py-2 font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <Link className="hidden md:block" href="/login">
            {/* focus:bg-indigo-700 */}
            <button className="block mx-auto bg-black hover:bg-gray-700  text-white rounded-lg px-3 py-2 font-medium">
              Login
            </button>
          </Link>
        )}

        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-1"
            }`}
          ></span>
          <span
            className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </nav>
      {isOpen ? (
        <div className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 dark:bg-white/75 rounded-lg backdrop-blur py-32">
          <nav className="flex items-center gap-3 flex-col justify-center">
            <span onClick={() => setIsOpen(!isOpen)}>
              <CustomMobileLink href="/" title="Home" className="text-white" />
            </span>
            <span onClick={() => setIsOpen(!isOpen)}>
              <CustomMobileLink
                href="/products"
                title="Projects"
                className="text-white"
              />
            </span>
            {user && user.email ? (
              <>
                <button
                  onClick={() => {
                    localStorage.removeItem("loggedUser");
                    reloadUser();
                    setIsOpen(!isOpen);
                  }}
                  className="cursor-pointer mx-auto bg-transparent hover:bg-gray-700  text-white rounded-lg px-3 py-2 font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className="hidden md:block"
                href="/login"
              >
                {/* focus:bg-indigo-700 */}
                <button className="block mx-auto bg-black hover:bg-gray-700  text-white rounded-lg px-3 py-2 font-semibold">
                  Login
                </button>
              </Link>
            )}
            {/* <Link className="" href="/login" onClick={() => setIsOpen(!isOpen)}>
              <button className="block mx-auto bg-white hover:bg-indigo-700 focus:bg-indigo-700 text-black rounded-lg px-3 py-2 font-semibold">
                Login
              </button>
            </Link> */}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;

{
  /* <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                
                Logo Here.
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Homegchg
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Catagory
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 items-center">
                <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div> */
}

{
  /* <Link className="flex max-lg:hidden mr-6 items-center" href={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {!cartLoading && cart?.length ? (
            <span className="flex absolute -mt-9 ml-4">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75">
                not needed
              </span>
              <span
                className={`absolute  rounded-full h-4 w-4 text-white text-xs text-center bg-gray-900 ${
                  cart.length > 9 && "w-7"
                }`}
              >
                {cart?.length}
              </span>
            </span>
          ) : null}
        </Link> */
}
