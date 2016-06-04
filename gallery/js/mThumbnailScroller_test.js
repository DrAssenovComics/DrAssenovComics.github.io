(function($){
	$(window).load(function(){
		
		$("#art-1").mThumbnailScroller({
			callbacks:{
				onInit:function(){
					var $this=$(this);
					$("#si").text("true");
					setTimeout(function(){ $this.addClass("scroller-ready"); },300); //optional timeout
				}
			}, 
			theme:"buttons-out",	
			type:"hover-50",
							
		});
		
		

		
			
	});


	$("#pop01").on("click", function(e) {
		e.preventDefault();
		$('#pop01-modal').modal('toggle');
	});			
				
				
})(jQuery);