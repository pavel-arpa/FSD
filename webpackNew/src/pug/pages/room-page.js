let roomPageImagesLen = document.querySelector('.room-page__common-sector').querySelectorAll('.room-page__image').length

for (let i = 0; i < roomPageImagesLen; i++) {
  (function() {
    let leftBut = document.querySelector('.room-page__wrapper-bg-arrow.room-page__wrapper-bg-arrow_left')
    let rightBut = document.querySelector('.room-page__wrapper-bg-arrow.room-page__wrapper-bg-arrow_right')
    let current = 0
    let image = document.querySelector('.room-page__common-sector').querySelectorAll('.room-page__image')

    leftBut.addEventListener('click', function() {
      image[current].className = 'room-page__image room-page__image_sliding'
      // onePoint[current].className = 'room-page__one-point'
      if (current == 0) {
        current = image.length
      }
      current--
      image[current].className = 'room-page__image room-page__image_current'
      // onePoint[current].className = 'room-page__one-point room-page__one-point_current'
    })
    
    rightBut.addEventListener('click', function() {
      image[current].className = 'room-page__image room-page__image_sliding'
      // onePoint[current].className = 'room-page__one-point'
      if (current == (image.length - 1)) {
        current = -1
      }
      current++
      image[current].className = 'room-page__image room-page__image_current'
      // onePoint[current].className = 'room-page__one-point room-page__one-point_current'
    })
  } ())
}
