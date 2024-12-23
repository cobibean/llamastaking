import { chain } from "/Users/cobibean/llamastakingdapp/src/app/chain"; // Update the path to the correct location of the chain module
import { client } from "/Users/cobibean/llamastakingdapp/src/app/client"; // Update the path to the correct location of the client module
import { getContract } from "thirdweb";
import { stakingContractABI } from "/Users/cobibean/llamastakingdapp/utils/stakingContractABI";

const nftContractAddress = "0x3d9a9BA8D73c81a754ebCCA6a2483A2F8C7a5403";
const rewardTokenContractAddress = "0x848E329d9C3FF5D3078C4670c773651155386C46";
const stakingContractAddress = "0xcCa526640EFF2bF1bb1F20e3fcb0F9F8111F9993";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain, 
    address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingContractABI,
}); 