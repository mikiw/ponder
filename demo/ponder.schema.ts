import { onchainTable } from "ponder";

export const tokenLaunchedEvent = onchainTable("token_launched_event", (t) => ({
  id: t.text().primaryKey(),
  token: t.hex().notNull(),
  creator: t.hex().notNull(),
  poolId: t.hex().notNull(),
  tokenId: t.bigint().notNull(),
  timestamp: t.integer().notNull(),
}));
