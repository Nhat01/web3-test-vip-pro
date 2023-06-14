import Image from "next/image";
import Link from "next/link"
const Info = () => {
   return (
      <div className="md:flex w-full h-[240px] items-center shadow-2xl">
         <div className="bg-white flex-1 rounded-lg md:flex relative h-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="md:w-[55%] p-5 pb-0 z-[2] flex flex-col h-full">
               <h1 className="pb-[15px] text-2xl lg:text-[35px] font-bold text-[#220273]">
                  Create, Explore, Collect Digital Art NFTs
               </h1>
               <p className="md:text-[20px] text-[18px] font-semibold text-yellow-50">
                  Build Your Future With Cryto
               </p>
               <div className=" flex-1 flex items-center justify-center">
                  <Link href="/Create">
                     <div
                        className="py-3 px-7 bg-[#5EE6EB] rounded-xl mr-8 text-sm font-bold hover:bg-[#fca5f1] hover:text-black transition-all duration-300"
                     >
                        Create NFTs
                     </div>
                  </Link>
               </div>
            </div>
            <div className="flex-1 relative hidden md:block z-10">
               <Image
                  src="/images/dfrgds.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="image"
                  className="absolute w-[170%] h-[120%] top-[-49px] right-[-96px] z-[1] max-w-none "
               />
            </div>
         </div>
      </div>
   );
};

export default Info;
