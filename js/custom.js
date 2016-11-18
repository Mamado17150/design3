/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    //Trigger NiceScroll
    
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px soled #f7600e'
        
    });
    
    //Change Header Height
    
    $('.header').height($(window).height());
    
    // Scroll To Features
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
        
            scrollTop: $('.features').offset().top
            
        }, 700);
    
    });
    
    // Scroll To Our Work
    
    $('.work-button').click(function () {
    
        $('html, body').animate({
        
            scrollTop: $('.our-work').offset().top
            
        }, 700);
        
    });
    
    // Scroll To Our Team
    
    $('.hire-button').click(function () {
    
        $('html, body').animate({
        
            scrollTop: $('.our-team').offset().top
            
        }, 700);
        
    });
    
    // Show Hidden Items From Our Work
    
    $('.show-more').click(function () {
    
        $('.our-work .hidden').fadeIn(2000);
        
    });
    
    // Check Testimonials
    
    var rightArrow = $('.testi .fa-chevron-right'),
    
        leftArrow = $('.testi .fa-chevron-left');
        
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
    
    $('.testi i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testi .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
            
            });
            
        } else {
            
            $('.testi .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
            
            });
        
        }
        
    });
    
});