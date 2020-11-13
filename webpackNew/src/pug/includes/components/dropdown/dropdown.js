$('.dropdown__btn').click(function(){
   if ($('.dropdown__btn').hasClass('dropdown__btn_clicked')) {
      $(this).addClass('dropdown__btn_default').removeClass('dropdown__btn_clicked');
   } else {
      $(this).addClass('dropdown__btn_clicked').removeClass('dropdown__btn_default');
   }
})

// Цикл уникальности для каждого нового одинакового блока
let len = document.querySelectorAll('.dropdown').length
let arrayOfDropdowns = document.querySelectorAll('.dropdown')
let objectsPeople = []
class People {
   constructor() {
      this.adult = 0
      this.child = 0
      this.count = 0
      this.baby = 0
   }
   countStr() {
      if (this.count == 0) {
         return 'Сколько гостей'
      }
      if (this.count == 1) { 
         return `${this.count} гость` 
      }
      if ((this.count > 1) && (this.count< 5)) { 
         return `${this.count} гостя` 
      }
      if (this.count > 4) { 
         return `${this.count} гостей` 
      }
      if ((this.count == 0) && (this.count > 1)) { 
         return `${this.count} гостей` 
      }
   }
   // baby: 0,
   babyStr() {
      if (this.baby == 0) {
         return ''
      }
      if (this.baby == 1) {
         return `, ${this.baby} младенец`
      }
      if ((this.baby >= 2) && (this.baby <= 4)) {
         return `, ${this.baby} младенца`
      }
      if (this.baby >= 5) {
         return `, ${this.baby} младенцев`
      }
   }
}



for (let x=0; x<len; x++) {
   let identif = Math.floor(Math.random() * 10000000)
   arrayOfDropdowns[x].id = identif
   let dropdownBtn = arrayOfDropdowns[x].querySelector('.dropdown__btn')
   objectsPeople[x] = new People()

   if ($(dropdownBtn).hasClass('dropdown__btn_big')) {
      dropdownPeople(identif, x)
   } else {
      dropdownAccom(identif)
   }
}



// Главная функция со всей логикой

function dropdownPeople(id, x) {
   let elemById = document.getElementById(id)
   let btnTitle = elemById.querySelector('.dropdown__btn-title')
   let circle = elemById.querySelectorAll('.dropdown__circle')
   let numberOfPeople = elemById.querySelectorAll('.dropdown__number-of-people')

   for (let i=0; i<5; i=i+2) {
      // Увеличение количества гостей
      circle[i+1].addEventListener(
         "click",
         function() {
            switch(i) {
               case 0: numberOfPeople[0].innerHTML = ++objectsPeople[x].adult
                  break
               case 2: numberOfPeople[1].innerHTML = ++objectsPeople[x].child
                  break
            }
            if (objectsPeople[x].adult == 1) { circle[0].classList.remove('dropdown__circle_unavailable') }
            if (objectsPeople[x].child == 1) { circle[2].classList.remove('dropdown__circle_unavailable') }
            
            objectsPeople[x].count = objectsPeople[x].adult + objectsPeople[x].child
            if (objectsPeople[x].count > 0) { 
               elemById.querySelector('.dropdown__btn-clear').classList.add('dropdown__btn-clear_visible') 
               if (i == 4) { numberOfPeople[2].innerHTML = ++objectsPeople[x].baby }
               circle[5].classList.remove('dropdown__circle_unavailable')
               if (objectsPeople[x].baby == 1) { circle[4].classList.remove('dropdown__circle_unavailable') }
            }
            btnTitle.innerHTML = `${objectsPeople[x].countStr()}${objectsPeople[x].babyStr()}`
      })
      // Уменьшение количества гостей
      circle[i].addEventListener(
         'click', 
         function() { 
            if (objectsPeople[x].count >= 0) {
               switch(i) {
                  case 0: (objectsPeople[x].adult > 0 ? numberOfPeople[0].innerHTML = --objectsPeople[x].adult : true)
                     break
                  case 2: (objectsPeople[x].child > 0 ? numberOfPeople[1].innerHTML = --objectsPeople[x].child : true)
                     break
                  case 4: (objectsPeople[x].baby > 0 ? numberOfPeople[2].innerHTML = --objectsPeople[x].baby : true)
                     break
               }
               if (objectsPeople[x].adult == 0) { circle[0].classList.add('dropdown__circle_unavailable') }
               if (objectsPeople[x].child == 0) { circle[2].classList.add('dropdown__circle_unavailable') }
               if (objectsPeople[x].baby == 0) { circle[4].classList.add('dropdown__circle_unavailable') }

               objectsPeople[x].count = objectsPeople[x].adult + objectsPeople[x].child
               if (objectsPeople[x].count == 0) { 
                  btnTitle.innerHTML = objectsPeople[x].countStr()
                  elemById.querySelector('.dropdown__btn-clear').classList.remove('dropdown__btn-clear_visible')
                  objectsPeople[x].baby = 0
                  numberOfPeople[2].innerHTML = objectsPeople[x].baby
                  circle[4].classList.add('dropdown__circle_unavailable')
                  circle[5].classList.add('dropdown__circle_unavailable')
               }
               btnTitle.innerHTML = `${objectsPeople[x].countStr()}${objectsPeople[x].babyStr()}`
            }
      })
      // Обнуление при нажатии кнопки очистить
      elemById.querySelector('.dropdown__btn-clear').addEventListener(
         'click',
         function() {
            objectsPeople[x].count=0
            btnTitle.innerHTML = 'Сколько гостей'
            objectsPeople[x].adult=0
            numberOfPeople[0].innerHTML = objectsPeople[x].adult
            circle[0].classList.add('dropdown__circle_unavailable')
            objectsPeople[x].child=0
            numberOfPeople[1].innerHTML = objectsPeople[x].child
            circle[2].classList.add('dropdown__circle_unavailable')
            objectsPeople[x].baby=0
            numberOfPeople[2].innerHTML = objectsPeople[x].baby
            circle[4].classList.add('dropdown__circle_unavailable')
            circle[5].classList.add('dropdown__circle_unavailable')

            elemById.querySelector('.dropdown__btn-clear').classList.remove('dropdown__btn-clear_visible')
      })
      elemById.querySelector('.dropdown__btn-submit').addEventListener(
         'click',
         function() {
            elemById.querySelector('.dropdown__btn').classList.remove('dropdown__btn_clicked')
      })
   }
}

