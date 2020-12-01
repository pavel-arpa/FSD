(function() {
  if (document.querySelector('.reg-signin-page')) {
    let signInForm = document.querySelector('.reg-signin-page__sign-in-form-wrapper')
    let regForm = document.querySelector('.reg-signin-page__register-form-wrapper')

    let buttonSignIn = document.querySelector('.sign-in-form__wrapper-create-account').querySelector('.button')
    let buttonReg = document.querySelector('.register-form__wrapper-has-account').querySelector('.button')
    // console.log(buttonSignIn)
    buttonSignIn.addEventListener('click', () => {
      signInForm.style.display = 'none'
      regForm.style.display = 'flex'
    })
    buttonReg.addEventListener('click', () => {
      regForm.style.display = 'none'
      signInForm.style.display = 'flex'
    })
    // let buttonAside = document.querySelector('.filter-page__button-aside')
    // let aside = document.querySelector('.filter-page__aside')
    // let asideInner = aside.querySelector('.filter-page__aside-inner')
    // console.log(aside)
    // let clicks = 0
  
    // buttonAside.addEventListener('click', () => {
    //   clicks++
      
    //   if (clicks % 2 == 1) {
    //     buttonAside.style.backgroundColor = '#e0e0e0'
    //     aside.style.top = 70 + 'px'
    //     aside.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    //     document.documentElement.style.overflow = 'hidden'
    //     asideInner.style.opacity = 1
    //     // aside.style.bottom = 0 + 'px'
    //   }
    //   if (clicks % 2 == 0) {
    //     buttonAside.style.backgroundColor = '#f3f3f3'
    //     aside.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    //     asideInner.style.opacity = 0
    //     setTimeout(function() {
    //       aside.style.top = -1004 + 'px'
    //       // aside.style.bottom = 0 + 'px'
    //     }, 500)
    //     document.documentElement.style.overflow = 'auto'
      // }
    // })
  }
} ())