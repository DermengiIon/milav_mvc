$(document).ready(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop()){
			$('nav').addClass('scroll');
		}
		else{
			$('nav').removeClass('scroll');
		}
	});

// Back to Top
var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.back-to-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('bkt-is-visible') : $back_to_top.removeClass('bkt-is-visible bkt-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('bkt-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
// End Back to Top


//  Services
    $('.services-more').click(function(){      
	$(this).closest('.services-item').find('.more').toggle();
    });
// End Services


// Contact Buttons
$(window).on('scroll', function(){
	var y = $(window).scrollTop(),
	translateY = y - 194;
	$('.contact-buttons').css({'transform':'translateY('+translateY+'px)'});
});
// End Contact Buttons


	// Section Portfolio
	$(".li-portfolio.item1 .plus").click(function(){
		var boxTop = $(window).scrollTop();
		$("body").append("<div class='box'></div>");
		$("div.box").css({'top':boxTop});
		$("div.box").append("<div class='imgbox'></div>");
		$("div.imgbox").css({'background':'url(../../public/img/curateniePromotion.jpg) no-repeat center','background-size':'cover'});
		$("div.imgbox").append("<div class='closebox'></div>");
	});
	$(".li-portfolio.item2 .plus").click(function(){
		var boxTop = $(window).scrollTop();
		$("body").append("<div class='box'></div>");
		$("div.box").css({'top':boxTop});
		$("div.box").append("<div class='imgbox'></div>");
		$("div.imgbox").css({'background':'url(../../public/img/villanyTelepPromotion.jpg) no-repeat center','background-size':'cover'});
		$("div.imgbox").append("<div class='closebox'></div>");
	});
	$(".li-portfolio.item3 .plus").click(function(){
		var boxTop = $(window).scrollTop();
		$("body").append("<div class='box'></div>");
		$("div.box").css({'top':boxTop});
		$("div.box").append("<div class='imgbox'></div>");
		$("div.imgbox").css({'background':'url(../../public/img/artfoyerPromotion.jpg) no-repeat center','background-size':'cover'});
		$("div.imgbox").append("<div class='closebox'></div>");
	});
	$(".li-portfolio.item4 .plus").click(function(){
		var boxTop = $(window).scrollTop();
		$("body").append("<div class='box'></div>");
		$("div.box").css({'top':boxTop});
		$("div.box").append("<div class='imgbox'></div>");
		$("div.imgbox").css({'background':'url(../../public/img/activRelaxPromotion.jpg) no-repeat center','background-size':'cover'});
		$("div.imgbox").append("<div class='closebox'></div>");
	});
	$(".li-portfolio.item5 .plus").click(function(){
		var boxTop = $(window).scrollTop();
		$("body").append("<div class='box'></div>");
		$("div.box").css({'top':boxTop});
		$("div.box").append("<div class='imgbox'></div>");
		$("div.imgbox").css({'background':'url(../../public/img/egeszenPromotion.jpg) no-repeat center','background-size':'cover'});
		$("div.imgbox").append("<div class='closebox'></div>");
	});
	$(document).on('click', ".closebox", function(){
		$("div.box").remove();
	});	

// End Section Portfolio


//Typing Text Animation

var textOpts = ['If your primary goal is to boost your productivity and competitiveness','If you expect your software to be worked with hand in hand with your best ideas','If you are looking for a perfect work flow in your company and dream of a minimization of the work load of recurrent tasks','If you expect your software architecture to be tailored to your most attractive company’s public profile and to be easily maintained in','If you plan to hire responsible top software developers who never say "no" or "not possible" when challenged with clearly defined task'],
timeOut,
len = textOpts.length,
$writer = $('#writer'), 
currentValue = 0, charVal = 0,
cursor = '<span class="cursor">|</span>',
lengths = [];

$.each(textOpts, function( index, value ) {
	lengths.push( value.length );
});

function typeAnimationIt() {
	var humanize = Math.round(Math.random() * (200 - 30)) + 30;
	timeOut = setTimeout(function() {
		charVal++;
		var	txtLen = lengths[currentValue],
		type = textOpts[currentValue].substring(0, charVal);
		$writer.html(type + cursor);
		typeAnimationIt();
		if(charVal == txtLen) {
			clearTimeout(timeOut);
			if(currentValue < len - 1) {
				setTimeout(function() {
					typeAnimationDelete();
				}, 1000);
			}
			if(currentValue == len-1){
				currentValue=-1;
				charVal =1;
				setTimeout(function() {
					typeAnimationDelete();
				}, 1000);
			}

		}
	}, humanize);

}

function typeAnimationDelete() {
	var humanize = Math.round(Math.random() * (200 - 30)) + 30;
	timeOut = setTimeout(function() {
		charVal--;
		if(currentValue >-1){
			var	type = textOpts[currentValue].substring(0, charVal);
			$writer.html(type + cursor);
			typeAnimationDelete();
		}

		if(charVal == 0) {
			clearTimeout(timeOut);
			currentValue++;
			setTimeout(function() {
				typeAnimationIt();
			}, 1000);
		}
	}, humanize);
}
typeAnimationIt();
//End Typing Text Animation


// Owl carousel

 $(".owl-carousel").owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	dots: false,
	navContainer: $('.slider-nav'),
	navText: ['<','>'],
	smartSpeed: 1000,
	autoplayTimeout: 10000,  
});
// End Owl carousel