function dropdownAccom(id) {
   let elemById = document.getElementById(id)
   let btnTitle = elemById.querySelector('.dropdown__btn-title')
   let circle = elemById.querySelectorAll('.dropdown__circle')
   let numberOfItems = elemById.querySelectorAll('.dropdown__number-of-items')

   // Объект с методами для перевода в строку
   let items = {
      bedrooms: 2,
      bedroomsStr() { 
         if (this.bedrooms == 0) {
            return ''
         }
         if (this.bedrooms == 1) {
            if ((this.beds > 0) || (this.bathrooms > 0)) {
               return `${this.bedrooms} спальня, `
            } else {
               return `${this.bedrooms} спальня`
            }
         }
         if ((this.bedrooms > 1) && (this.bedrooms < 5)) {
            if ((this.beds > 0) || (this.bathrooms > 0)) {
               return `${this.bedrooms} спальни, `
            } else {
               return `${this.bedrooms} спальни`
            }
         }
         if (this.bedrooms > 4) {
            if ((this.beds > 0) || (this.bathrooms > 0)) {
               return `${this.bedrooms} спален, `
            } else {
               return `${this.bedrooms} спален`
            }
         }
      },
      beds: 2,
      bedsStr() { 
         if (this.beds == 0) {
            return ''
         }
         if (this.beds == 1) {
            if (this.bathrooms > 0) {
               return `${this.beds} кровать, `
            } else {
               return `${this.beds} кровать`
            }
         }
         if ((this.beds > 1) && (this.beds < 5)) {
            if (this.bathrooms > 0) {
               return `${this.beds} кровати, `
            } else {
               return `${this.beds} кровати`
            }
         }
         if (this.beds > 4) {
            if (this.bathrooms > 0) {
               return `${this.beds} кроватей, `
            } else {
               return `${this.beds} кроватей`
            }
         }
      },
      bathrooms: 0,
      bathroomsStr() { 
         if (this.bathrooms == 0) {
            return ''
         }
         if (this.bathrooms == 1) {
            return `${this.bathrooms} ванная комнаты`
         }
         if (this.bathrooms > 1) {
            return `${this.bathrooms} ванных комнаты`
         }
      }
   }

   // Присвоение значений по умолчанию
      // Для текста в кнопке
      btnTitle.innerHTML = `${items.bedroomsStr()}${items.bedsStr()}${items.bathroomsStr()}`
      // Для кнопок раскывающегося списка
      numberOfItems[0].innerHTML = items.bedrooms
      numberOfItems[1].innerHTML = items.beds
      numberOfItems[2].innerHTML = items.bathrooms
      // Изменения состояния кнопок
      if (items.bedrooms > 1) { circle[0].classList.remove('dropdown__circle_unavailable') }
      if (items.beds > 1) { circle[2].classList.remove('dropdown__circle_unavailable') }
      if (items.bathrooms > 1) { circle[4].classList.remove('dropdown__circle_unavailable') }


   // Цикл событий для dropdown
   for (let i=0; i<5; i=i+2) {
      circle[i+1].addEventListener(
         "click",
         function() {
            switch(i) {
               case 0: numberOfItems[0].innerHTML = ++items.bedrooms
                  break
               case 2: numberOfItems[1].innerHTML = ++items.beds
                  break
               case 4: numberOfItems[2].innerHTML = ++items.bathrooms
                  break
            }

            // Изменения состояния кнопки (+)
            if (items.bedrooms == 1) { circle[0].classList.remove('dropdown__circle_unavailable') }
            if (items.beds == 1) { circle[2].classList.remove('dropdown__circle_unavailable') }
            if (items.bathrooms == 1) { circle[4].classList.remove('dropdown__circle_unavailable') }

            // Изменение текста в кнопке
            btnTitle.innerHTML = `${items.bedroomsStr()}${items.bedsStr()}${items.bathroomsStr()}`
      })
      circle[i].addEventListener(
         'click', 
         function() { 
               switch(i) {
                  case 0: (items.bedrooms > 0 ? numberOfItems[0].innerHTML = --items.bedrooms : true)
                     break
                  case 2: (items.beds > 0 ? numberOfItems[1].innerHTML = --items.beds : true)
                     break
                  case 4: (items.bathrooms > 0 ? numberOfItems[2].innerHTML = --items.bathrooms: true)
                     break
               }
               
               // Изменения состояния кнопки (-)
               if (items.bedrooms == 0) { circle[0].classList.add('dropdown__circle_unavailable') }
               if (items.beds == 0) { circle[2].classList.add('dropdown__circle_unavailable') }
               if (items.bathrooms == 0) { circle[4].classList.add('dropdown__circle_unavailable') }
               
               // Изменение текста в кнопке
               btnTitle.innerHTML = `${items.bedroomsStr()}${items.bedsStr()}${items.bathroomsStr()}`
               if ((items.bedrooms + items.beds + items.bathrooms) == 0) { btnTitle.innerHTML = 'Ничего не выбрано' }
      })
   }
}