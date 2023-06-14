import "./globals.css";
import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ethers } from "ethers";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
function MyApp({ Component, pageProps }) {
    const client = new ApolloClient({
        uri: "https://api.studio.thegraph.com/query/47856/nft/version/latest",
        cache: new InMemoryCache()
    })
    return (
        <ThirdwebProvider supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]} activeChain={Sepolia}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ThirdwebProvider>
    )
}

export default MyApp