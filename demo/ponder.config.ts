import { createConfig } from "ponder";
import { http } from "viem";
import { fairLaunchFactoryV2Abi } from "./abis/fairLaunchFactoryV2Abi";
import { poolManagerAbi } from "./abis/poolManagerAbi";
import { positionManagerAbi } from "./abis/positionManagerAbi";

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
    PoolManager: {
      chain: "base",
      abi: poolManagerAbi,
      address: "0x498581fF718922c3f8e6A244956aF099B2652b2b",
      startBlock: 34364302,
    },
    PositionManager: {
      chain: "base",
      abi: positionManagerAbi,
      address: "0x7c5f5a4bbd8fd63184577525326123b519429bdc",
      startBlock: 34364302,
    },
  },
});
