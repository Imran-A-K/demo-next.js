"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function Page() {
  const pathName = usePathname();
  return <div>WithLayout page home page .. {pathName}</div>;
}

export default Page;
