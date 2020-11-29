if (document.querySelector('.filter-page__button-aside')) {
  let buttonAside = document.querySelector('.filter-page__button-aside')
  let toCountClicksAside = 0
  buttonAside.addEventListener('click', () => {
    toCountClicksAside++
    console.log(toCountClicksAside)
    if (toCountClicksAside % 2 == 1) {
      buttonAside.style.backgroundColor = '#e0e0e0'
    }
    if (toCountClicksAside % 2 == 0) {
      buttonAside.style.backgroundColor = '#f3f3f3'
    }
  })
}