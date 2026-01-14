import { ponder } from "ponder:registry";
import { swapEvent, tokenLaunchedEvent } from "ponder:schema";
import { eq } from "ponder";

ponder.on("FairLaunchFactoryV2:TokenLaunched", async ({ event, context }) => {
  await context.db.insert(tokenLaunchedEvent).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    token: event.args.token,
    creator: event.args.creator,
    poolId: event.args.poolId,
    tokenId: event.args.tokenId,
    timestamp: Number(event.block.timestamp),
  });
});

ponder.on("PoolManager:Swap", async ({ event, context }) => {
  const pool = await context.db.sql
    .select({ id: tokenLaunchedEvent.id })
    .from(tokenLaunchedEvent)
    .where(eq(tokenLaunchedEvent.poolId, event.args.id))
    .limit(1);

  if (pool.length === 0) return;

  await context.db.insert(swapEvent).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    poolId: event.args.id,
    sender: event.args.sender,
    amount0: event.args.amount0,
    amount1: event.args.amount1,
    sqrtPriceX96: event.args.sqrtPriceX96,
    liquidity: event.args.liquidity,
    tick: event.args.tick,
    fee: event.args.fee,
    timestamp: Number(event.block.timestamp),
  });
});
