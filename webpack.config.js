var path = require( 'path' );
var webpack = require( 'webpack' );

var projRoot = __dirname; 
var srcRoot = path.resolve( projRoot, 'src' );
var distRoot = path.resolve( projRoot, 'dist' );

module.exports = {
    entry: './index.js'
    , output: {
        path: distRoot
        , filename: 'bundle.js'
    }
    , module: {
        rules: [
            {
                test: /\.js?$/
                , use: {
                    loader: 'babel-loader'
                    , options: {
                        presets: [ 'env' ]
                    }
                }
            }
            , {
                test: /\.s?css$/
                , use: [
                    'style-loader'
                    , {
                        loader: 'css-loader'
                        , options: {
                            modules: true
                        }
                    }
                    , 'sass-loader'
                ]
            }
        ]
    }
};
