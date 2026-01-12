import { createConfig } from "ponder";
import { http } from "viem";
import { erc20ABI } from "./abis/erc20ABI";

export default createConfig({
  chains: {
    base: {
      id: 8453,
      rpc: process.env.BASE_RPC_URL,
    },
  },
  contracts: {
    BaseContract: {
      chain: "base",
      abi: erc20ABI,
      address: "0x3B9dFa40bea19f24f97d0c20fB85ea15bBE12330",
      startBlock: 34364302,
    },
  },
});
