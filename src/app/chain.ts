import { defineChain } from "thirdweb";

export const chain = defineChain({
    chainId: 1088,
    rpc: ["https://andromeda.metis.io/?owner=1088"], // Official Metis RPC URL
    name: "Metis Andromeda",
    chain: "METIS",
    nativeCurrency: {
        name: "Metis",
        symbol: "METIS",
        decimals: 18,
    },
    shortName: "metis",
    slug: "metis-andromeda",
    testnet: false,
    explorers: [
        {
            name: "blockscout",
            url: "https://andromeda-explorer.metis.io",
            standard: "EIP3091",
        },
    ],
});
