import { ponder } from "ponder:registry";
import { transferEvent } from "ponder:schema";

ponder.on("BaseContract:Transfer", async ({ event, context }) => {
  await context.db.insert(transferEvent).values({
    id: event.log.id,
    from: event.args.from,
    to: event.args.to,
    amount: event.args.value,
    timestamp: Number(event.block.timestamp),
  });
});
