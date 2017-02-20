$(document).foundation();

//change .css(backgroundColor) to throw hex rather than rgb colors
$.cssHooks.backgroundColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["background-color"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("background-color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
};
$.cssHooks.color = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["color"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
};

function shadeColor2(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
/*
// Get Input Value from Index Page to Edit Page
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
if (getParameterByName('statement') === "") {
    var textAreavalue = "simply edit me!";
    // Trying to get placeholder text from simply-hit-me-content dynamically
    //var textAreavalue = $("#simply-hit-me-content").attr("placeholder", "simply edit me!").val();
} else {
    var textAreavalue = getParameterByName('statement');
}*/
$('.edit-textarea').val('simply edit me');
$('#edit-ta-12').val('simply-print.me');
$('.edit-textarea').inputfit();

//Mobile Navigation Script

$('.nav-button').on('click', function() {
    $('body').toggleClass('open');
});
$('.mobile-nav-home').on('click', function() {
    $('body').removeClass('open');
});
$('.mobile-nav-contact').on('click', function() {
    $('body').removeClass('open');
});
$('.mobile-nav-impressum').on('click', function() {
    $('body').removeClass('open');
});

//Carousel fonts
var $typecarousel = $('.type .carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
    wrapAround: true,
    dragThreshold: 15,
    pageDots: false
});

//get font from carousel and apply to content
$typecarousel.on('settle.flickity', function() {
    var font = $('.is-selected h4').css("font-family");
    $('.edit-textarea').css("font-family", font);
    $('.edit-textarea').inputfit();
});

//create Colour Carousel Cells
var carouselcolours = [{
    hex: '#0061a3',
    name: 'Directoire Blue'
}, {
    hex: '#009499',
    name: 'Viridian Green'
},{
    hex: '#1e4477',
    name: 'True Blue'
},{
    hex: '#2c282c',
    name: 'Black Onyx'
},{
    hex: '#3850a0',
    name: 'Dazzling Blue'
},{
    hex: '#426972',
    name: 'Hydro'
},{
    hex: '#46444c',
    name: 'Perliscope'
},{
    hex: '#515b87',
    name: 'Marlin'
},{
    hex: '#58c9d4',
    name: 'Blue Radiance'
},{
    hex: '#59754d',
    name: 'Willow Bough'
}, {
    hex: '#5f7278',
    name: 'Goblin Blue'
}, {
    hex: '#66648b',
    name: 'Twilight Purple'
}, {
    hex: '#674550',
    name: 'Plum Wine'
}, {
    hex: '#7a898f',
    name: 'Lead'
}, {
    hex: '#7b4468',
    name: 'Grape Kiss'
}, {
    hex: '#7d2027',
    name: 'Red Dahlia'
}, {
    hex: '#807396',
    name: 'Purple Haze'
}, {
    hex: '#848587',
    name: 'Sharkskin'
}, {
    hex: '#864c24',
    name: 'Caramel Cafe'
}, {
    hex: '#88b04b',
    name: 'Greenery'
}, {
    hex: '#93a9d1',
    name: 'Serenity'
}, {
    hex: '#973c6c',
    name: 'Baton Rouge'
}, {
    hex: '#a6594c',
    name: 'Redwood'
}, {
    hex: '#a9bdb1',
    name: 'Slit Green'
}, {
    hex: '#ae8c8e',
    name: 'Woodrose'
}, {
    hex: '#b28330',
    name: 'Chai Tea'
}, {
    hex: '#b2e79f',
    name: 'Paradise Green'
}, {
    hex: '#b76ca4',
    name: 'Bodacious'
}, {
    hex: '#b88aac',
    name: 'Smoky Grape'
}, {
    hex: '#b91428',
    name: 'Goji Berry'
}, {
    hex: '#c47e5a',
    name: 'Copper'
}, {
    hex: '#c8b273',
    name: 'Rich Gold'
}, {
    hex: '#ce3375',
    name: 'Pink Yarrow'
}, {
    hex: '#ce8477',
    name: 'Canyon Clay'
}, {
    hex: '#cf5c78',
    name: 'Fruit Dove'
}, {
    hex: '#d37f6f',
    name: 'Tawny Orange'
}, {
    hex: '#dab965',
    name: 'Misted Yellow'
}, {
    hex: '#ddb614',
    name: 'Sulphur'
}, {
    hex: '#e04f80',
    name: 'Fandango'
}, {
    hex: '#ee5c6c',
    name: 'Calypso Coral'
}, {
    hex: '#eea0a6',
    name: 'Pink Icing'
}, {
    hex: '#f0a1bf',
    name: 'Prism Pink'
}, {
    hex: '#f45720',
    name: 'Scarlet Ibis'
}, {
    hex: '#f7caca',
    name: 'Rose Quartz'
}, {
    hex: '#fee715',
    name: 'Blazing Yellow'
}, {
    hex: '#ff7913',
    name: 'Orange Popsicle'
}, {
    hex: '#be454f',
    name: 'Chrysanthenum'
}, ];

var coloursarray = jQuery.parseJSON(JSON.stringify(carouselcolours));
for (var i = 0; i < coloursarray.length; i++) {
    var hex = coloursarray[i].hex;
    var name = coloursarray[i].name;
    var breakname = name.split(" ");

    if (breakname.length > 1) {
      var html =
      '<div class="carousel-cell">' +
          '<div class="row align-center align-middle">' +
              '<div class="colour-block" style="background-color: '+hex+'"></div>' +
              '<div class="text">' +
                '<h5>'+breakname[0]+'</h5>' +
                '<h5>'+breakname[1]+'</h5>' +
                '<h5>'+hex+'</h5>' +
              '</div>' +
          '</div>' +
      '</div>';
    } else {
      var html =
      '<div class="carousel-cell">' +
          '<div class="row align-center align-middle">' +
              '<div class="colour-block" style="background-color: '+hex+'"></div>' +
              '<div class="text">' +
                '<h5>'+breakname+'</h5>' +
                '<h5>'+hex+'</h5>' +
              '</div>' +
          '</div>' +
      '</div>';
    }


    var hex2 = hex.slice(1);
    var cellclass = "."+hex2;
    $("#colourcarousel").append(html);
}

//Carousel colour
var $colourcarousel = $('.colour .carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
    wrapAround: true,
    dragThreshold: 15,
    pageDots: false
});

