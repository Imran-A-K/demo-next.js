"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Hero from "../components/Hero/page";

function Page() {
  const pathName = usePathname();
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Page;
