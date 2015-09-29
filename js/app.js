$(document).ready(function(){
	
	factor_x = ($(window).width())  / 1980;
	factor_y = ($(window).height()) / 1080;

	$('html').css("transform","scale("+factor_x+","+factor_y+")");  
	//For Firefox
	$('html').css("-moz-transform","scale("+factor_x+","+factor_y+")"); 
	      
	//For Google Chrome
	$('html').css("-webkit-transform","scale("+factor_x+","+factor_y+")");

	//For Opera
	$('html').css("-o-transform","scale("+factor_x+","+factor_y+")");
	
	
	var nav_menu_shown = true;
	var $nav_menu = $("#categories");
	var $nav_bar = $(".nav_bar")
	var $scrolling = false;
	

	$nav_bar.hover(function() {
    	$nav_menu.stop().animate({ "font-size": "36px" }, 500);
    	$nav_bar.stop().animate({ "height": "50px" }, 500);
	}, function() {
    	$nav_menu.stop().animate({ "font-size": "34px" }, 500);
    	$nav_bar.stop().animate({ "height": "46px" }, 500);
	});
});