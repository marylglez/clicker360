jQuery(document).ready(function($) {

	$('#myCarousel').carousel({
    interval: 3000
     , pause: 'hover'

});
    //NAVIGATION - SETUP
    //========================================
    $('nav#menu ul li a').click(function(){
        
        var ScrollOffset = '80';
        
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 2000,
            easing: "easeInOutExpo"
        });
        return false;
    });

    $('.sticky-menu li a').click(function(){
        
        var ScrollOffset = '80';
        
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 2000,
            easing: "easeInOutExpo"
        });

        $('.sticky-menu li a').removeClass('active');
        $(this).addClass('active');

        return false;
    });
    

    $('.logo-holder a').click(function(){
        
        var ScrollOffset = '0';
        
        $("html, body").animate({
            scrollTop: $('body').offset().top-ScrollOffset + "px"
        }, {
            duration: 2000,
            easing: "easeInOutExpo"
        });
        return false;
    });


    $('#sticky-menu li').each(function(){
        var opt_value = $(this).children('a').attr('href');
        var opt_txt = $(this).children('a').html();
        $('#tinynav').append('<option value="'+opt_value+'">'+opt_txt+'</option>');
    });

    $('#tinynav').live('change',function(){
        var ScrollOffset = '80';
        
        $("html, body").animate({
            scrollTop: $($(this).val()).offset().top-ScrollOffset + "px"
        }, {
            duration: 2000,
            easing: "easeInOutExpo"
        });
    });

   

    //====
    //END


    $('#splash-intro').waypoint(function (event, direction) {
        if (direction === 'down') {
            $('.sticky-nav').slideDown(500);
        } else {
            $('.sticky-nav').slideUp(500);
        }
    });

    var page_stack = $.makeArray();
    var stack_top = 0;

    $('.page-section').waypoint(function (event, direction) {
        if (direction === 'down') 
        {
            $('.sticky-menu li a').removeClass('active');
            $('.sticky-menu li a[href=#'+$(this).attr('id')+']').addClass('active'); 
            stack_top = stack_top+1; 
            page_stack[stack_top] = $(this).attr('id');
            
        } 
        else 
        {
            stack_top = stack_top-1;
            $('.sticky-menu li a').removeClass('active');
            $('.sticky-menu li a[href=#'+page_stack[stack_top]+']').addClass('active');
            
        }
    },{ offset: 100 });
    


     
    $(function() {
		$('#sti-menu').iconmenu();
	});

    var initPieChart = function() {
        $('.percentage').easyPieChart({
            animate: 1000,
            lineCap: 'butt',
            scaleColor: false,
            trackColor: '#DDD',
            size: 150,
            lineWidth: 10,
            onStep: function(value) {
                this.$el.find('span').text(~~value+1);
            }
        });
    };

    $(window).load(function(){
        initPieChart();
    });

    //EXPANDING GRID - EXTENDED WITH FILTERING
    //========================================
        $('#filters a').click(function(){
            //alert('hai');
            $('#filters a').removeClass('active');
            $(this).addClass('active');
            var filterIndex = $(this).data('option-value');
            setTimeout(function() {
                $('.filter-grid li').addClass('scale-out');
            }, 200);
            setTimeout(function() {
                // code will happen after the timeout has completed
                $('.filter-grid li:not(.'+filterIndex+')').fadeOut(400);
                setTimeout(function() {
                $('.'+filterIndex).fadeIn(400).removeClass('scale-out').addClass('scale-in');
                }, 400);
            }, 400); // 1 second

            return false;
            
        });
    //====
    //END


    $(".fancybox").fancybox({
        padding: 0,
        
        openEffect : 'elastic',
        openSpeed  : 500,
        
        closeEffect : 'elastic',
        closeSpeed  : 500,
        
        closeClick : true,
        
        helpers : {
        overlay : true
        }
    });


    
    

    $(window).load(function(){

        var $container = $('#blog_grid');
        // initialize
        $container.masonry({
          gutter: 0,
          itemSelector: '.blog-item'
        });

    });

    

    //MAP LINK CHANGE THIS TO YOURS
    var map_link = 'https://www.google.com/maps?q=Plat%C3%B3n+418+Piso+1,+Col.+Polanco,+Miguel+Hidalgo,+M%C3%A9xico+D.F.,+11550&hl=en&ie=UTF8&ll=19.431671,-99.203319&spn=0.011716,0.01929&sll=19.431671,-99.203319&sspn=0.187461,0.308647&hnear=Plat%C3%B3n+418,+Polanco,+Miguel+Hidalgo,+Ciudad+de+M%C3%A9xico,+Distrito+Federal,+Mexico&t=m&z=16&layer=c&cbll=19.431671,-99.203319&panoid=tZXs8us_ClKtbmFhnhK47w&cbp=12,83.32,,1,0';
    $('.map-wrap').append('<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'+map_link+'&output=embed"></iframe>');

    

    $('#contactForm').submit(function(){
     
        
        $.ajax({
        type: $("#contactForm").attr('method'),
        url: $("#contactForm").attr('action'),
        data: $("#contactForm").serialize(),
        success: function(data) {
        if(data == 'success')
        {
            $('#contactForm').each (function(){
                this.reset();
            });
            $('.launch_modal').trigger("click");
          
        }
        else
        {
          $("#infomsg").fadeIn();
          $('#infomsg').html("Oops! Something went wrong!");
        }

        }
        });
        return false;
    });


     

    
});