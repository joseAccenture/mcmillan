/*Created by JLR@*/
var fpca_capcalera = {
    inMemory: 0,
    orHead: 0,
    mouPeu: function(element) {
        if (genericResponsive.esMobil()) {
            var langs = element;
            $(element).removeClass('idioma');
            $("#idiomes-peu").addClass('idiomes').append(langs);
        }
    },
    mouAccesibilitat: function(element) {
        if (genericResponsive.esMobil()) {
            if (!$(element).hasClass('visible-xs')) {
                aMoure = $(element).children();
                $(".fpca_capcalera .link-accesible.visible-xs").append(aMoure);
            }
        }
    },
    getPadding: function(element) {
        var elPad = $(element).find('.nav.navbar-nav li a').first().css('padding-left').replace('px', '');
        var acCor = ($(window).width() - $('article.container').width()) / 2 - parseInt(elPad);
        return acCor;
    },
    cssApply: function(element, left, right, type) {
        var propL = type + '-left';
        var propR = type + '-right';
        $(element).attr('style', propL + ': ' + (left + 20).toString() + 'px; ' + propR + ': ' + right.toString() + 'px;');
        $(element).attr('data-styled', 'on');
    },
    centralContent: function(element) {
        var wC = fpca_capcalera.getPadding(element);
        if (fpca_capcalera.evolutionCheck(element)) {
            $(element).find('#topRight').width($('article.container').width());
            $(element).find('#topRight').css("marginLeft", ($(window).width() - $('article.container').width()) / 2 + "px");
            //fpca_capcalera.cssApply($(element).find('#topRight'), wC, wC, 'margin');
            fpca_capcalera.cssApply($(element).find('.row.menuNav.negre.capcaleraFixed'), wC, wC, 'padding');
            //fpca_capcalera.cssApply($(element).find('.nav.navbar-nav').children().children(), wC, wC + $(element).find('.caret').first().width(), 'padding');
            //fpca_capcalera.cssApply($(element).find('.centrat'), (-1) * wC, (-1) * wC + $(element).find('.caret').first().width(), 'padding');
        }
    },
    dataToggle: function(element) {
        if (!fpca_capcalera.evolutionCheck(element)) {
            $(element).removeClass('container').addClass('evolution');
            $(element).children().first().children().first().removeClass('col-xs-2').addClass('col-xs-1');
            $(element).children().first().children().first().next().removeClass('col-xs-8').addClass('col-xs-9');
            $('<div class="row"><div class="col-xs-6 logo-tablet"></div><div class="col-xs-6 idioma-tablet"></div></div>"').insertBefore($(element).find('.row.menuNav.negre.capcaleraFixed').children().first());
            $(element).find('.logo-tablet').append($(element).find('.img-responsive.logo'));
            $(element).find('.idioma-tablet').append($(element).find('.navbar-form.cercador_vermell'));
            $(element).find('.idioma-tablet').append($(element).find('ul.idioma'));
            fpca_capcalera.centralContent(element);
            $(element).find(".pt_capcalera").remove();
            $(element).find(".navbar-collapse.navbar-ex1-collapse .row").children().first().removeClass('col-md-6 col-sm-4');
            $(element).find(".menuNav").children().addClass('col-md-4').removeClass("col-md-3");
            $(element).find(".hidden-xs").each(function(index, el) {
                if (!($(this).hasClass('mt-0')) && !($(this).hasClass('llista_destacats'))) {
                    $(this).hide();
                }
            });
            $(element).find(".visible-xs").each(function(index, el) {
                $(this).addClass('visible-removed').removeClass('visible-xs');
            });
        } else if (fpca_capcalera.evolutionCheck(element)) {
            $(element).empty();
            $(element).removeClass('evolution').addClass('container');
            $(element).append(fpca_capcalera.orHead.children());
            fpca_capcalera.orHead = $(element).clone(true);
            fpca_capcalera.inMemory = 0;
        }
    },
    evolution: function(element) {
        //fpca_capcalera.longMenuSimulate(element);
        if (!genericResponsive.esMobil()) {
            var acMeCon = $(element).find(".nav.navbar-nav").width();
            var mW = 0;
            $(element).find(".nav.navbar-nav").children().each(function(index, el) {
                mW = $(this).width() + mW;
            });
            fpca_capcalera.centralContent(element);
            if (mW > $(element).find(".nav.navbar-nav").width()) {
                fpca_capcalera.inMemory = fpca_capcalera.getContainerSize();
                fpca_capcalera.dataToggle(element);
                fpca_capcalera.functionsAfterEvo(element);
            }
            /*else if (($(element).find(".nav.navbar-nav").width() == 0) && (fpca_capcalera.getContainerSize() > fpca_capcalera.inMemory) && (fpca_capcalera.inMemory != 0)) {
                       fpca_capcalera.dataToggle(element);
                   }*/
            else if (genericResponsive.esMobil() && ($(element).find(".nav.navbar-nav").width() == 0) && (fpca_capcalera.inMemory != 0)) {
                fpca_capcalera.dataToggle(element);
                fpca_capcalera.functionsAfterEvo(element);
            }
        }

    },
    functionsAfterEvo: function(element) {
        fpca_capcalera.colXsFind(element);
        fpca_capcalera.firstMove(element);
        fpca_capcalera.tittleCh(element);
        fpca_capcalera.winLocHref();
    },
    colXsFind: function(element) {
        if ((genericResponsive.dispositiu() != "tablet") && (genericResponsive.dispositiu() != "mobil")) {
            var colsX = $(element).find(".row.menuNav.negre.capcaleraFixed").find("[class*='col-xs-']");
            var indexS = 0;
            $(colsX).each(function(index, el) {
                cls = $(this).attr("class");
                indexS = parseInt(cls.indexOf("col-xs-"));
                indexM = parseInt(cls.indexOf("col-md-"));
                restM = cls.substring(indexM + 7, indexM + 9);
                restS = cls.substring(indexS + 7, indexS + 9);
                restM = restM.replace(" ", "");
                $(this).removeClass('col-md-' + restM);
                restS = restS.replace(" ", "");
                $(this).addClass('col-md-' + restS);
            });
            $(element).find(".row.menuNav.negre.capcaleraFixed").children().first().removeClass('col-md-4').addClass('col-md-12');
        }
    },
    firstMove: function(element) {
        var fstEls = $(element).find("a.first");
        $(fstEls).each(function(index, el) {
            if ($(this).attr('data-styled') != "on") {
                pLi = $(this).parent();
                pUl = $(this).closest("ul");
                $(this).insertBefore(pUl);
                $(this).attr("data-styled", "on");
                pLi.remove();
            }
        });
    },
    //Només per simular menús llargs. S'ha de treure una vegada finalitzat el desenvolupament.
    longMenuSimulate: function(element) {
        if ($(element).find('.nav.navbar-nav').attr('data-false') != "on") {
            $(element).find('.nav.navbar-nav').attr('data-false', 'on');
            $(element).find('.nav.navbar-nav').first().append('<li class="dropdown dropdown-submenu "> <a title="Acceso a&nbsp;Prensa" class="dropdown-toggle" href="#"> TITOL_LLARG_EVOLUTIU_CAPCALERA_TEST_ITEM_FALS</a></li>');
        }
    },
    getContainerSize: function() {
        return parseInt($('.container').css('width').replace('px', ''));
    },
    evolutionCheck: function(element) {
        if ($(element).hasClass('evolution')) {
            return true;
        } else {
            return false;
        }
    },
    tittleCh: function(element) {
        var tC = $(element).find(".titol-cap-nou");
        $(tC).each(function(index, el) {
            if (!$(this).hasClass('mvlogo')) {
                $($(this)).insertBefore($(element).find(".titol-cap-nou.mvlogo"))
                $(element).find(".titol-cap-nou.mvlogo").addClass("visible-xs");
                //$(element).find(".titol-cap-nou.mvlogo").append($(this).text())
            }
        });
    },
    /*Per afegir parametre no tags OCMS*/
    winLocHref: function() {
        //  window.location.href = window.location.href + "?__disableDirectEdit=true";
    },
    /*aumentaHeigh adapted from subcapcalera.js*/
    aumentaHeight: function(element) {
        var primaryState = 0;
        $(element).find(".nav.navbar-nav  .dropdown").on("shown.bs.dropdown", function() {
            tamanyFooter = $(".fons_footer").height();
            tamanySections = tamanyFooter;
            $("body section").each(function() {
                tamanySections = $(this).height() + tamanySections;
            });
            if (tamanySections < $(".nav.navbar-nav  .dropdown.open .dropdown-menu").height()) {
                primaryState = $("body section").last().css("padding-bottom").split("px").pop();
                if (console.log(primaryState)) {};
                $("body section").last().css("padding-bottom", $(".nav.navbar-nav  .dropdown.open .dropdown-menu").height());
            }
        });
        $(element).find(".nav.navbar-nav  .dropdown").on("hide.bs.dropdown", function(event) {
          if ($(this).is(event.target)) {
            console.log(this.id);
            $("body section").last().css("padding-bottom", primaryState);
            console.log($("body section").css("padding-bottom"));
          }
        })
    }
}
$(document).ready(function() {
    /*EVOLUTIU*/
    $(".fpca_capcalera").each(function() {
        try {
            fpca_capcalera.orHead = $(this).clone(true);
            fpca_capcalera.evolution(this);
        } catch (e) {
            if (console) {
                console.log("Error adaptant menu horitzontal llarg: " + e);
            }
        }
    });
    /*EVOLUTIU*/
    $(".fpca_capcalera ul.idioma").each(function() {
        try {
            fpca_capcalera.mouPeu(this);
        } catch (e) {
            if (console) {
                console.log("Error movent idiomes al footer: " + e);
            }
        }
    });
    $(".fpca_capcalera .link-accesible").each(function() {
        try {
            fpca_capcalera.mouAccesibilitat(this);
        } catch (e) {
            if (console) {
                console.log("Error movent idiomes al footer: " + e);
            }
        }
    });
    /*CORRECTIU*/
    $(".fpca_capcalera").each(function() {
        try {
            fpca_capcalera.aumentaHeight(this);
        } catch (e) {
            if (console) {
                console.log("Error aumentaHeight: " + e);
            }
        }
    });
    if (genericResponsive.esMobil()) {
        var h1 = $('.capcaleraFixed').first().height();
        $(".pt_capcalera").first().css('padding-top', h1 - 23);
    }
    $(window).resize(function() {
        if (genericResponsive.esMobil()) {
            var h1 = $('.capcaleraFixed').first().height();
            $(".pt_capcalera").first().css('padding-top', h1 - 23);
        }
        $(".fpca_capcalera").each(function() {
            try {
                fpca_capcalera.evolution(this);
//                if (console) {
//                    console.log("RESIZED");
//                }
            } catch (e) {
                if (console) {
                    console.log("Error adaptant menu horitzontal llarg: " + e);
                }
            }
        });
    });
});

$(window).ready(function() {
  $(".fpca_capcalera").find('.navbar-form.cercador_vermell').show();
});
