module.exports = {
  name: 'frame',
  filename: "remoteEntry.js",

  exposes: {
    './Module': 'frame/src/app/remote-entry/entry.module.ts',
  },
};
