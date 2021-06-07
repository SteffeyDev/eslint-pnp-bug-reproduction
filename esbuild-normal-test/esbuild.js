require('esbuild').build({
  entryPoints: ['src/App.js'],
  platform: 'browser',
  bundle: true,
  outfile: 'out.js'
}).catch(() => process.exit(1));
