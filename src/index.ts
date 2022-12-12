import initialise, { evaluateFendWithTimeout } from "../lib/fend/fend_wasm.js";

import { serve } from "https://deno.land/std@0.167.0/http/server.ts";

const timeout = 8; // Limit execution to 8ms since deno deploy has 10ms limit for total execution time.

await initialise();

serve((request: Request) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  if (!query) {
    return new Response("Add a Fend query in the `q` query parameter.");
  }
  try {
    const result = evaluateFendWithTimeout(query, timeout);
    if (result === "Error: interrupted")
      return new Response(
        "Request took too long. Try again with a simpler query.",
        { status: 400 }
      );
    else if (result.startsWith("Error"))
      return new Response(result, { status: 500 });

    // OpenSearch suggestions
    // Read more here: https://udn.realityripple.com/docs/Archive/Add-ons/Supporting_search_suggestions_in_search_plugins#Implementing_search_suggestion_support_on_the_server
    if (url.pathname.startsWith("/suggestions"))
      return new Response(JSON.stringify([query, [`= ${result}`]]), {
        headers: { "Content-Type": "application/x-suggestions+json" },
      });

    return new Response(result);
  } catch (e) {
    console.error(e);
    return new Response(`An error occurred: ${e}`, { status: 500 });
  }
});
