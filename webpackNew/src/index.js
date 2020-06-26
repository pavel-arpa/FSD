import Post from './Post'
import LogoChrome from './assets/logo-chrome.png'
import './styles/styles.css'

const post = new Post('Webpack Post Title', LogoChrome)

console.log('Post to String:', post.toString())