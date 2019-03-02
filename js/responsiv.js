$(function (){
   nbrFormItem = $('.form_wizard .form_item').length;
   $('.progress-bar').css('width',100/nbrFormItem+'%');
   nbrStep = 0;
   $('.nxt_step').click(function (){
        if(nbrStep < nbrFormItem-1)
            nbrStep = nbrStep + 1;
        if(nbrStep == nbrFormItem-1){
            $('.form_wizard footer .nxt_step').hide();
            $('.form_wizard > div > footer .submit_btn').show();
        }
        $('.progress-bar').width(0);
        $('.progress-bar').
                css('width',(100/nbrFormItem)*(nbrStep+1)+'%');
        
        $('.form_wizard header .steps_form .item').eq(nbrStep).removeClass('item_disable');
        $('.form_wizard header .steps_form .item').eq(nbrStep).addClass('item_activ');
        
        $('.form_wizard .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_item').eq(nbrStep).fadeIn(700);
        });
   });
   
   $('.pre_step').click(function (){
       if(nbrStep > 0)
            nbrStep = nbrStep - 1;
            $('.form_wizard footer .nxt_step:hidden').show();
            $('.form_wizard footer .submit_btn:visible').hide();
        $('.progress-bar').width(0);
        $('.progress-bar').
                css('width',(100/nbrFormItem)*(nbrStep+1)+'%');
        
        $('.form_wizard header .steps_form .item').eq(nbrStep + 1).removeClass('item_activ');
        $('.form_wizard header .steps_form .item').eq(nbrStep + 1).addClass('item_disable');
        
        $('.form_wizard .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_item').eq(nbrStep).fadeIn(700);
        });
   });
});