$('.expandable-checkbox-list__btn').click(function(){
   if ($('.expandable-checkbox-list__btn').hasClass('expandable-checkbox-list__btn_clicked')) {
      $(this).addClass('expandable-checkbox-list__btn_default').removeClass('expandable-checkbox-list__btn_clicked');
   } else {
      $(this).addClass('expandable-checkbox-list__btn_clicked').removeClass('expandable-checkbox-list__btn_default');
   }
})