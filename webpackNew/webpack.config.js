
// БЛОК ОПИСАНИЯ КОНСТАНТ
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimazeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')


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

// Функция динамической обработки html файлов из папки pages (для шапки и футера два отделных файла и
// в них должны быть прописаны все скрипты)
function generateHtmlPlugins(templateDir) {
   const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
   return templateFiles.map(item => {
     const parts = item.split('.');
     const name = parts[0];
     const extension = parts[1];
     return new HtmlWebpackPlugin({
       filename: `${name}.html`,
       template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
       inject: false, // Здесь нужно настроить загрузку JS
     })
   })
 }
 
 const htmlPlugins = generateHtmlPlugins('./src/pug/pages')


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
   ].concat(htmlPlugins),
   module: {
      rules: [
         {
            test: /\.pug$/,
            loader: 'pug-loader',
            // include: path.resolve(__dirname, 'src/pug/icnludes'), ЗДЕСЬ НЕ ЗАБУДЬ СДЕЛАТЬ ДЛЯ ШАПКИ И ФУТЕРА
            // use: ['raw-loader'],
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