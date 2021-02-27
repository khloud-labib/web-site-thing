/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
        
    });
    
	
	
    // Change Header Height
    
    $('.header').height($(window).height());
    
   
    // Show Hidden Items From Work
    
    $('.show-more').click(function () {
       
        $('.our-work .hidden').fadeIn(1000);
        
    });
    
	
	
    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }
                
    }
    
    checkClients();
    
});