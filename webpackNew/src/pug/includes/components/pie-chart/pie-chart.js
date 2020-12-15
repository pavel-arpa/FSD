if (document.querySelector('.pie-chart')) {
  let canvas = document.getElementById('pieChart')
  let ctx = canvas.getContext('2d')
  let fbParam = {
    beautiful: 130,
    bfColor: ['#FFE39C', '#FFBA9C'],
    good: 65,
    gColor: ['#6FCF97', '#66D2EA'],
    norm: 65,
    nColor: ['#BC9CFF', '#8BA4F9'],
    bad: 0,
    bColor: ['#909090', '#3D4975'],
    currentAngle: 3 * Math.PI / 2,
    getSum() {
      let result = this.beautiful + this.good + this.norm + this.bad
      return result
    },
  }
  
  canvas.height = 1200
  canvas.width = 1200
  document.querySelector('.pie-chart__count-fb').innerHTML = fbParam.getSum()

  function pieDraw(fbCount, lineColor1, lineColor2) {
    if ((fbCount / fbParam.getSum() >= 0.003846153) && (fbCount > 0)) { // Проверка точности - если меньше, то можно пренебречь
      let gradient = ctx.createLinearGradient(0, 1200, 0, 0)
      let newAngle = (fbCount / fbParam.getSum() * 360 * (Math.PI/180)) + fbParam.currentAngle


      gradient.addColorStop(0.0, lineColor1);
      gradient.addColorStop(1.0, lineColor2);
      ctx.strokeStyle = gradient
      ctx.lineWidth = 40
      ctx.beginPath();
      ctx.arc(600, 600, 560, fbParam.currentAngle, newAngle - (0.5 * fbParam.currentAngle / 180), false)
      fbParam.currentAngle = newAngle
      ctx.stroke();
    }
  }

  pieDraw(fbParam.bad, ...fbParam.bColor)
  pieDraw(fbParam.norm, ...fbParam.nColor)
  pieDraw(fbParam.good, ...fbParam.gColor)
  pieDraw(fbParam.beautiful, ...fbParam.bfColor)

}