let len = document.querySelectorAll('.room-card').length
let roomCardAll = document.querySelectorAll('.room-card')


for (let i = 0; i < len; i++) {
  let newId = 'roomCard-' + i
  roomCardAll[i].id = newId
  
  let roomCard = document.getElementById(newId)
  let leftBut = document.getElementById(newId).querySelector('.room-card__wrapper-bg-arrow_left')
  let rightBut = document.getElementById(newId).querySelector('.room-card__wrapper-bg-arrow_right')
  let image = document.getElementById(newId).querySelectorAll('.room-card__image')
  let onePoint = document.getElementById(newId).querySelectorAll('.room-card__one-point')
  let current = 0

  
  // Изменение размера карточки номера
  function toResizeCard(arg) {
    let sizeImg = roomCardAll[arg].clientWidth*0.56
    let sizeInner = roomCardAll[arg].clientWidth*0.39
    let sizeMain = roomCardAll[arg].clientWidth*0.95
    let imageWindow = roomCardAll[arg].querySelector('.room-card__image-window')
    let wrapperImage = roomCardAll[arg].querySelector('.room-card__wrapper-image')

    wrapperImage.style.height = sizeImg + 'px'
    imageWindow.style.height = sizeImg + 'px'
    if(roomCardAll[arg].clientWidth > 270) {
      roomCardAll[arg].querySelector('.room-card__inner').style.height = '100px'
      roomCardAll[arg].style.height = sizeImg + 100 + 'px'
    } else {
      roomCardAll[arg].querySelector('.room-card__inner').style.height = sizeInner + 'px'
      roomCardAll[arg].style.height = sizeMain + 'px'
    }
  }
  toResizeCard(i)
  window.onresize = function(event) {
    for (let x = 0; x < len; x++) {
      toResizeCard(x)
    }
  }
  


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