module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    // https://www.electronforge.io/import-existing-project#setting-up-forge-manually
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      // https://www.electronforge.io/config/plugins/auto-unpack-natives
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
