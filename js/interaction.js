// console.clear();

window.onload = function() {
    console.log("Welcome to this DRASSENOV Comics");
    

};


$(document).ready(function() {

    $(".title").toggleClass('showtitle');
    $(".comicstitle").toggleClass('showtitle');
    $(".pagebanner").toggleClass('showtitle');
    
    
    var img3 = $('.img3');
    var img2_5 = $('.img2_5');
    var img2 = $('.img2');
    var img1 = $('.img1');
    var imgset = $('.imgset');
    var imgsetbg = $('.imgsetbg');
    var overlay = $('.overlaytext');
    overlay.mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 60);
        var amountMovedY = (e.pageY * -1 / 60);
        imgset.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
        });
    });
    overlay.mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 40);
        var amountMovedY = (e.pageY * -1 / 40);
        imgsetbg.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
        });
    });
    overlay.mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 10);
        var amountMovedY = (e.pageY * -1 / 10);
        img3.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
        });
    });
    overlay.mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 20);
        var amountMovedY = (e.pageY * -1 / 20);
        img2_5.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
        });
    });
    overlay.mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 30);
        var amountMovedY = (e.pageY * -1 / 30);
        img2.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
        });
    });
    overlay.mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 40);
        var amountMovedY = (e.pageY * -1 / 40);
        img1.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
        });
    });

    $('#news').click(function(e) {
        // $(".homepage").css("left", "-50%");
        // $(".homepage").animate({
        //     left: "-100%"
        // }, { duration: "600" }, function() {
        //     // Animation complete.
        // });
        $(".newspage").animate({
            right: "-00%"
        }, { duration: "600" }, function() {
            // Animation complete.
        });
    });

    $('#newspage_back').click(function(e) {
        // $(".homepage").css("left", "-50%");
        // $(".homepage").animate({
        //     left: "-0%"
        // }, { duration: "600" }, function() {
        //     // Animation complete.
        // });
        $(".newspage").animate({
            right: "-500px"
        }, { duration: "600" }, function() {
            // Animation complete.
        });
    });



    // Lonestar Comic - Character Description Control

    $('#navigationmobiletoggle').click(function(e) {
        $(".navigationmobile").toggleClass('navigationmobileopen');
    });


    
    // ffvii character bios
    $('#ffvii-cs_item-1').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Morbi leo risus, porta ac consectetur ac, vestibulum.";
    });
    $('#ffvii-cs_item-2').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Nullam id dolor id nibh ultricies vehicula ut id elit.";
    });
    $('#ffvii-cs_item-3').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam.";
    });
    $('#ffvii-cs_item-4').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Vestibulum id ligula porta felis euismod semper.";
    });
    $('#ffvii-cs_item-5').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.";
    });
    $('#ffvii-cs_item-6').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Etiam porta sem malesuada magna mollis euismod.";
    });


});