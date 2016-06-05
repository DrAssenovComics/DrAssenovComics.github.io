

var soslick = function() {

/*
  	$('.your-class').slick({
  		setting-name: setting-value
  	});
*/  
/* 	
	$('.single-item').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}); 
*/
	
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	  //lazyLoad: 'progressive',
	  infinite: false,
	});
	
	$('.slider-nav').slick({
	  slidesToShow: 8,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  centerPadding: '60px',
	  focusOnSelect: true,
	  //lazyLoad: 'progressive',
	  swipe: true,
	  swipeToSlide: true,
	  infinite: false,
	  arrows: true,
	  draggable: true,

	 /*  prevArrow: "<h1><span class='glyphicon glyphicon-chevron-left white'></span></h1>",*/
	 /*  nextArrow: "<h1><span class='glyphicon glyphicon-chevron-right white'></span></h1>",*/
	
		prevArrow:'<a class="slick-prev"><span class="glyphicon glyphicon-chevron-left"></span></a>',
		nextArrow:'<a class="slick-next"><span class="glyphicon glyphicon-chevron-right"></span></a>',


	 /*prevArrow: "<button type='button' class='slick-prev'>Previous</button>", */
	 /*nextArrow: "<button type='button' class='slick-next'>Next</button>",*/
	 
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			
		  }
		}

	  ]
	});

	

	// afterChange slide change
	$('.slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  console.log(currentSlide);
	  current_slide = currentSlide;
	});   

	
	var el = document.getElementById("buttonFirstPage");
	if (el.addEventListener)
		el.addEventListener("click", gotoFirstPage, false);
	else if (el.attachEvent)
		el.attachEvent('onclick', gotoFirstPage);
	
	var el = document.getElementById("buttonLastPage");
	if (el.addEventListener)
		el.addEventListener("click", gotoLastPage, false);
	else if (el.attachEvent)
		el.attachEvent('onclick', gotoLastPage);
  
};

$(window).load(soslick);

var current_slide = 0;
var counter = 0;

var index_firstpage = 0;
var index_lastpage = 81;

function doFunction(){
	console.log("doFunction: " + counter);
	counter++;
}

function gotoFirstPage(){
	console.log("gotoFirstPage");
	$('.slider-for').slick('slickGoTo', index_firstpage, "false");
}

function gotoLastPage(){
	console.log("gotoLastPage");
	$('.slider-for').slick('slickGoTo', index_lastpage, "false");
}