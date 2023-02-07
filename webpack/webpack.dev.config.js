/* eslint-disable import /
no--extraneous-dependencies */
import { merge }  from 'webpack-merge';
import  webpackBaseConfig  from './webpack.base.config.js';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);

let developmentConfig = () => {
  return merge([
    {
     mode: 'development',
     entry: path.join(__dirname,"src", "App.jsx"),
     output:{
      path: path.join(__dirname, "dist"),
      filename: "main.js",
      publicPath: "./",
    libraryTarget: "commonjs2"
     },
     debug: true,
     devtool: 'source-map',

     performance: {
      hints: process.env.NODE_ENV === 'development' ? "warning" : false
    },
    
      plugins: [
        new webpack.DefinePlugin({
          isDevelopment: true,
          'process.env': {
            NODE_ENV: JSON.stringify('development'),
          },
        }),
      ],
    },
  ]);
};
export default developmentConfig = () => merge(webpackBaseConfig(), developmentConfig());
