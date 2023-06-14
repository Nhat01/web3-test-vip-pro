"use client";

import Image from "next/image";
import Link from "next/link";
function Logo() {
   return (
      <Link href="/">
         <Image
            alt="Logo"
            className="mx-logo-space ml-0"
            width="50"
            height="50"
            src="/images/logoviphd.png"
         />
      </Link>
   );
}

export default Logo;
