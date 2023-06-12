/*slider*/

jQuery(document).ready(function(){
			jQuery('#slide-part').skdslider({delay:5000, animationSpeed: 2000,showNextPrev:true,showPlayButton:true,autoSlide:true,animationType:'fading'});
			
			jQuery('#responsive').change(function(){
			  $('#responsive_wrapper').width(jQuery(this).val());
			  $(window).trigger('resize');
			});
			
			var imgSize = $('#slide-part li img').height();
			$('.skdslider').css('height', imgSize);
			console.log(imgSize);
			
		});
		/*slider end*/
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

//search bsr js
( function() {
	$('#btn-search').on('click', function(e) {

		e.preventDefault();
		$('#search').animate({width: 'toggle'}).focus();

	});

} () );

/*Droup down*/	
( function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);

/*Droup down end*/

 //search bsr end js
  // function buttonUp(){
         // var valux = $('.sb-search-input').val(); 
            // valux = $.trim(valux).length;
            // if(valux !== 0){
                // $('.sb-search-submit').css('z-index','99');
            // } else{
                // $('.sb-search-input').val(''); 
                // $('.sb-search-submit').css('z-index','-999');
            // }
    // }
	// $(document).ready(function(){
        // var submitIcon = $('.sb-icon-search');
        // var submitInput = $('.sb-search-input');
        // var searchBox = $('.sb-search');
        // var isOpen = false;
        
        // $(document).mouseup(function(){
            // if(isOpen == true){
            // submitInput.val('');
            // $('.sb-search-submit').css('z-index','-999');
            // submitIcon.click();
            // }
        // });
        
        // submitIcon.mouseup(function(){
            // return false;
        // });
        
        // searchBox.mouseup(function(){
            // return false;
        // });
                
        // submitIcon.click(function(){
            // if(isOpen == false){
                // searchBox.addClass('sb-search-open');
                // isOpen = true;
            // } else {
                // searchBox.removeClass('sb-search-open');
                // isOpen = false;
            // }
    // });

// });


		
		/*Scroll-------1*/
		(function($){
			$(window).on("load",function(){
				
				$("a[rel='load-content']").click(function(e){
					e.preventDefault();
					var url=$(this).attr("href");
					$.get(url,function(data){
						$(".content .mCSB_container").append(data); //load new content inside .mCSB_container
						//scroll-to appended content 
						$(".content").mCustomScrollbar("scrollTo","h2:last");
					});
				});
				
				$(".content").delegate("a[href='top']","click",function(e){
					e.preventDefault();
					$(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
				});
				
			});
		})(jQuery);
		/*Scroll-------1 end*/
		
		/*Scroll-------2*/
			(function($){
			$(window).on("load",function(){
				
				var content=$(".content-1"),autoScrollTimer=10999,autoScrollTimerAdjust,autoScroll;
				content.mCustomScrollbar({
					scrollButtons:{enable:true},
					callbacks:{
						whileScrolling:function(){
							autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
						},
						onScroll:function(){ 
							if($(this).data("mCS").trigger==="internal"){AutoScrollOff();}
						}
					}
				});
				
				content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
				AutoScrollOn("bottom");
				
				$(".auto-scrolling-toggle").click(function(e){
					e.preventDefault();
					if(content.hasClass("auto-scrolling-on")){
						AutoScrollOff();
					}else{
						if(content.hasClass("auto-scrolling-to-top")){
							AutoScrollOn("top",autoScrollTimerAdjust);
						}else{
							AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
						}
					}
				});
				
				function AutoScrollOn(to,timer){
					if(!timer){timer=autoScrollTimer;}
					content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"easeInOutSmooth"});
					autoScroll=setTimeout(function(){
						if(content.hasClass("auto-scrolling-to-top")){
							AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
							content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
						}else{
							AutoScrollOn("top",autoScrollTimerAdjust);
							content.removeClass("auto-scrolling-to-bottom").addClass("auto-scrolling-to-top");
						}
					},timer);
				}
				
				function AutoScrollOff(){
					clearTimeout(autoScroll);
					content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
				}
				
			});
		})(jQuery);
		
			/*Scroll--------2*/
			
			
			
			/*gallery*/
		
		$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,3],
        itemsMobile : [420,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});
			/*/*gallery*/
			
			
	/*testimomal*/		
			'use strict'
var	testim = document.getElementById("testim"),
	testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
	/*testimomal end*/	
	