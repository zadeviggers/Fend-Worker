# fend-worker

A [Deno Deploy](https://deno.com/deploy) serverless function for executing [Fend](https://github.com/printfn/fend/) queries.

## How to use

1. In Firefox, install [this extention]() and create a new custom search engine.
2. Set the _Search URL_ to `https://fend.deno.dev/?q=%s`
  - If you don't want the `= ` at the start of every result, use this url instead: `https://fend.deno.dev/?no-equals=1&q=%s`
3. Under _Advanced Options_ set the _Suggestion URL_ to `https://fend.deno.dev/suggestions?q={searchTerms}`
4. If you want the logo, set the logo URL to `https://printfn.github.io/fend/fend-icon-128.png`
5. Choose a name - it should probably be `Fend`
6. Click the button to add the search engine
7. Follow the instructions to add it
8. In `about:preferences#search`, add a shortcut for Fend in the search bar - I used `!f`. This means you can type `!f (6*9+6+9)kg to lb` to automatically search Fend without clicking the icon.

## FAQ

### Why do queries sometimes fail?

Deno Deploy limits cpu time to 10ms. This means that more complex queries might not work.

### Why not use Cloudflare Workers? They have a higher cpu time limit.

I tried using Cloudflare, but I ran into loads of issues loading the WASM file.

### Why are you storing the js/dts/wasm files for Fend in the repo? Use NPM!

I tried. Deno Deploy doesn't like using npm modules and esm.sh didn't serve the WASM file properly.
