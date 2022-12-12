import { initialise, evaluateFendWithTimeout } from "fend-wasm";

const timeout = 250; // Limit execution to 500ms

export default {
  async fetch(request: Request): Promise<Response> {
    const query = new URL(request.url).searchParams.get("q");
    if (!query)
      return new Response("Add a Fend query in the `q` query parameter.");
    try {
      initialise();
      const result = evaluateFendWithTimeout(query, timeout);
      console.log(result);
      return new Response("Hello World!");
    } catch (e) {
      return new Response(`An error occurred: ${e}`, { status: 500 });
    }
  },
};
