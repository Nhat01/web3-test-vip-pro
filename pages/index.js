import Info from "../components/info/Info";
import Layout from "../components/Layout";
import Balance from "../components/blance/Balance";
import CategoryList from "@/components/category/CategoryList";
import CategoryAll from "@/components/category/CategoryAll";
// import Sidebar from "@/components/sidebar/Sidebar"
import CardDiscount from "@/components/card/CardDiscount";
import { gql, useQuery } from "@apollo/client";
import CardItem from "@/components/card/CardItem";
import Spinner from "@/components/spinner/Spinner";

const GET_LASTEST = gql`
   query {
      nfts(
         where: { to: "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D" }
         orderBy: id
         orderDirection: desc
      ) {
         id
         from
         to
         tokenURI
         price
      }
   }
`;

export default function MyApp() {
   const { data, error, loading } = useQuery(GET_LASTEST);
   if (loading) return <Spinner />;
   return (
      <Layout>
         <div className="grid lg:grid-cols-[14%_auto_30%] md:grid-cols-[auto_17rem] grid-rows-[auto_auto_auto] gap-size-space max-w-[90rem] mx-auto px-size-space relative mt-[10px]">
            <div className="mt-[10px] bg-white rounded-lg lg:col-start-2 md:col-start-1">
               <Info />
            </div>
            <div className="md:mt-[10px] rounded-lg items-center md:flex hidden mr-2">
               <Balance />
            </div>
            <div className="lg:col-start-2 md:col-start-1 flex justify-between">
               <CategoryList />
            </div>
            <div className=" flex justify-between">{/* <CategoryAll /> */}</div>
            {/* <div className="lg:col-start-2 md:col-start-1 grid md:grid-cols-3 grid-cols-2 gap-size-space">
                  {cards?.map(({ nameAuthor, imageSrc, nameCard, price }) => (
                     <CardItem
                        nameAuthor={nameAuthor}
                        nameCard={nameCard}
                        price={price}
                        imageSrc={imageSrc}
                     />
                  ))}
               </div> */}

            <div className="lg:col-start-2 md:col-start-1 grid md:grid-cols-3 grid-cols-2 gap-size-space">
               {data.nfts.map((nft) => (
                  <CardItem
                     key={nft.id}
                     nameAuthor={nft.from}
                     price={nft.price}
                     uri={nft.tokenURI}
                  />
               ))}
            </div>
            <div className=" md:grid grid-cols-2 h-min rounded-lg gap-size-space md:gap-2 hidden">
               <CardDiscount />
               <CardDiscount />
            </div>
         </div>
      </Layout>
   );
}
