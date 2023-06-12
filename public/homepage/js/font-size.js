
// JavaScript Document
$(function () {
	if ($('body').hasClass('contrast'))
		var disclamer = parseInt($('.highchartseeded-axis text, .highchartseededCategory-axis text, .highchartscheme-axis text').attr('y')) + 80;
	$('.highchartseeded-axis text, .highchartseededCategory-axis text, .highchartscheme-axis text').attr('x', '70');
	$('.highchartseeded-axis text, .highchartseededCategory-axis text, .highchartscheme-axis text').attr('y', disclamer);
})

//Font-size increase and descrease
$(function () {


	/*$('h1').css("font-size","20px");
	$('h2').css("font-size","17px");
	$('h3').css("font-size","15px");
	$('h4').css("font-size","13px");
	$('h5').css("font-size","12px");
	$('h6').css("font-size","11px");
	$('body,a,input,textarea,select,td,th,p,span,ul,li').css("font-size", "13px");*/
	var size = parseInt($('a,input,textarea,select,td,th,p,span,ul,li').css("font-size"));
	var h1size = parseInt($('h1').css("font-size"));
	var h2size = parseInt($('h2').css("font-size"));
	var h3size = parseInt($('h3').css("font-size"));
	var h4size = parseInt($('h4').css("font-size"));
	var h5size = parseInt($('h5').css("font-size"));
	var h6size = parseInt($('h6').css("font-size"));
	//alert(size);

	$("ul.font-zoom li.round-icons a").bind("click", function () {
		//Manipulating font size of following HTML tag body,a,input,textarea,select,td,th,p,span,div

		if ($(this).hasClass("a-plus")) {
			// alert(size);
			size = size + 2;
			//alert(size);
			if (size >= 17) {
				size = 17;
			}
			$('a,input,textarea,select,label,td,th,p,ul,li').css("font-size", size);
		} else if ($(this).hasClass("a-minus")) {
			size = size - 1;
			if (size <= 12) {
				size = 12;
			}
			$('a,input,textarea,select,label,td,th,p,ul,li').css("font-size", size);
		} else if ($(this).hasClass("clsBold")) {
			// $('body').css("font-weight", "Bold");
		} else if ($(this).hasClass("clsItalic")) {
			// $('body').css("font-style", "italic");
		}
		else if ($(this).hasClass("a-normal")) {
			location.reload();
			//$('a,input,textarea,select,td,th,p,span,div,ul,li').css("font-size","");
			//$('body,a,input,textarea,select,td,th,p,span,div').css("font-style", "normal");
			//$('body,a,input,textarea,select,td,th,p,span,div').css("font-weight", "normal");
		}



		//Manipulating font size of H1 tag
		if ($(this).hasClass('a-plus')) {
			h1size = h1size + 2;
			if (h1size >= 36) {
				h1size = 36;
			}
			$('h1').css('font-size', h1size);
		}

		else if ($(this).hasClass('a-minus')) {
			h1size = h1size - 2;
			if (h1size <= 32) {
				h1size = 32;
			}
			$('h1').css("font-size", h1size);
		}

		else if ($(this).hasClass('a-normal')) {
			location.reload();
		}


		//Manipulating font size of H2 tag


		if ($(this).hasClass('a-plus')) {
			h2size = h2size + 2;
			if (h2size >= 26) {
				h2size = 26;
			}
			$('h2').css('font-size', h2size);
		}

		else if ($(this).hasClass('a-minus')) {
			h2size = h2size - 1;
			if (h2size <= 20) {
				h2size = 20;
			}
			$('h2').css("font-size", h2size);
		}

		else if ($(this).hasClass('a-normal')) {
			location.reload();
		}

		// if($(this).hasClass('a-plus')){
		// h2size = h2size + 2;

		// var h2maxsize=h2size+'4';
		// if (h2size >=h2maxsize){

		// //h2size = 22;
		// }
		// var h2sizes=h2size+" "+"!important";

		// $('h2').css({"font-size":h2sizes});
		// }
		// else if ($(this).hasClass('a-minus')){
		// h2size = h2size - 2;
		// if (h2size <=12){
		// h2size = 12;
		// } 
		// var h2sizes=h2size+" !important";
		// $('h2').css("font-size",h2sizes);
		// }

		// else if($(this).hasClass('a-normal')){

		// location.reload();
		// }


		//Manipulating font size of H3 tag
		if ($(this).hasClass('a-plus')) {
			h3size = h3size + 2;
			if (h3size >= 24) {
				h3size = 24;
			}
			$('h3').css('font-size', h3size);
		}

		else if ($(this).hasClass('a-minus')) {
			h3size = h3size - 1;
			if (h3size <= 18) {
				h3size = 18;
			}
			$('h3').css('font-size', h3size);
		}

		else if ($(this).hasClass('a-normal')) {
			location.reload();
		}

		//Manipulating font size of H4 tag
		if ($(this).hasClass('a-plus')) {
			h4size = h4size + 2;
			if (h4size >= 22) {
				h4size = 22;
			}
			$('h4').css('font-size', h4size);
		}

		else if ($(this).hasClass('a-minus')) {
			h4size = h4size - 1;
			if (h4size <= 16) {
				h4size = 16;
			}
			$('h4').css('font-size', h4size);
		}

		else if ($(this).hasClass('a-normal')) {
			location.reload();
		}

		//Manipulating font size of H5 tag
		if ($(this).hasClass('a-plus')) {
			h5size = h5size + 1;
			if (h5size >= 18) {
				h5size = 18;
			}
			$('h5').css('font-size', h5size);
		}

		else if ($(this).hasClass('a-minus')) {
			h5size = h5size - 1;
			if (h5size <= 14) {
				h5size = 14;
			}
			$('h5').css('font-size', h5size);
		}

		else if ($(this).hasClass('a-normal')) {
			location.reload();
		}

		//Manipulating font size of H6 tag
		if ($(this).hasClass('a-plus')) {
			h6size = h6size + 2;
			if (h6size >= 18) {
				h6size = 18;
				//h5size = 18;
			}
			$('h6').css('font-size', h6size);
		}

		else if ($(this).hasClass('a-minus')) {
			h6size = h6size - 1;
			if (h6size <= 12) {
				h6size = 12;
				//h5size = 12;					
			}
			$('h6').css('font-size', h6size);
		}

		else if ($(this).hasClass('a-normal')) {
			location.reload();
		}


		$('.video-list-thumbs a,.video-list-thumbs h2,ul.team-bottoma,.btn,a.btn li,a.btn-social,.related_Links h3,.related_Links ul li,.related_Links ul li a,.search-part ul,.inner-banner h2,.inner-banner ul li,.inner-banner ul li a,.top_header-part ul li, nav ul li,nav ul li a,.top_header-part ul li a, ul.font-zoom,.copy-right p,.slide-desc p,.slide-desc h2,.slide-desc p a,.count-part p.latest_update,.count-part p.latest_update span,.count-part p.vis_count,.box-content h3,.count-part p.vis_count span,.copy-right span a,.font-zoom,.social-mobile a,div.fund-cumulative,div.fund-cumulative span, ul.font-zoom li ,.skipContent ,ul.font-zoom li a, ul.font-zoom li select,.fundTransfer span, .fundTransfer h2,.fundTransferspan span, .fundTransferspan h2, .aadharbasepayment h2, .aadharbasepayment h2 span, .saving, .saving span, .department, .department span, .scheme, .scheme span,.navbar-brand span,.navbar-brand small,.logo-trti-title p,.logo-symbal a').css("font-size", "");
	});

});