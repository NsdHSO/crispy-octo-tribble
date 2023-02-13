module.exports = {
  name: 'frame',
  filename: "remoteEntry.js",
  exposes: {
    './Module': 'apps/frame/src/app/remote-entry/entry.module.ts',
  },
  remotes: [
   [ 'driver', 'https://stalwart-mochi-0d48f5.netlify.app/remoteEntry.mjs'],
  ],
};
