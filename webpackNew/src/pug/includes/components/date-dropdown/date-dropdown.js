// Получаем все элементы date-dropdown
const len = document.querySelectorAll('.date-dropdown').length
let allDropdowns = document.querySelectorAll('.date-dropdown')


// Локализация
$.fn.datepicker.language['ru'] =  {
   days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
   daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
   daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
   months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
   monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
   today: 'Применить',
   clear: 'Очистить',
   dateFormat: 'dd.mm.yyyy',
   timeFormat: 'hh:ii',
   firstDay: 1
}


// Присваеваем каждому date-dropdown свой id для уникальности и
// удобств их обработки
for (let x=0; x<len; x++) {
   let newId = "dateDropdown-" + x
   let inputs = []
   inputs = allDropdowns[x].querySelectorAll('.date-dropdown__input')

   if (inputs.length == 2) {
      inputs[0].id = newId
      inputs[0].value = ''
      inputs[1].value = ''
      
      // Сохранение результата даты
      let savingFormatDate
      
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
            savingFormatDate = formattedDate.split(' - ')[0]
            
            if (!(formattedDate.split(' - ')[1] == undefined)) {
               inputs[1].value = formattedDate.split(' - ')[1]
            }
            
            if (formattedDate == '') {
               inputs[0].value = ''
               inputs[1].value = ''
            }
         }
      })

      const acceptButton = document.querySelectorAll("[data-action='today']")
      $(acceptButton).on('click', function() {
         $(inputs[0]).data('datepicker').hide()
      })
      
      inputs[1].addEventListener('click', function() {
         if (!document.querySelector('.datepicker').classList.contains('active')) {
            $('#'+newId).datepicker().data('datepicker').show()
            // Решение проблемы автозаполнения плагином первого инпута
            // другим форматом путем переприсваивания значения инпута
            savingFormatDate == undefined ? true : inputs[0].value = savingFormatDate
         }
      })
   } else {
      inputs[0].id = newId
      
      $('#'+newId).datepicker({
         todayButton: new Date(),
         clearButton: true,
         range: true,
         minDate: new Date(),
         navTitles: {
            days: 'MM yyyy'
         },
         dateFormat: 'd M'
      })
   }
}