// Contact
$('.form #name').focus(function(){
  $('.form .left-bar').css({'transform' : 'translateY(0px)'});
});

$('.form #name').focusout(function(){
 if($('.form #name').val().length < 1 || !/^[a-zA-Z ]+$/.test($('.form #name').val())){
    $('#name').addClass('not-valide').removeClass('valide');
    $('label[for=name]').addClass('not-valide').removeClass('valide');
  }else{
  	 $('#name').addClass('valide').removeClass('not-valide');
    $('label[for=name]').addClass('valide').removeClass('not-valide');
  }
});

$('.form #email').focus(function(){
  $('.form .left-bar').css({'transform' : 'translateY(128px)'});
});

$('.form #email').focusout(function(){
	var email = $('.form #email').val();
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	  	if (email == '' || !re.test(email)){
	  		$('#email').addClass('not-valide').removeClass('valide');
	        $('label[for=email]').addClass('not-valide').removeClass('valide');
        } else {
            $('#email').addClass('valide').removeClass('not-valide');
            $('label[for=email]').addClass('valide').removeClass('not-valide');
	    }  	
});
$('.form #message').focus(function(){
  $('.form .left-bar').css({'transform' : 'translateY(256px)'});
});
$('.form #message').focusout(function(){
 if($('.form #message').val().length < 1){
    $('#message').addClass('not-valide').removeClass('valide');
    $('label[for=message]').addClass('not-valide').removeClass('valide');
  }else{
  	 $('#message').addClass('valide').removeClass('not-valide');
    $('label[for=message]').addClass('valide').removeClass('not-valide');
  }
});

$('#contact-form').submit(function(e) {
	e.preventDefault();

	var nameValide = false;
    var emailValide = false;
    var textValide = false;

    if($('#name').hasClass('valide')){
    	nameValide = true;
    }else{
    	$('#name').addClass('not-valide');
    	$('label[for=name]').addClass('not-valide');	
    }
    
    if($('#email').hasClass('valide')){
    	emailValide = true;
    }else{
    	$('#email').addClass('not-valide');
    	$('label[for=email]').addClass('not-valide');
    }
    
    if($('#message').hasClass('valide')){
    	textValide = true;
    }else{
    	$('#message').addClass('not-valide');
    	$('label[for=message]').addClass('not-valide');
    }

    if(nameValide == true && emailValide == true && textValide == true){
    
	    var formdata = new FormData();
		formdata.append( "name", $('#name').val());
		formdata.append( "email",$('#email').val() );
		formdata.append( "message",$('#message').val() );
		var ajax = new XMLHttpRequest();
		ajax.open( "POST", 'contact');
		
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4 && ajax.status == 200) {
			
				var response = JSON.parse(ajax.response);

				$('#name').val('').removeClass('valide');
				$('#email').val('').removeClass('valide');
				$('#message').val('').removeClass('valide');
				$('label[for=name]').removeClass('valide');
				$('label[for=email]').removeClass('valide');
				$('label[for=message]').removeClass('valide');

				 if(!response.success){
				 	$('#contact-form').prepend("<h1 id='result' style='text-align:center;margin:0px; color: red;font-size:32px;'>" + response.errorMsg + "</h1>"); 
				 }
				 else{
					$('#contact-form').prepend("<h1 id='result' style='text-align:center;margin:0px; color: green;font-size:32px;'>Thank you</h1>"); 

					setTimeout(function(){
						$('#contact-form #result').hide(); 
					}, 4000);
				 }
			
		  }
		}

		ajax.send(formdata);
    }
});

// End Contact

});
/******************************************** JAVASCRIPT ********************************************/
window.onload = function(){

	/* Opened Menu */

	(function(){
		var opened = document.querySelector('.burger-container'),
		nav = document.querySelector('nav');

		opened.onclick = function() {
			nav.classList.toggle('nav-opened');
		}
	}());

	/* End Opened Menu */

	/* Slider animate*/

	const imgs = document.querySelectorAll(".slider img");
	let currentIndex = 0;
let time = 5000; // default time for auto slideshow

const defClass = (startPos, index) => {
	for (let i = startPos; i < imgs.length; i++) {
		imgs[i].style.display = "none";
	}
	imgs[index].style.display = "block";
};

defClass(1, 0);

const startAutoSlide = () => {
	setInterval(() => {
		currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
		defClass(0, currentIndex);
	}, time);
};

startAutoSlide(); // Start the slideshow

/*End Slider animate*/

/*Canvas animate */
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
var colorArray =[
'#FFFFFF',
'#CACBD5',
'#666F89',
'#3D4252',
'#D55E2D',
];

function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color= colorArray[Math.floor(Math.random() * colorArray.length)];
	this.draw = function (){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2 ,false);
		c.stroke();
		c.fillStyle=this.color;
		c.fill();
	}
	this.update = function (){
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx=-this.dx;
		}
		if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy=-this.dy;
		}
		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
	}
}
var circleArray = [];
function init(){
	circleArray = [];
	for (var i = 0; i < 100; i++) {
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5);
		var dy = (Math.random() - 0.5);
		var radius = Math.random()*3+1;
		circleArray.push(new Circle(x,y,dx,dy,radius));

	}
}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight); 	
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}
animate();
init();
} 
/*End Canvas animate*/
