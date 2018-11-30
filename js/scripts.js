$("document").ready(function(){
  //menuCatalogInner height
  //$('.menuCatalog-inner').height( document.documentElement.clientHeight - $('.header').height() );
  $('.menuCatalog-inner').css('max-height', document.documentElement.clientHeight - $('.header').height() );
  //jansy
  $(document).click( function(event){
      if(($(event.target).closest(".in").length > 0) || ($(event.target)))
      return;
      $(".navmenu-fixed-left").offcanvas('hide');
      event.stopPropagation();
    });

  //form
  $('.phoneMask').livequery(function(){
        $(this).mask("+7 (999) 999-99-99");
    });
    var validate_rules = { 
        "phone":{
            required: true,
            pattern: '[0-9]+$',
        },
        "name":{
            required: true,
        },

    };
    $(".formAjax").livequery(function(){
      $(this).validate({
        rules:validate_rules,
        messages:'',
      });
    });

    $(document).on('click', '.formAjax-button', function(){
      var form = $(this).closest('form');
        if(form.valid()){
          $.ajax({  
            type: 'GET',
            url: form.attr('action'),  
            data: form.serialize(), 
            success: function(html_res){
              if(html_res == 'success'){
                if(form.hasClass('regForm')){
                  window.location.replace('regFinish.php');
                }
                else{
                  form.get(0).reset();
                  $.fancybox(formSucc);
                }
              }
              else if(html_res == 'required'){
                $.fancybox(formReq);
              }

              else{
                $.fancybox(formErr);
              }
            },
          });
        }
        return false;
    });

    //fancybox
    $('.fancy').fancybox({padding:[30,30,30,30]});

  //owl slider
  var owl = {
    loop: true,
    items : 1,
  };
  var owlBase = $.extend({},owl,{
    items : 4,
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1230:{
                        items:4
                    },
    }
  });
  var owlSingle = $.extend({},owl,{
    //autoplay:true,
    dots: false,
  });
  var owlThumbs = $.extend({},owl,{
    dots: false,
    thumbs: true,
    thumbsPrerendered: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs hidden-xs hidden-sm',
  });
  $(".j-owlCarousel").owlCarousel(owlBase);
  $(".j-owlCarouselSingle").owlCarousel(owlSingle);
  $(".j-owlCarouselThumbs").owlCarousel(owlThumbs);

});//end ready


