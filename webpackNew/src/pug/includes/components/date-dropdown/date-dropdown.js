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
         nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/></svg>',
         prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
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
         dateFormat: 'd M',
         nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/></svg>',
         prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
      })
   }
   const acceptButton = document.querySelectorAll("[data-action='today']")
   for (let i = 0; i < acceptButton.length; i++) {
      acceptButton[i].addEventListener('click', function() {
         $('#'+newId).data('datepicker').hide()
      })
   }
}
$('.datepicker-here').datepicker({
   todayButton: new Date(),
   clearButton: true,
   range: true,
   minDate: new Date(),
   navTitles: {
      days: 'MM yyyy'
   },
   // dateFormat: 'd M',
   nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/></svg>',
   prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
})