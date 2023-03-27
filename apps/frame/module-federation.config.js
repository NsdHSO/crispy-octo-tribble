module.exports = {
  name: 'frame',
  filename: "remoteEntry.js",
  exposes: {
    './Module': 'apps/frame/src/app/remote-entry/entry.module.ts',
  },
  remotes: [
   [ 'driver', 'https://driver-tms.netlify.app/remoteEntry.mjs'],
  ],
};
