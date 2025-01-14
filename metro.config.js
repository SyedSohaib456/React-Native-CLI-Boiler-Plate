const path = require('path');
const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      alias: {
        '~core': path.resolve(__dirname, 'src/core'),
        '~components': path.resolve(__dirname, 'src/core/components'),
        '~theme': path.resolve(__dirname, 'src/theme'),
        '~app': path.resolve(__dirname, 'src/app'),
        '~hooks': path.resolve(__dirname, 'src/core/hooks'),
        '~zustand': path.resolve(__dirname, 'src/core/zustand'),
        '~assets': path.resolve(__dirname, 'assets'),
        '~screens': path.resolve(__dirname, 'src/app/screens'),
      },
    },
  };
})();