// Получаем все элементы date-dropdown
const len = document.querySelectorAll('.date-dropdown').length
let allDropdowns = document.querySelectorAll('.date-dropdown')

// Массив для datepickers (от плагина)
let pluginsDatePickers = []

// Присваеваем каждому date-dropdown свой id для уникальности и
// удобств их обработки
for (let x=0; x<len; x++) {
   let newId = "dateDropdown-" + x
   let inputs = allDropdowns[x].querySelectorAll('.date-dropdown__input')

   inputs[0].id = newId
   inputs[0].value = ''
   inputs[1].value = ''


   // Опции календаря
   $('#'+newId).datepicker({
      todayButton: new Date(),
      clearButton: true,
      range: true,
      minDate: new Date(),
      navTitles: {
         days: 'MM yyyy'
      },
      onSelect: function(formattedDate, date, inst) {
         inputs[0].value = formattedDate.split(' - ')[0]
         if (!(formattedDate.split(' - ')[1] == undefined)) {
            inputs[1].value = formattedDate.split(' - ')[1]
         }
      }
   })

   pluginsDatePickers.push(document.querySelector('.datepicker'))
   console.log(pluginsDatePickers)
   inputs[1].addEventListener('click', function() {
      if (!pluginsDatePickers[x].classList.contains('active')) {
         $('#'+newId).datepicker().data('datepicker').show()
      }
   })
}