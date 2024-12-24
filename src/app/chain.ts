import { defineChain } from "thirdweb";

export const chain = defineChain({
    chainId: 1088,
    rpc: ["https://1088.rpc.thirdweb.com/${387000442d483230ddd1202aaba1b092}"],
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
