import * as $ from 'jquery'
import xml from './assets/data.xml'
import LogoChrome from './assets/logo-chrome.png'
import './styles/styles.css'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', LogoChrome)

$('pre').html(post.toString())

console.log('Post to String:', post.toString())

console.log('XML:', xml)