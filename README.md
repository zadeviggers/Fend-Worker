# fend-worker

A [Deno Deploy](https://deno.com/deploy) serverless function for executing [Fend](https://github.com/printfn/fend/) queries.

## FAQ

### Why do queries sometimes fail?

Deno Deploy limits cpu time to 10ms. This means that more complex queries might not work.

### Why not use Cloudflare Workers? They have a higher cpu time limit.

I tried using Cloudflare, but I ran into loads of issues loading the WASM file.

### Why are you storing the js/dts/wasm files for Fend in the repo? Use NPM!

I tried. Deno Deploy doesn't like using npm modules and esm.sh didn't serve the WASM file properly.
