
$(function(){

	var bgcanvas = document.getElementById("bgCanvas");
	var context = bgcanvas.getContext("2d");
	var image;
		
	var main = document.getElementById("splash-content");
	
	var opacity = 0.1;
	var timerid;

	function drawbg(){
	
		context.globalCompositeOperation = "source-over";
		
		image = new Image();
		//image.src = "images/main_bg_files/earth2BIG.jpg";
		image.src = "https://s3.amazonaws.com/cdn.drassenov.com/img/splash/earth2BIG3.png";
		// 4800
		// 2700
		
		//bgcanvas.height = window.screen.height;
		//bgcanvas.width = window.screen.width;
		
		bgcanvas.height = window.screen.height;
		bgcanvas.width = window.screen.width;
		
		if(bgcanvas.height < 600){
			bgcanvas.height = 600;
		}
		
		if(bgcanvas.width < 800){
			bgcanvas.width = 800;
		}
		
		image.onload = function() {		
			//context.drawImage(image, 0, 0, bgcanvas.width, bgcanvas.height);
			//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
			var iheight = image.height;
			var iwidht = image.width;
			
			context.drawImage(image, 0, 0, 1920, 1080, -50, -50, bgcanvas.height, bgcanvas.width);
		}
		
		context.globalAlpha = opacity;
		
	};
	
	function fadeinbg(){
		
		opacity += 0.01;
			
		context.drawImage(image, 0, 0, bgcanvas.width, bgcanvas.height);

		main.style.opacity = opacity * 4.0;
		
		context.globalAlpha = opacity; 
		//console.log(context.globalAlpha);
		
		if(opacity > 1.0){
			clearInterval(timerid);
		}

	};

	drawbg();

	timerid = setInterval(fadeinbg, 60)
	

	function draw(e) {
		var pos = getMousePos(bgcanvas, e);
		posx = pos.x;
		posy = pos.y;
		
		//console.log(pos);
		
		posx = posx - bgcanvas.width/2;
		posy = posy - bgcanvas.height/2;
		
		//console.log(posx);
		//console.log(posy);
		
		bgcanvas.style.top  = -10 -posy * 0.015 + "px";
		bgcanvas.style.left = -10 -posx * 0.015 + "px";

	}
	window.addEventListener('mousemove', draw, false);

	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
		  x: evt.clientX - rect.left,
		  y: evt.clientY - rect.top
		};
	}
		
	//setInterval(getMousePos(), 100);
	
  
});








	
	
