const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const {transformer, resolver} = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  config.resolver.assetExts = resolver.assetExts.filter(ext => ext !== 'svg');
  config.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg');
  config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx', '.cjs'];

  if (!config.resolver.sourceExts.includes('svg')) {
    config.resolver.sourceExts.push('svg');
  }

  return config;
})();

/* 
metro.config.js는 프로젝트의 특정 요구사항에 맞게 
Metro Bundler 동작 방식과 환경 변수 등을 세부적으로 조정하기 위해 사용

getDefaultConfig() = 기본 Metro Bundler 설정 객체를 반환하는 역할

mergeConfig(config, [override]) = 주어진 설정(config)과 추가로 제공된 오버라이드 설정을 
                  병합하여 최종적인 구성 객체를 생성하는 역할 (기존 설정 확장 혹은 재정의)

주의할 점은 `getDefaultCOnfig()` 및 `mergeCOnfig()` 함수들이 비동기 함수이므로 
async/await 문법 또는 Promise 체인 등으로 호출되어야 한다는 것이에요! :-)
*/
