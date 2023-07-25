"use client";
import Container from "@/app/components/Container/page";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BiError } from "react-icons/bi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <div className="min-h-screen bg-white text-gray-900 flex justify-center font-mono">
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-row-reverse justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-bold pb-4">
                Welcome back!
              </h1>
              <h2 className="text-xl xl:text-xl text-center font-semibold">
                Please enter your details
              </h2>
              <div className="w-full flex-1 mt-8">
                {/* <div className="text-center mb-4">
                  <span className="text-red-500 font-semibold">
                    {firebaseError}
                  </span>
                </div> */}
                <form
                  //   onSubmit={handleSubmit(onSubmit)}
                  className="mx-auto max-w-xs"
                >
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Email"

                    // aria-invalid={errors.email ? "true" : "false"}
                  />
                  {/* {errors?.email && (
                    <p
                      className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                      role="alert"
                    >
                      <BiError /> {errors.email.message}
                    </p>
                  )} */}
                  <div className="relative">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type={showPassword === false ? "password" : "text"}
                      placeholder="Password"
                      //   {...register("password", {
                      //     required: "Please Enter your password.",
                      //   })}
                      //   aria-invalid={errors.password ? "true" : "false"}
                    />
                    <div className="cursor-pointer text-2xl absolute right-3 top-9 z-10 ">
                      {showPassword === false ? (
                        <AiFillEye
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <AiFillEyeInvisible
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                    {/* {errors?.password && (
                      <p
                        className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                        role="alert"
                      >
                        <BiError /> {errors.password.message}
                      </p>
                    )} */}
                  </div>
                  <button className="mt-5 tracking-wide font-semibold bg-violet-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01] flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <p className="mt-6 text-base text-gray-600 text-center font-semibold">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className=" text-violet-600 font-bold"
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 text-center hidden lg:flex sm:rounded-l-lg">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('/images/Authentication.jpg')]"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
