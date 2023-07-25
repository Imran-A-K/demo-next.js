"use client";
import AuthenticatorButton from "@/app/components/AuthenticatorButton/page";
import Container from "@/app/components/Container/page";
import InputComponent from "@/app/components/InputComponent/page";
import PasswordInput from "@/app/components/PasswordInput/page";
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
                  <InputComponent
                    ComponentId="Email"
                    labelTitle="Please Enter Your Email"
                    placeHolder="Email"
                    type="Email"
                  />

                  {/* {errors?.email && (
                    <p
                      className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                      role="alert"
                    >
                      <BiError /> {errors.email.message}
                    </p>
                  )} */}
                  <PasswordInput
                    PassWordVisibleIcon={AiFillEye}
                    PassWordInvisibleIcon={AiFillEyeInvisible}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    ComponentId={"password"}
                    labelTitle={"Please Enter Your Password"}
                  />

                  <AuthenticatorButton title={"Sign In"} />
                  <p className="mt-6 text-base text-gray-600 text-center font-semibold">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className=" text-black font-bold">
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
