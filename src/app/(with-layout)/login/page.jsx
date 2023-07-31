"use client";
import AuthenticatorButton from "@/app/components/AuthenticatorButton/page";
import Container from "@/app/components/Container/page";
import FormError from "@/app/components/FormError/page";
import InputComponent from "@/app/components/InputComponent/page";
import PasswordInput from "@/app/components/PasswordInput/page";
import { loginSchema } from "@/app/components/schema/page";
import { verifyUser } from "@/app/hooks/authenticationFunctions/page";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BiError } from "react-icons/bi";
// import Swal from "sweetalert2";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const saveSettings = (settings, userVerification) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = settings;

        if (isSuccess) {
          resolve(settings);
        } else {
          reject(new Error(userVerification));
        }
      }, 1000);
    });
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        // console.log(values);
        const userVerification = verifyUser({ ...values });
        try {
          if (userVerification === "User Verified") {
            // toast.success(register);
            await toast.promise(saveSettings(true, userVerification), {
              loading: "Verifying User...",
              success: <b>{userVerification}</b>,
              error: <b>Could not save.</b>,
            });

            const userIntendedDestination = localStorage.getItem(
              "userIntendedDestination"
            );
            router.push(userIntendedDestination ?? "/");
            localStorage.removeItem("userIntendedDestination");
            // action.resetForm();
          } else {
            // toast.error(register);
            await toast.promise(saveSettings(false, userVerification), {
              loading: "Veryfying User...",
              success: <b>{userVerification}</b>,
              error: <b>{userVerification}</b>,
            });
          }
        } catch (error) {
          // console.log(error);
          // return;
        }
        // action.resetForm();
      },
    });
  return (
    <Container>
      <div className="min-h-screen bg-white text-gray-900 flex justify-center font-mono">
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white md:shadow-md md:border-2 border-opacity-50 md:rounded-lg flex flex-row-reverse justify-center flex-1">
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
                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                  <InputComponent
                    ComponentId="Email"
                    labelTitle="Email"
                    placeHolder="Ex: email@domain.com"
                    type="Email"
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <FormError ErrorImg={BiError}>{errors.email}</FormError>
                  ) : null}

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
                    labelTitle={"Password"}
                    placeholder={"Please Enter Your Password"}
                    name="password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <FormError ErrorImg={BiError}>{errors.password}</FormError>
                  ) : null}

                  <AuthenticatorButton type={"submit"} title={"Sign In"} />
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
          <div className="flex-1 bg-transparent text-center hidden lg:flex sm:rounded-l-lg">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('/images/Authentication.jpg')]"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
