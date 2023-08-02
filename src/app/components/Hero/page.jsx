import Image from "next/image";
import React from "react";
import heroImage from "../../../../public/images/HeroSection.png";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  return (
    <section className="w-full lg:px-32 md:px-12 px-8 py-5 bg-gray-100 font-mono">
      <div
        //   max-w-[1240px]
        className="
      mx-auto grid md:grid-cols-2 max-w-7xl"
      >
        <Image src={heroImage} className="w-[700px] mx-auto my-4" alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 font-bold ">The Best Online Store</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            One stop tech solution
          </h1>
          <p className=" text-gray-800 font-medium">
            Welcome to GizmoHub, your ultimate destination for cutting-edge
            mobile technology. Explore a diverse range of top-of-the-line
            gadgets, smartphones, accessories, and wearable tech. Embrace the
            future of seamless connectivity and endless possibilities with us
            today. Elevate your tech experience at GizmoHub!
          </p>
          <button
            onClick={() => {
              router.push("/products");
            }}
            className="bg-black text-white w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
