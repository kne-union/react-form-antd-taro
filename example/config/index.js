const fs = require('fs');
const projectAlias = require('./alias');

const alias = {
    'lodash': '@kne/lodash-wechat', 'components-doc': require.resolve('../components-doc.js')
};

if (fs.existsSync("../../dist/index.css")) {
    alias["@kne/react-form-antd-taro/dist/index.css"] = require.resolve("../../dist/index.css");
}

if (fs.existsSync("../../dist/index.modern.js")) {
    alias["@kne/react-form-antd-taro"] = require.resolve("../../dist/index.modern.js");
}


const config = {
    projectName: 'example',
    date: '2023-6-29',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2, 750: 1, 828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: ['@tarojs/plugin-http'],
    defineConstants: {},
    alias: Object.assign({}, alias, projectAlias),
    copy: {
        patterns: [], options: {}
    },
    framework: 'react',
    compiler: 'webpack5',
    cache: {
        enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
        postcss: {
            pxtransform: {
                enable: true, config: {}
            }, url: {
                enable: true, config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            }, cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    h5: {
        publicPath: '/', staticDirectory: 'static', postcss: {
            autoprefixer: {
                enable: true, config: {}
            }, cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    rn: {
        appName: 'example', postcss: {
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
            }
        }
    }
}

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
