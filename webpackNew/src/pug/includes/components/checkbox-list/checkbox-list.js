
   $('#expandableCheckbox').click(function(){
      if ($('#expandableCheckbox').hasClass('checkbox-list__btn_clicked')) {
         $(this).addClass('checkbox-list__btn_default').removeClass('checkbox-list__btn_clicked');
      } else {
         $(this).addClass('checkbox-list__btn_clicked').removeClass('checkbox-list__btn_default');
      }
   })
