$(document).ready(function() {
    console.clear();
    // lonestar character bios
    document.getElementById('lonestar-cs_item-1').style.backgroundImage = "url('https://s3.amazonaws.com/cdn.drassenov.com/img/comics/lonestar/resource/bios/avatar_greg.jpg')";
    $('#lonestar-cs_item-1').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "sdasdasd.";
    });
    $('#lonestar-cs_item-2').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Nullam id dolor id nibh ultricies vehicula ut id elit.";
    });
    $('#lonestar-cs_item-3').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam.";
    });
    $('#lonestar-cs_item-4').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Vestibulum id ligula porta felis euismod semper.";
    });
    $('#lonestar-cs_item-5').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.";
    });
    $('#lonestar-cs_item-6').click(function(e) {
        document.getElementById("characterbio_descr").innerHTML = "Etiam porta sem malesuada magna mollis euismod.";
    });
    // This script is specific to the Lonestar Page
    $("#content-slider").lightSlider({
        loop: false,
        keyPress: true
    });

    // Enter total number of pages of current comic
    var totalpages = 88;
    // Loop will generate pages from custom url
    for (i = 0; i < totalpages+1; i++) {
        // Enter image url path before page number
        // --------------------------------------
        var urlname_full_start = "https://s3.amazonaws.com/cdn.drassenov.com/img/comics/lonestar/full/LSCH1_page"
        // var urlname_full_pagenumber = ("0" + i).slice(-4);
        var urlname_full_pagenumber = ('000' + i).substr(-3)
        var urlname_full_end = ".jpg"
        var urlname_full = urlname_full_start.concat(urlname_full_pagenumber, urlname_full_end);
        console.log(urlname_full);
        // Manual
        // --------------------------------------
        // var urlname_full = "img/1.jpg";


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
        
        
        // onSliderLoad: function (el) {
        // var src_img = el.find('li img').first().attr('data-img');
        // el.find('li img').first().attr('src', src_img);

        // },
        // onAfterSlide: function (el) {
        // console.log(el);
        // var src_img = el.find('li.active img').attr('data-img');
        // el.find('li.active img').attr('src', src_img)
        // },

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