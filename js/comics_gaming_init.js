$(document).ready(function() {

    // function checkURL(urlname){
    //   $.ajax({
    //     type: "POST",
    //     url: urlname,
    //     success: function (response) {
    //         //session refreshed
    //         console.log("success for "  + urlname);
    //     },
    //     error: function (xhr, ajaxOptions, thrownError) {
    //       if(xhr.status==403) {
    //           console.log("links dead yo " + urlname);
    //       }
    //     }
    //   });
    // };
    // function sendXHR(type, url, data, callback) {
    //     var newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
    //     newXHR.open(type, url, true);
    //     newXHR.send(data);
    //     newXHR.onreadystatechange = function() {
    //         if (this.status === 200 && this.readyState === 4) {
    //             callback(this.response);
    //         }
    //     };
    // };

    // sendXHR("GET", "https://s3.amazonaws.com/cdn.drassenov.com/img/comics/lonestar/resource/bios/Randy+bio.txt", null, function(response) { // response contains the content of the description.txt file.
    //     document.getElementById("characterbio_descr").innerHTML = response; // Use innerHTML to get or set the html content.
    // });

    console.clear();
    var totalpages = 85;
    for (var i = 0; i < totalpages + 1; i++) {
        // Lonestar
        var urlname_full_start = "https://s3.amazonaws.com/cdn.drassenov.com/img/comics/lonestar/full/LSCH1_page"
        // FFVII
        // var urlname_full_start = "https://s3.amazonaws.com/cdn.drassenov.com/img/comics/ff7aeriseph/full/FFVIIpg"
        var urlname_full_pagenumber = ("0" + i).slice(-4);
        var urlname_full_pagenumber = ('000' + i).substr(-3)
        var urlname_full_end = ".jpg"
        var urlname_full = urlname_full_start.concat(urlname_full_pagenumber, urlname_full_end);
        console.log(urlname_full);
        // checkURL(urlname_full);
        // var urlname_full = "https://i.imgur.com/DMqiH71.jpg"


        // Create Image Div
        var imgitemwrap = document.createElement("div");
        imgitemwrap.className = "swiper-slide";
        var imgitemwrapinner = document.createElement("div");
        imgitemwrapinner.className = "swiper-zoom-container";
        var img_inner = document.createElement("img");
        img_inner.setAttribute("src", urlname_full);
        img_inner.setAttribute("height", "100%");
        img_inner.setAttribute("align", "middle");
        imgitemwrapinner.appendChild(img_inner);
        imgitemwrap.appendChild(imgitemwrapinner);

        // Create Thumbnail Div
        var thumbwrap = document.createElement("div");
        thumbwrap.className = "swiper-slide";
        var thumb_img = document.createElement("img");
        thumb_img.setAttribute("src", urlname_full);
        thumb_img.setAttribute("height", "100%");
        thumb_img.setAttribute("align", "middle");
        thumbwrap.appendChild(thumb_img);
        document.getElementById("swiper-wrapper").appendChild(imgitemwrap);
        document.getElementById("swiper-wrapper-thumb").appendChild(thumbwrap);

    }

    var galleryTop = new Swiper('.gallery-top', {
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true,
        },
        spaceBetween: 10,
        zoom: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
});