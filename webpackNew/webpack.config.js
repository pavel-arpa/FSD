
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
const cssLoaders = extra => {
   const loaders = [
      {
         loader: MiniCssExtractPlugin.loader,
         options: {
            hmr: isDev,
            reloadAll: true,
         },
      }, 
      'css-loader'
   ]

   if (extra) {
      loaders.push(extra)
   }
   return loaders
}

// ---------------------------------- ++++ ----------------------------------



module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   entry: {
      main: ['@babel/polyfill', './index.js'],
      uiKit: ['@babel/polyfill', './uikit.js']
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
   optimization: optimization(),
   devServer: {
      port: 4200,
      hot: isDev
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './pug/pages/index.pug',
         ckunks: ['main']
      }),
      new HtmlWebpackPlugin({
         filename: 'uikit.html',
         template: './pug/pages/uikit.pug',
         chunks: ['uiKit']
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
         patterns: [
             {
                 from: path.resolve(__dirname, "src/favicon.ico"),
                 to: path.resolve(__dirname, "dist")
             },
         ]
      }),
      new MiniCssExtractPlugin({
         filename: filename('css')
      }),
      new LiveReloadPlugin({
         appendScriptTag: true
      })
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
            test: /\.css$/,
            use: cssLoaders()
         },
         {
            test: /\.(sass|scss)$/,
            use: cssLoaders('sass-loader')
         },
         {
            test: /\.(png|jpg|svg|gif)$/,
            use: ['file-loader']
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
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