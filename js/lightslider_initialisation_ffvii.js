$(document).ready(function() {
    // This script is specific to the FFVII Page
    $("#content-slider").lightSlider({
        loop: false,
        keyPress: true
    });

    // Enter total number of pages of current comic
    var totalpages = 10;
    // Loop will generate pages from custom url
    for (i = 0; i < totalpages; i++) {
        // Enter image url path before page number
        // --------------------------------------

        // var urlname_full_start = "https://s3.amazonaws.com/cdn.drassenov.com/img/comics/ff7aeriseph/full/FFVIIpg"
        // var urlname_full_pagenumber = ("00" + i).slice(-4);
        // var urlname_full_pagenumber = ('000' + i).substr(-3)
        // var urlname_full_end = ".jpg"
        // var urlname_full = urlname_full_start.concat(urlname_full_pagenumber,urlname_full_end);

        // Manual
        // --------------------------------------
        var urlname_full = "img/1.jpg";


        // Generates gallery
        var outerli = document.createElement("li");
        outerli.setAttribute("data-thumb", urlname_full);
        outerli.className = "imageaccess";
        var pageno = document.createElement("div");
        pageno.className = "pageno";
        var pagenumber = i + 1;
        pageno.innerHTML = "Panel Number: " + pagenumber + " / " + totalpages;
        outerli.appendChild(pageno);
        var img_inner = document.createElement("img");
        img_inner.setAttribute("src", urlname_full);
        outerli.appendChild(img_inner);
        document.getElementById("image-gallery").appendChild(outerli);
    }

    // Image gallery options
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,

        thumbItem: 9,
        slideMargin: 0,
        speed: 500,
        auto: false,
        pager: true,
        enableTouch: true,
        adaptiveHeight: true,
        loop: false,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
});