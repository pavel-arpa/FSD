let len = document.querySelectorAll('.range-slider').length
let arrayOfRangeSliders = document.querySelectorAll('.range-slider')
for (let x=0; x<len; x++) {
   let identif = Math.floor(Math.random() * 10000000)
   arrayOfRangeSliders[x].id = identif
   rangeSlider(identif)
}

function rangeSlider(id) {
   let slider = document.getElementById(id)
   let stripeGradient = slider.querySelector('.range-slider__stripe_gradient')
   let point1 = slider.querySelector('.range-slider__point_first')
   let point2 = slider.querySelector('.range-slider__point_second')
   let wrapperInnerStripe = slider.querySelector('.range-slider__wrapper-inner-stripe')

   // Вывод значений диапазона возле заголовка
   let leftValue = 5000
   let rightValue = 10000

   let newLeftFirst = 84
   let newLeftSecond = 168

   let priceRange = slider.querySelector('.range-slider__price-range')
   priceRange.innerHTML = `${leftValue}₽ - ${rightValue}₽`

   point1.onmousedown = function(event) {
      let shiftX = event.clientX - point1.getBoundingClientRect().left + pageXOffset
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
         newLeftFirst = event.pageX - shiftX - slider.getBoundingClientRect().left
         newLeftFirst = Math.ceil(newLeftFirst / 16.8) * 16.8

         if(newLeftFirst < 0) {
            newLeftFirst = 0
         } else if(newLeftFirst >= newLeftSecond) {
            newLeftFirst = newLeftSecond - 16.8
         }
         
         // Изменение значения диапазона цены
         leftValue = Math.ceil((newLeftFirst * 59.5) / 1000) * 1000
         priceRange.innerHTML = `${leftValue}₽ - ${rightValue}₽`

         point1.style.marginLeft = newLeftFirst - 7 - 1 + 'px'

         stripeGradient.style.marginLeft = newLeftFirst + 1 + 'px'
         stripeGradient.style.paddingRight = newLeftSecond - newLeftFirst + 'px'
      }

      function onMouseUp() {
         document.removeEventListener('mouseup', onMouseUp);
         document.removeEventListener('mousemove', onMouseMove);
      }
   }
   point1.ontouchstart = function(event) {
      let shiftX = event.clientX - point1.getBoundingClientRect().left + pageXOffset
      document.addEventListener('touchmove', onMouseMove);
      document.addEventListener('touchend', onMouseUp);

      function onMouseMove(event) {
         newLeftFirst = event.pageX - shiftX - slider.getBoundingClientRect().left
         newLeftFirst = Math.ceil(newLeftFirst / 16.8) * 16.8

         if(newLeftFirst < 0) {
            newLeftFirst = 0
         } else if(newLeftFirst >= newLeftSecond) {
            newLeftFirst = newLeftSecond - 16.8
         }
         
         // Изменение значения диапазона цены
         leftValue = Math.ceil((newLeftFirst * 59.5) / 1000) * 1000
         priceRange.innerHTML = `${leftValue}₽ - ${rightValue}₽`

         point1.style.marginLeft = newLeftFirst - 7 - 1 + 'px'

         stripeGradient.style.marginLeft = newLeftFirst + 1 + 'px'
         stripeGradient.style.paddingRight = newLeftSecond - newLeftFirst + 'px'
      }

      function onMouseUp() {
         document.removeEventListener('touchend', onMouseUp);
         document.removeEventListener('touchmove', onMouseMove);
      }
   }




   point2.onmousedown = function(event) {
      event.preventDefault() // предотвратить запуск выделения (действие браузера)

      let shiftX = event.clientX - point2.getBoundingClientRect().left + pageXOffset

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
         newLeftSecond = event.pageX - shiftX - slider.getBoundingClientRect().left
         newLeftSecond = Math.ceil(newLeftSecond / 16.8) * 16.8

         if(newLeftSecond > 252) {
            newLeftSecond = 252
         } else if(newLeftSecond <= newLeftFirst) {
            newLeftSecond = newLeftFirst + 16.8
         }

         // Изменение значения диапазона цены
         rightValue = Math.ceil((newLeftSecond * 59.5) / 1000) * 1000
         priceRange.innerHTML = `${leftValue}₽ - ${rightValue}₽`
         
         point2.style.marginLeft = newLeftSecond - 7 - 1 + 'px'

         stripeGradient.style.paddingRight = newLeftSecond - newLeftFirst + 'px'
      }

      function onMouseUp() {
         document.removeEventListener('mouseup', onMouseUp);
         document.removeEventListener('mousemove', onMouseMove);
      }
   }
   point2.ontouchstart = function(event) {
      event.preventDefault() // предотвратить запуск выделения (действие браузера)

      let shiftX = event.clientX - point2.getBoundingClientRect().left + pageXOffset

      document.addEventListener('touchmove', onMouseMove);
      document.addEventListener('touchend', onMouseUp);

      function onMouseMove(event) {
         newLeftSecond = event.pageX - shiftX - slider.getBoundingClientRect().left
         newLeftSecond = Math.ceil(newLeftSecond / 16.8) * 16.8

         if(newLeftSecond > 252) {
            newLeftSecond = 252
         } else if(newLeftSecond <= newLeftFirst) {
            newLeftSecond = newLeftFirst + 16.8
         }

         // Изменение значения диапазона цены
         rightValue = Math.ceil((newLeftSecond * 59.5) / 1000) * 1000
         priceRange.innerHTML = `${leftValue}₽ - ${rightValue}₽`
         
         point2.style.marginLeft = newLeftSecond - 7 - 1 + 'px'

         stripeGradient.style.paddingRight = newLeftSecond - newLeftFirst + 'px'
      }

      function onMouseUp() {
         document.removeEventListener('touchstart', onMouseUp);
         document.removeEventListener('touchmove', onMouseMove);
      }
   }
}