// function importAll(resolve) {
//   resolve.keys().forEach(resolve);
// }

// importAll(require.context('../src/', true, /\.js$|\.scss$|\.css$/)); 



// СТИЛИ

// Библиотеки и плагины
import '../node_modules/air-datepicker/dist/css/datepicker.css'

// Кастомные
// ---- общие
import './styles/common.scss'
import './styles/null.scss'
// ---- страницы
import './styles/index.scss'
import './styles/colors-and-type.scss'
import './styles/form-elements.scss'
import './styles/cards.scss'
import './styles/header-and-footers.scss'
import './styles/landing-page.scss'
import './styles/filter-page.scss'
import './styles/reg-login-page.scss'



// СКРИПТЫ

// Библиотеки и плагины
import '../node_modules/air-datepicker/dist/js/datepicker.js'
import './jquery.maskedinput.min.js'

// Кастомные
// ---- компоненты
import './pug/includes/components/text-field/text-field.js'
import './pug/includes/components/dropdown/dropdown.js'
import './pug/includes/components/checkbox-list/checkbox-list.js'
import './pug/includes/components/like-button/like-button.js'
import './pug/includes/components/range-slider/range-slider.js'
import './pug/includes/components/date-dropdown/date-dropdown.js'
import './pug/includes/components/header/header.js'
// ---- формы
import './pug/includes/components/calc-form/calc-form.js'
import './pug/includes/components/room-card/room-card.js'
// ---- страницы
import './pug/pages/filter-page.js'
import './pug/pages/reg-signin-page.js'
