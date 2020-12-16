
// БЛОК ОПИСАНИЯ КОНСТАНТ
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimazeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');


// Определение мода: разработка или продакшн
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

optimization = () => {
   const config = {
      splitChunks: {
         chunks: 'all'
      }
   }
    if (isProd) {
       config.minimizer = [
          new OptimazeCssAssetsWebpackPlugin(),
          new TerserWebpackPlugin()
       ]
    }
   return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`


// Функция автодобавления кода для cssLoaders 
// const cssLoaders = extra => {
//    const loaders = [
//       {
//          loader: MiniCssExtractPlugin.loader,
//          options: {
//             hmr: isDev,
//             reloadAll: true,
//          },
//       }, 
//       'css-loader'
//    ]

//    if (extra) {
//       loaders.push(extra)
//    }
//    return loaders
// }

// ---------------------------------- ++++ ----------------------------------



module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   entry: {
      main: ['@babel/polyfill', './index.js'],
   },
   output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist')
   },
   resolve: {
      extensions: ['.js', 'json', '.png'],
      alias: {
         '@models': path.resolve(__dirname, 'src/models'),
         '@': path.resolve(__dirname, 'src'),
      },
   },
   // optimization: optimization(),
   devServer: {
      port: 4200,
      hot: isDev
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './pug/pages/index.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'colors-and-type.html',
         template: './pug/pages/uikit/colors-and-type.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'form-elements.html',
         template: './pug/pages/uikit/form-elements.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'cards.html',
         template: './pug/pages/uikit/cards.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'headers-and-footers.html',
         template: './pug/pages/uikit/headers-and-footers.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'filter-page.html',
         template: './pug/pages/filter-page.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'landing-page.html',
         template: './pug/pages/landing-page.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'reg-signin-page.html',
         template: './pug/pages/reg-signin-page.pug',
      }),
      new HtmlWebpackPlugin({
         filename: 'room-page.html',
         template: './pug/pages/room-page.pug',
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src/favicon.ico'),
               to: path.resolve(__dirname, 'dist/assets-img')
            },
            {
               from: path.resolve(__dirname, './src/pug/includes/components/feedback/accounts'),
               to: path.resolve(__dirname, 'dist/img')
            },
            {
              from: path.resolve(__dirname, './src/pug/includes/components/room-card/images'),
              to: path.resolve(__dirname, 'dist/rooms-images')
            },
            {
               from: path.resolve(__dirname, './src/assets/img-for-page-bg'),
               to: path.resolve(__dirname, 'dist/img-for-page-bg')
            },
         ]
      }),
      new MiniCssExtractPlugin({
         filename: filename('css')
      }),
      new LiveReloadPlugin({
         appendScriptTag: true
      }),
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
     }),
   ],
   module: {
      rules: [
         {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
               pretty: isDev
            }
         },
         {
            test: /\.(sass|scss|css)$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     hmr: isDev,
                     reloadAll: true,
                  },
               }, 
               {
                  loader: 'css-loader'
               }, 
               {
                  loader: 'resolve-url-loader',
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                   }
               }
               
            ]
         },
         {
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               outputPath: 'static/fonts-and-img/',
            },
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               outputPath: 'static/fonts-and-img/',
            },
         },
         { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-env'
                  ],
                  plugins: [
                     '@babel/plugin-proposal-class-properties'
                  ]
               }
            }
         }
      ]
   }
}