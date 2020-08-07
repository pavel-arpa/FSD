$('.dropdown__btn').click(function(){
   if ($('.dropdown__btn').hasClass('dropdown__btn_clicked')) {
      $(this).addClass('dropdown__btn_default').removeClass('dropdown__btn_clicked');
   } else {
      $(this).addClass('dropdown__btn_clicked').removeClass('dropdown__btn_default');
   }
})


let len = document.querySelectorAll('.dropdown').length
let arrayOfDropdowns = document.querySelectorAll('.dropdown')
for (let x=0; x<len; x++) {
   let identif = Math.floor(Math.random() * 10000000)
   arrayOfDropdowns[x].id = identif
   dropdown(identif)
}


// let identif = Math.floor(Math.random() * 10000000)
// document.querySelector('.dropdown').id = identif
// console.log(document.querySelector('.dropdown'))
function dropdown(id) {
   
   let elemById = document.getElementById(id)
   let count = 0
   let btnTitle = elemById.querySelector('.dropdown__btn-title')
   let circle = elemById.querySelectorAll('.dropdown__circle')
   let numberOfPeople = elemById.querySelectorAll('.dropdown__number-of-people')

   let adult = 0
   let child = 0
   let baby = 0

   for (let i=0; i<5; i=i+2) {
      circle[i+1].addEventListener(
         "click",
         function() {
            switch(i) {
               case 0: numberOfPeople[0].innerHTML = ++adult
                  break
               case 2: numberOfPeople[1].innerHTML = ++child
                  break
               case 4: numberOfPeople[2].innerHTML = ++baby
                  break
            }
            if (adult == 1) { circle[0].classList.remove('dropdown__circle_unavailable') }
            if (child == 1) { circle[2].classList.remove('dropdown__circle_unavailable') }
            if (baby == 1) { circle[4].classList.remove('dropdown__circle_unavailable') }

            count = adult + child + baby
            if (count > 0) { elemById.querySelector('.dropdown__btn-clear').classList.add('dropdown__btn-clear_visible') }
            if (count == 1) { 
               btnTitle.innerHTML = `${count} гость` 
            }
            if ((count > 1) && (count < 5)) { btnTitle.innerHTML = `${count} гостя` }
            if (count > 4) { btnTitle.innerHTML = `${count} гостей` }
      })
      circle[i].addEventListener(
         'click', 
         function() { 
            if (count >= 0) {
               switch(i) {
                  case 0: (adult > 0 ? numberOfPeople[0].innerHTML = --adult : true)
                     break
                  case 2: (child > 0 ? numberOfPeople[1].innerHTML = --child : true)
                     break
                  case 4: (baby > 0 ? numberOfPeople[2].innerHTML = --baby: true)
                     break
               }
               if (adult == 0) { circle[0].classList.add('dropdown__circle_unavailable') }
               if (child == 0) { circle[2].classList.add('dropdown__circle_unavailable') }
               if (baby == 0) { circle[4].classList.add('dropdown__circle_unavailable') }

               count = adult + child + baby
               if (count == 0) { 
                  btnTitle.innerHTML = 'Сколько гостей'
                  elemById.querySelector('.dropdown__btn-clear').classList.remove('dropdown__btn-clear_visible')
               }
               if (count == 1) { btnTitle.innerHTML = `${count} гость` }
               if ((count > 1) && (count < 5)) { btnTitle.innerHTML = `${count} гостя` }
               if (count > 4) { btnTitle.innerHTML = `${count} гостей` }
            }
      })
      elemById.querySelector('.dropdown__btn-clear').addEventListener(
         'click',
         function() {
            console.log("123")
            count=0
            btnTitle.innerHTML = 'Сколько гостей'
            adult=0
            numberOfPeople[0].innerHTML = adult
            circle[0].classList.add('dropdown__circle_unavailable')
            child=0
            numberOfPeople[1].innerHTML = child
            circle[2].classList.add('dropdown__circle_unavailable')
            baby=0
            numberOfPeople[2].innerHTML = baby
            circle[4].classList.add('dropdown__circle_unavailable')

            elemById.querySelector('.dropdown__btn-clear').classList.remove('dropdown__btn-clear_visible')
      })
   }
} 


// elemById = document.getElementById(identif)
// let count = 0
// let btnTitle = elemById.querySelector('.dropdown__btn-title')
// let circle = elemById.querySelectorAll('.dropdown__circle')
// let numberOfPeople = elemById.querySelectorAll('.dropdown__number-of-people')

// let adult = 0
// let child = 0
// let baby = 0

// for (let i=0; i<5; i=i+2) {
//    circle[i+1].addEventListener(
//       "click",
//       function() {
//          switch(i) {
//             case 0: numberOfPeople[0].innerHTML = ++adult
//                break
//             case 2: numberOfPeople[1].innerHTML = ++child
//                break
//             case 4: numberOfPeople[2].innerHTML = ++baby
//                break
//          }
//          if (adult == 1) { circle[0].classList.remove('dropdown__circle_unavailable') }
//          if (child == 1) { circle[2].classList.remove('dropdown__circle_unavailable') }
//          if (baby == 1) { circle[4].classList.remove('dropdown__circle_unavailable') }

//          count = adult + child + baby
//          if (count > 0) { elemById.querySelector('.dropdown__btn-clear').classList.add('dropdown__btn-clear_visible') }
//          if (count == 1) { 
//             btnTitle.innerHTML = `${count} гость` 
//          }
//          if ((count > 1) && (count < 5)) { btnTitle.innerHTML = `${count} гостя` }
//          if (count > 4) { btnTitle.innerHTML = `${count} гостей` }
//    })
//    circle[i].addEventListener(
//       'click', 
//       function() { 
//          if (count >= 0) {
//             switch(i) {
//                case 0: (adult > 0 ? numberOfPeople[0].innerHTML = --adult : true)
//                   break
//                case 2: (child > 0 ? numberOfPeople[1].innerHTML = --child : true)
//                   break
//                case 4: (baby > 0 ? numberOfPeople[2].innerHTML = --baby: true)
//                   break
//             }
//             if (adult == 0) { circle[0].classList.add('dropdown__circle_unavailable') }
//             if (child == 0) { circle[2].classList.add('dropdown__circle_unavailable') }
//             if (baby == 0) { circle[4].classList.add('dropdown__circle_unavailable') }

//             count = adult + child + baby
//             if (count == 0) { 
//                btnTitle.innerHTML = 'Сколько гостей'
//                elemById.querySelector('.dropdown__btn-clear').classList.remove('dropdown__btn-clear_visible')
//             }
//             if (count == 1) { btnTitle.innerHTML = `${count} гость` }
//             if ((count > 1) && (count < 5)) { btnTitle.innerHTML = `${count} гостя` }
//             if (count > 4) { btnTitle.innerHTML = `${count} гостей` }
//          }
//    })
//    elemById.querySelector('.dropdown__btn-clear').addEventListener(
//       'click',
//       function() {
//          console.log("123")
//          count=0
//          btnTitle.innerHTML = 'Сколько гостей'
//          adult=0
//          numberOfPeople[0].innerHTML = adult
//          circle[0].classList.add('dropdown__circle_unavailable')
//          child=0
//          numberOfPeople[1].innerHTML = child
//          circle[2].classList.add('dropdown__circle_unavailable')
//          baby=0
//          numberOfPeople[2].innerHTML = baby
//          circle[4].classList.add('dropdown__circle_unavailable')

//          elemById.querySelector('.dropdown__btn-clear').classList.remove('dropdown__btn-clear_visible')
//    })
// }





