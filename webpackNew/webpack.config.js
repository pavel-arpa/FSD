
// БЛОК ОПИСАНИЯ КОНСТАНТ
const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimazeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

// Путь через dirname
const PATHS = {
   src: path.join(__dirname, './src'),
   dist: path.join(__dirname, './dist'),
   assets: 'assets/'
 }

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

// Константы для PUG 
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

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
      analytics: './analytics.js'
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
      // ...PAGES.map(page => new HtmlWebpackPlugin(
      //    {
      //       template: `${PAGES_DIR}/${page}`,
      //       filename: `./${page.replace(/\.pug/,'.html')}`,
      //       minify: {
      //          collapseWhitespace: isProd
      //       }
      //    }
      //  )),
      // new HtmlWebpackPlugin({
      //    // template: `${PAGES_DIR}/index.pug`,
      //    template: './src/pug/pages/index.pug',
      //    filename: './index.html',
      //    inject: true
      // }),
      new HTMLWebpackPlugin({
         template: './pug/pages/index.pug',
         minify: {
            collapseWhitespace: isProd
         }
      }),
      new HtmlWebpackPugPlugin(),
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
     })
   ],
   module: {
      rules: [
         {
            test: /\.pug$/,
            loader: 'pug-loader'
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
            test: /\.xml$/,
            use: ['xml-loader']
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