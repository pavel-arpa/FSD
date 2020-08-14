let likeButtons = document.querySelectorAll('.like-button')

for (let i=0; i<likeButtons.length; i++) {
   let id = Math.floor(Math.random() * 10000000)
   likeButtons[i].id = id
   $(`#${id}`).click(function(){
      if ($(`#${id}`).hasClass('like-button_clicked')) {
         $(this).addClass('like-button_default').removeClass('like-button_clicked');
         let likeCount = [this.querySelector('.like-button__count').innerHTML].toString()
         this.querySelector('.like-button__count').innerHTML = --likeCount
      } else {
         $(this).addClass('like-button_clicked').removeClass('like-button_default');
         let likeCount = [this.querySelector('.like-button__count').innerHTML].toString()
         this.querySelector('.like-button__count').innerHTML = ++likeCount
      }
   })
}