require('esbuild').build({
  entryPoints: ['src/App.js'],
  platform: 'browser',
  bundle: true,
  outfile: 'out.js',
  plugins: [require('@yarnpkg/esbuild-plugin-pnp').pnpPlugin()]
}).catch(() => process.exit(1));
