"use client";
import AuthenticatorButton from "@/app/components/AuthenticatorButton/page";
import Container from "@/app/components/Container/page";
import ImageUpload from "@/app/components/ImageUpload/page";
import InputComponent from "@/app/components/InputComponent/page";
import PasswordInput from "@/app/components/PasswordInput/page";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import dummyUser from "../../../../public/images/dummyUser.png";
import Image from "next/image";
import FormError from "@/app/components/FormError/page";
import { signUpSchema } from "@/app/components/schema/page";
import { useFormik } from "formik";
import { registerUser } from "@/app/hooks/authenticationFunctions/page";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
// import Swal from "sweetalert2";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(dummyUser);
  const [user, userLoading, reloadUser] = useGetUser();
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const saveSettings = (settings, register) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = settings;

        if (isSuccess) {
          resolve(settings);
        } else {
          reject(new Error(register));
        }
      }, 1000);
    });
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        // console.log({ ...values, userImage: selectedImage });
        const register = registerUser({ ...values, userImage: selectedImage });
        // console.log(register);
        // console.log(event.target.uploadedImage);
        try {
          if (register === "User created successfully") {
            // toast.success(register);
            await toast.promise(saveSettings(true, register), {
              loading: "Registering User...",
              success: <b>{register}</b>,
              error: <b>Could not save.</b>,
            });
            // const inputElement = document.getElementById("uploadedImage");
            // const newInputElement = document.createElement("input");
            // newInputElement.type = "file";
            // newInputElement.id = "uploadedImage";

            // inputElement.parentNode.replaceChild(newInputElement, inputElement);
            // setSelectedImage(dummyUser);
            // console.log(event.target.uploadedImage);
            const userIntendedDestination = localStorage.getItem(
              "userIntendedDestination"
            );
            router.push(userIntendedDestination ?? "/");
            localStorage.removeItem("userIntendedDestination");
            reloadUser();
            // action.resetForm();
          } else {
            // toast.error(register);
            await toast.promise(saveSettings(false, register), {
              loading: "Registering User...",
              success: <b>{register}</b>,
              error: <b>{register}</b>,
            });
          }
        } catch (error) {
          // console.log(error);
          // return;
        }

        // setSelectedImage(dummyUser);
        // action.resetForm();
      },
    });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // console.log(file.name);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  // console.log(errors);
  return (
    <Container>
      <div className="min-h-screen bg-white text-gray-900 flex justify-center font-mono">
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white md:shadow-md md:border-2 border-opacity-50 md:rounded-lg flex flex-row-reverse justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              {/* <h1 className="text-2xl xl:text-3xl font-bold pb-4">Welcome!</h1> */}
              <h2 className="text-xl xl:text-xl text-center font-semibold">
                Sign Up
              </h2>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center mb-4">
                  {/* <span className="text-red-500 font-semibold">
                    {firebaseError}
                  </span> */}
                  <Image
                    src={selectedImage}
                    height={100}
                    width={100}
                    alt="user image"
                    className="h-24 w-24 border-2 rounded-full"
                  />
                </div>
                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="mx-auto max-w-xs"
                >
                  <InputComponent
                    ComponentId="Name"
                    labelTitle="Name"
                    placeHolder="Ex: Imran Khan"
                    type="text"
                    name="name"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                    <FormError ErrorImg={BiError}>{errors.name}</FormError>
                  ) : null}
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
                  <PasswordInput
                    PassWordVisibleIcon={AiFillEye}
                    PassWordInvisibleIcon={AiFillEyeInvisible}
                    showPassword={showPassConfirm}
                    setShowPassword={setShowPassConfirm}
                    ComponentId={"showPassword"}
                    labelTitle={"Confirm Password"}
                    placeholder={"Confirm Your Password"}
                    name="confirm_password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.confirm_password}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <FormError ErrorImg={BiError}>
                      {errors.confirm_password}
                    </FormError>
                  ) : null}
                  <ImageUpload
                    ComponentId={"uploadedImage"}
                    labelTitle={"Please Select an Image"}
                    placeHolder={"Please Upload an image"}
                    type={"file"}
                    handleImageChange={handleImageChange}
                  />

                  <AuthenticatorButton type={"submit"} title={"Register"} />
                  <p className="mt-6 text-base text-gray-600 text-center font-semibold">
                    Already have an account?{" "}
                    <Link href="/login" className=" text-black font-bold">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-transparent text-center hidden lg:flex sm:rounded-l-lg">
            <div className="m-12 xl:m-16 w-full bg-auto bg-center bg-no-repeat bg-[url('/images/Authentication.jpg')]"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Register;
