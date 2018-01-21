$(function(){
	
	//go setup the slick carousel objects
	$(window).load(slick_init);
	
	var gotoSection = function(name) {
		$('.navbar.hidden').removeClass('hidden');
		
		// set ajax-link to active
		$('.ajax-link').removeClass('active').parent('li').removeClass('active');
		
		var section = name.replace(/-.*$/, '');
		
		$('.ajax-link[href='+section+']').addClass("active").parent('li').addClass('active');
		
		// hide previous active sections
		$('section.active').removeClass("active");
		
		// show the active section
		$('section#' + name).addClass("active").fadeIn();
	};
	
	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
		
		gotoSection(State.url.replace(/^.*\?/, ''));
		
		if(href == "comics-lonestar"){ //special case for comic page
			slick_workaround();
		}
		
    });
	
	$('.ajax-link').click(function() {
		
		var $link = $(this);
		
        var href = $link.attr('href');
		var title = $link.data('title');
		
        if (!$link.hasClass("active")) {
			
			History.pushState(null,title,"?" + href);
			gotoSection(href);
		
			if(href == "comics-lonestar"){ //special case for comic page
				slick_workaround();
			}
			
		}
		
        return false;
    });
	
    var href = window.location.search.replace(/^\?/, '');
	
	if(href){
		
		gotoSection(href);
		
		if(href == "comics-lonestar"){ //special case for comic page
			slick_workaround();
		}
	}
	


});