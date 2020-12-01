if (document.querySelector('.header')) {
  let iconMenu = document.querySelector('.header__icon-menu')
  let menu = document.querySelector('.header__menu')
  let menuBg = document.querySelector('.header__menu-bg')
  let close = document.querySelector('.header__close')

  iconMenu.addEventListener('click', function() {
    menu.style.left = '0px'
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    menuBg.style.margin = '0 0 0 auto'
    document.documentElement.style.overflow = 'hidden'
  })

  close.addEventListener('click', function() {
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    setTimeout(function() {
      menu.style.left = '100%'
    }, 700)
    menuBg.style.margin = '0 -400px 0 auto'
    document.documentElement.style.overflow = 'auto'
  })
}