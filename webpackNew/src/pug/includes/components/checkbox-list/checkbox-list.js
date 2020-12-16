if (document.querySelector('.checkbox-list__btn_exp')) {
   let allCheckboxes = document.querySelectorAll('.checkbox-list__btn_exp')
   for (let i = 0; i < allCheckboxes.length; i++) {

      $(allCheckboxes[i]).click(function(){
         if ($(allCheckboxes[i]).hasClass('checkbox-list__btn_clicked')) {
            $(this).addClass('checkbox-list__btn_default').removeClass('checkbox-list__btn_clicked');
         } else {
            $(this).addClass('checkbox-list__btn_clicked').removeClass('checkbox-list__btn_default');
         }
      })
   }
}
