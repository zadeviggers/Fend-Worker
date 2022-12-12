import initialise, { evaluateFendWithTimeout } from "../lib/fend/fend_wasm.js";

import { serve } from "https://deno.land/std@0.167.0/http/server.ts";

const timeout = 8; // Limit execution to 8ms since deno deploy has 10ms limit for total execution time.

await initialise();

serve((request: Request) => {
  const query = new URL(request.url).searchParams.get("q");
  if (!query) {
    return new Response("Add a Fend query in the `q` query parameter.");
  }
  try {
    const result = evaluateFendWithTimeout(query, timeout);
    return new Response(result);
  } catch (e) {
    console.error(e);
    return new Response(`An error occurred: ${e}`, { status: 500 });
  }
});
