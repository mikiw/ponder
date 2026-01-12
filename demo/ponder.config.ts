import { createConfig } from "ponder";
import { http } from "viem";
import { fairLaunchFactoryV2Abi } from "./abis/fairLaunchFactoryV2Abi";

export default createConfig({
  chains: {
    base: {
      id: 8453,
      rpc: process.env.BASE_RPC_URL,
    },
  },
  contracts: {
    FairLaunchFactoryV2: {
      chain: "base",
      abi: fairLaunchFactoryV2Abi,
      address: "0x3B9dFa40bea19f24f97d0c20fB85ea15bBE12330",
      startBlock: 34364302,
    },
  },
});
