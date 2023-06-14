import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
   return (
      <div>
         <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[45px] rounded-lg px-[10px] backdrop-blur-sm bg-white/50 focus:bg-white/50 relative"
         />
         <button>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500/100 absolute right-[10px] top-[13px]" />
         </button>
      </div>
   );
};

export default Search;
