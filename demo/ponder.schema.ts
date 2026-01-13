import { onchainTable } from "ponder";

export const tokenLaunchedEvent = onchainTable("token_launched_event", (t) => ({
  id: t.text().primaryKey(),
  token: t.hex().notNull(),
  creator: t.hex().notNull(),
  poolId: t.hex().notNull(),
  tokenId: t.bigint().notNull(),
  timestamp: t.integer().notNull(),
}));

export const swapEvent = onchainTable("swap_event", (t) => ({
  id: t.text().primaryKey(),
  poolId: t.hex().notNull(),
  sender: t.hex().notNull(),
  amount0: t.bigint().notNull(),
  amount1: t.bigint().notNull(),
  sqrtPriceX96: t.bigint().notNull(),
  liquidity: t.bigint().notNull(),
  tick: t.integer().notNull(),
  fee: t.integer().notNull(),
  timestamp: t.integer().notNull(),
}));
