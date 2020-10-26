let len = document.querySelectorAll('.room-card').length
let roomCardAll = document.querySelectorAll('.room-card')

for (let i = 0; i < len; i++) {
  let newId = 'roomCard-' + i
  roomCardAll[i].id = newId

  let leftBut = document.getElementById(newId).querySelector('.room-card__wrapper-bg-arrow_left')
  let rightBut = document.getElementById(newId).querySelector('.room-card__wrapper-bg-arrow_right')
  let image = document.getElementById(newId).querySelectorAll('.room-card__image')
  let onePoint = document.getElementById(newId).querySelectorAll('.room-card__one-point')
  let current = 0

  leftBut.addEventListener('click', function() {
    image[current].className = 'room-card__image'
    onePoint[current].className = 'room-card__one-point'
    if (current == 0) {
      current = image.length
    }
    current--
    image[current].className = 'room-card__image room-card__image_current'
    onePoint[current].className = 'room-card__one-point room-card__one-point_current'
  })

  rightBut.addEventListener('click', function() {
    image[current].className = 'room-card__image'
    onePoint[current].className = 'room-card__one-point'
    if (current == (image.length - 1)) {
      current = -1
    }
    current++
    image[current].className = 'room-card__image room-card__image_current'
    onePoint[current].className = 'room-card__one-point room-card__one-point_current'
  })
}