if (document.querySelector('.header')) {
  let iconMenu = document.querySelector('.header__icon-menu')
  let menu = document.querySelector('.header__menu')
  let menuBg = document.querySelector('.header__menu-bg')
  let close = document.querySelector('.header__close')
  let page = document.querySelector('.landing-page')

  iconMenu.addEventListener('click', function() {
    menu.style.left = '0px'
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    menuBg.style.margin = '0 0 0 auto'
    page.style.overflow = 'hidden'
  })

  close.addEventListener('click', function() {
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    setTimeout(function() {
      menu.style.left = '100%'
    }, 700)
    menuBg.style.margin = '0 -400px 0 auto'
    page.style.overflow = 'auto'
  })
}