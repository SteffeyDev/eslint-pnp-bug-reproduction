Check out the out.js files in each.  When using PNP, the main issue is that despite the Esbuild `platform=browser`, it still uses the `node` version of `uuid`'s `rng.js`, instead of the browser version `esm-browser/rng.js`.  Also, the pnp's version is significantly larger, when I would expect them to be the same output given the same input file and Esbuild settings.