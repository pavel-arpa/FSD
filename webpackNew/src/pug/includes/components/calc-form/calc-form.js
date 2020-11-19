if (document.querySelector('.calc-form')) {

  let calcForm = document.querySelector('.calc-form')
  let priceOfRoom = calcForm.querySelector('.calc-form__price')
  let inputsDate = calcForm.querySelectorAll('.date-dropdown__input')
  let calcStrings = calcForm.querySelectorAll('.calc-form__calc-string')
  let totals = calcForm.querySelectorAll('.calc-form__total')
  let result = calcForm.querySelector('.calc-form__result')

  let values = {
    price: 9990,
    service: 0,
    additional: 300,
    discount: 2179,
  }

  let dates = {
    first: 0,
    second: 0,
    toCountDays() {
      return ((dates.second - this.first) / (1000 * 3600 * 24))
    },
    toConjugate(days) {
      if (days % 10 == 1) {
        return `${days} сутки`
      } else {
        return `${days} суток`
      }
    }
  }

  priceOfRoom = values.price

  inputsDate[0].addEventListener('blur', function() {
    dates.first = new Date(inputsDate[0].value.split('.').reverse().join('-'))
    dates.second = new Date(inputsDate[1].value.split('.').reverse().join('-'))

    if(!isNaN(dates.toCountDays())) {
      // Цена за количество дней
      calcStrings[0].innerHTML = `${values.price}₽ x ${dates.toConjugate(dates.toCountDays())}`
      totals[0].innerHTML = values.price * dates.toCountDays()

      // Услуги
      if (values.discount != 0) {
        calcStrings[1].innerHTML = `Сбор за услуги: скидка ${values.discount}₽`
        totals[1].innerHTML = values.service
      } else {
        calcStrings[1].innerHTML = 'Сбор за услуги: '
        totals[1].innerHTML = values.service
      }

      // Доп услуги
      calcStrings[2].innerHTML = 'Сбор за дополнительные услуги:'
      totals[2].innerHTML = values.additional

      // Итого
      result.innerHTML = (values.price * dates.toCountDays()) - values.discount + values.additional

    } else {
      calcStrings[0].innerHTML = 'Цена за проживание:'
      totals[0].innerHTML = 0
      calcStrings[1].innerHTML = 'Сбор за услуги:'
      totals[1].innerHTML = 0
      calcStrings[2].innerHTML = 'Сбор за дополнительные услуги:'
      totals[2].innerHTML = 0
      result.innerHTML = 0
    }
  })

}



