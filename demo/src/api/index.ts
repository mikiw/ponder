import { db } from "ponder:api";
import schema from "ponder:schema";
import { swapEvent } from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";

const app = new Hono();

app.use("/sql/*", client({ db, schema }));

app.use("/", graphql({ db, schema }));
app.use("/graphql", graphql({ db, schema }));

app.get("/swaps/count", async (c) => {
  const events = await db.select().from(swapEvent);
  return c.json({ count: events.length });
});

export default app;
