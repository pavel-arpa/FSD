import * as $ from 'jquery'
import Post from '@models/Post'
import xml from './assets/data.xml'
import LogoChrome from './assets/logo-chrome.png'
import './styles/styles.css'

const post = new Post('Webpack Post Title', LogoChrome)

$('pre').html(post.toString())

console.log('Post to String:', post.toString())

console.log('XML:', xml)