$(document).ready(function(){

  var w01 = 0;
  var w02 = 0;
  var w03 = 0;

view01();

   $('.right_btn').click(function(){
      if(w01==1){
          view02();
      }
      else if (w02==1){
          view03();
      }
      else if (w03==1){
        view01();
      }
   });

   setInterval(tri, 4000);
   function tri(){
   $('.right_btn').trigger('click');
   }

   $('.left_btn').click(function(){
      if(w01==1){
        view03();
      }
      else if (w02==1){
        view01();
      }
      else if(w03==1){
        view02();
      }
   });


     $('.bottom_btn li').click(function(){
       var idx = $(this).index();
        if(idx==0){
          view01();
        }
        else if(idx==1){
          view02();
        }
        else if(idx==2){
          view03();
        }

     });






  function view01(){

       w01 = 1;
       w02 = 0;
       w03 = 0;
      $('.sl_wrap ul li').fadeOut(0);
      $('.sl_01').fadeIn(600);

      $('.bottom_btn li a').css('background-color','#fff');
      $('.bottom_btn li:nth-child(1) a').css('background-color','red');

  }
  function view02(){
    w01 = 0;
    w02 = 1;
    w03 = 0;

      $('.sl_wrap ul li').fadeOut(0);
      $('.sl_02').fadeIn(600);
      $('.bottom_btn li a').css('background-color','#fff');

     $('.bottom_btn li:nth-child(2) a').css('background-color','red');

  }
  function view03(){
    w01 = 0;
    w02 = 0;
    w03 = 1;

      $('.sl_wrap ul li').fadeOut(0);
      $('.sl_03').fadeIn(600);

    $('.bottom_btn li a').css('background-color','#fff');
     $('.bottom_btn li:nth-child(3) a').css('background-color','red');

  }

});
