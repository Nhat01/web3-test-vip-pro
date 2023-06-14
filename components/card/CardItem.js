import Image from "next/image";
import { MediaRenderer } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const CardItem = ({ nameAuthor, uri, nameCard, price }) => {
   const [imageURL, setImage] = useState("");
   const [title, setTitle] = useState("");
   const [description, setDes] = useState("");
   const [eth, setETH] = useState("");
   useEffect(() => {
      async function getResponse(url) {
         if (!url.startsWith("ipfs://")) throw new Error("Not an IPFS url");
         const cid = url.substring(7);
         const newURL = `https://ipfs.io/ipfs/${cid}`;
         const response = await fetch(newURL).then(function (result) {
            return result.json();
         });
         console.log(response);
         const image = response.image;
         const title = response.title;
         const des = response.description;

         setImage(image);
         setTitle(title);
         setDes(des);
         setETH(ethers.utils.formatEther(price));
      }
      getResponse(uri);
   }, []);
   return (
      <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
         <div className="relative h-72">
            <MediaRenderer className="rounded-t-lg" src={imageURL} alt="" />
         </div>
         <div className="px-4 py-2 flex-1">
            <div className="text-[10px] font-light mb-2">
               <span>Thể loại - chuyên mục</span>
               <p className="mb-1">{nameAuthor}</p>
            </div>
            <h5 className="uppercase font-bold text-xl mb-2">{nameCard}</h5>
            <p className="text-[10px] font-light">
               Giá khởi điểm:
               <span className="text-green-700 font-bold ml-1">{eth} ETH</span>
            </p>
            <span className="text-[8px] font-light block">
               @Crypto
               <span className="float-right text-[#8C8C8C] font-bold">
                  Lost Soid For: 9.99 ETH
               </span>
            </span>
         </div>
      </div>
   );
};

export default CardItem;
