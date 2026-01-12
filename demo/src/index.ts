import { ponder } from "ponder:registry";
import { tokenLaunchedEvent } from "ponder:schema";

ponder.on("FairLaunchFactoryV2:TokenLaunched", async ({ event, context }) => {
  await context.db.insert(tokenLaunchedEvent).values({
    id: event.log.id,
    token: event.args.token,
    creator: event.args.creator,
    poolId: event.args.poolId,
    tokenId: event.args.tokenId,
    timestamp: Number(event.block.timestamp),
  });
});