//get background-color from carousel and apply to content
$colourcarousel.on('select.flickity', function() {
    var bc = $('.is-selected .colour-block').css("background-color");
    var bcshade = shadeColor2(bc, -0.1);
    var fadetime = 1000;
    //$('.content .row').css("border-color", bc);
    $('.content .row').velocity({
        'borderColor': bc
    }, fadetime);
    //$('.content .columns').css("background-color", bc);
    $('.content .columns').velocity({
        'backgroundColor': bc
    }, fadetime);
    $('.background').velocity({
        'backgroundColor': bc
    }, fadetime);
    $('.btn-menu').velocity({
        'backgroundColor': bc
    }, fadetime);
    $('.carousel').velocity({
        'backgroundColor': bcshade
    }, fadetime);

});


// pdfmake
$("#btn-save").click(function() {
    var fontSizeTa1 = $("#edit-ta-1").css('font-size');
    var fontSizeTa2 = $("#edit-ta-2").css('font-size');
    var fontSizeTa3 = $("#edit-ta-3").css('font-size');
    var fontSizeTa4 = $("#edit-ta-4").css('font-size');
    var fontSizeTa5 = $("#edit-ta-5").css('font-size');
    var fontSizeTa6 = $("#edit-ta-6").css('font-size');
    var fontSizeTa7 = $("#edit-ta-7").css('font-size');
    var fontSizeTa8 = $("#edit-ta-8").css('font-size');
    var fontSizeTa9 = $("#edit-ta-9").css('font-size');
    var fontSizeTa10 = $("#edit-ta-10").css('font-size');
    var fontSizeTa11 = $("#edit-ta-11").css('font-size');
    var fontSizeTa12 = $("#edit-ta-12").css('font-size');
    fontSizeTa1 = ((fontSizeTa1.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa2 = ((fontSizeTa2.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa3 = ((fontSizeTa3.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa4 = ((fontSizeTa4.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa5 = ((fontSizeTa5.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa6 = ((fontSizeTa6.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa7 = ((fontSizeTa7.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa8 = ((fontSizeTa8.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa9 = ((fontSizeTa9.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa10 = ((fontSizeTa10.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa11 = ((fontSizeTa11.slice(0, -2) * 0.75) / 57) * 100;
    fontSizeTa12 = ((fontSizeTa12.slice(0, -2) * 0.75) / 57) * 100;

    var backgroundColor = $(".content-bg").css('backgroundColor');
    var fontColor = $(".edit-textarea").css('color');
    var fontFamily = $("#edit-ta-1").css('fontFamily');


    pdfMake.fonts = {
        Montserrat: {
            normal: 'Montserrat-Regular.ttf',
            bold: 'Montserrat-Bold.ttf',
        },
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Medium.ttf',
            italic: 'Roboto-Italic.ttf'
        },
        Bajern: {
            normal: 'Bajern.ttf'
        },
        Kilauea: {
            normal: 'Kilauea.ttf'
        },
        VollkornBold: {
            normal: 'Vollkorn-Bold.ttf'
        },
        VollkornBoldItalic: {
            normal: 'Vollkorn-BoldItalic.ttf'
        },
        VollkornItalic: {
            normal: 'Vollkorn-Italic.ttf'
        },
        VollkornRegular: {
            normal: 'Vollkorn-Regular.ttf'
        },
        Manifesto: {
            normal: 'Manifesto.ttf'
        },
        Ordnung: {
            normal: 'Ordnung.ttf'
        },
        Kust: {
            normal: 'Kust.ttf'
        },
        Antre: {
            normal: 'Antre.ttf'
        },
        AzedoBold: {
            normal: 'AzedoBold.ttf'
        },
        AzedoLight: {
            normal: 'AzedoLight.ttf'
        },
        Butler: {
            normal: 'Butler.ttf'
        },
        ButlerBlack: {
            normal: 'ButlerBlack.ttf'
        },
        ButlerBold: {
            normal: 'ButlerBold.ttf'
        },
        ButlerExtraBold: {
            normal: 'ButlerExtraBold.ttf'
        },
        ButlerLight: {
            normal: 'ButlerLight.ttf'
        },
        ButlerMedium: {
            normal: 'ButlerMedium.ttf'
        },
        ButlerUltraLight: {
            normal: 'ButlerUltraLight.ttf'
        },
        Kankin: {
            normal: 'Kankin.ttf'
        },
        KolikoBold: {
            normal: 'KolikoBold.ttf'
        },
        KolikoLight: {
            normal: 'KolikoLight.ttf'
        },
        KolikoRegular: {
            normal: 'KolikoRegular.ttf'
        },
        ModerneSans: {
            normal: 'ModerneSans.ttf'
        }
    };

    var docDefinition = {
        pageSize: 'A4',
        pageMargins: [22.32, 61.2, 22.32, 61.2],
        background: {
            table: {
                widths: ['*'],
                height: (i) => (840),
                body: [
                    [{
                        text: 'Simply use Avery Zweckfrom 3659 labels to print',
                        color: 'white',
                        margin: [10],
                        fillColor: backgroundColor
                    }]
                ]
            },
            layout: 'noBorders'
        },
        content: [{
            style: 'simply',
            table: {
                widths: ['*', '*'],
                // TODO Höhe der Zellen exakt an Etikettbogen anpassen
                height: (i) => (116),
                body: [
                    [{
                        text: $('#edit-ta-1').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa1
                    }, {
                        text: $('#edit-ta-2').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa2
                    }],
                    [{
                        text: $('#edit-ta-3').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa3
                    }, {
                        text: $('#edit-ta-4').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa4
                    }],
                    [{
                        text: $('#edit-ta-5').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa5
                    }, {
                        text: $('#edit-ta-6').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa6
                    }],
                    [{
                        text: $('#edit-ta-7').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa7
                    }, {
                        text: $('#edit-ta-8').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa8
                    }],
                    [{
                        text: $('#edit-ta-9').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa9
                    }, {
                        text: $('#edit-ta-10').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa10
                    }],
                    [{
                        text: $('#edit-ta-11').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa11
                    }, {
                        text: $('#edit-ta-12').val(),
                        verticalAlign: 'center',
                        fontSize: fontSizeTa12
                    }]
                ]
            },
            layout: 'noBorders'
        }],

        styles: {
            simply: {
                font: fontFamily,
                bold: false,
                alignment: 'center',
                color: fontColor
            }
        }
    };

    pdfMake.createPdf(docDefinition).open();
});
