let calcForm = document.querySelector('.calc-form')
let price = calcForm.querySelector('.calc-form__price')
let inputs = calcForm.querySelectorAll('.date-dropdown__input')

price.innerHTML = 9990


setInterval(function() {
  console.log(inputs[0].value)
  // let firstDate = new Date(inputs[0].value.split('.').join('-'))
  // let secondDate = new Date(inputs[1].value.split('.').join('-'))
  // let dateRange = secondDate - firstDate
  // console.log(dateRange)
}, 200)
// $(inputs[1]).on('blur', function() {
//   alert(1)
// })
// $(inputs[1]).val("").change(function() {
//   alert(1)
// })

// inputs[1].value.addEventListener('change', function(e) {
//   console.log(1)
//   let firstDate = new Date(inputs[0].value.split('.').join('-'))
//   let secondDate = new Date(inputs[1].value.split('.').join('-'))
//   let dateRange = secondDate - firstDate
//   console.log(dateRange)
// })
// console.log(inputs[1])



