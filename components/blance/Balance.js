import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import NotLoginBalance from "./NotLoginBalance";

const Balance = () => {
   const [userBalance, setBalance] = useState(null);
   const address = useAddress();
   if (!address) return <NotLoginBalance />;
   const provider = ethers.getDefaultProvider("https://rpc.ankr.com/eth_sepolia")
   provider.getBalance(address).then((balance) => {
 // convert a currency unit from wei to ether
   const balanceInEth = ethers.utils.formatEther(balance)

   setBalance(Number(balanceInEth).toFixed(3));
})
   return (
      <div className={`p-4 h-[240px] bg-gradient-to-r to-purple-500 from-pink-500 rounded-lg flex-1 shadow-2xl W-full mr-5`}>
         <h2 className="text-[35px] font-semibold">Hello! </h2>
         {/* <third> */}
            <div className="flex">
               <span className="text-[15px] text-gray-200">
                  {address}
               </span>
               <DocumentDuplicateIcon className="h-4 w-4 text-gray-700" />
            </div>
         {/* </third> */}
         <p className="font-bold text-[30px]">Your Balance: {userBalance} ETH</p>
      </div>
   );
};

export default Balance;
