import * as $ from 'jquery'
import LogoChrome from './assets/logo-chrome.png'

function importJsCss(resolve) {
   resolve.keys().forEach(resolve);
}

importJsCss(require.context('../src/', true, /\.js$|\.scss$/));