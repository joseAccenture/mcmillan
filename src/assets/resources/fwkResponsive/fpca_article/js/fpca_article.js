/**************fpca_article**********/
var fpca_article = {
  initPestanyes: function(pestanyes) {
    var hidWidth;
    var scrollBarWidths = 40;
    var finalWidth = $(pestanyes).find(".wrapper").width() - fpca_article.iteraPestanyes(pestanyes) - 2;
    $(pestanyes).find(".pestanya-slider:last-child").width(finalWidth + $(pestanyes).find(".pestanya-slider:last-child").width()); //.css("padding-right", finalWidth);

    /*Funcio que fa que l'ultima pestanya sigui sempre el màxim del wrapper*/

    /*Funcio que dona format a llistes sense links i sense clases*/
    $(pestanyes).find(".pestanyes_bot .panel .panel-collapse .caixa-pestanyes-detall ul").each(function() {
      if (!$(this).attr("class")) {
        $(this).addClass("llista-especial");
      }
    });
    $(pestanyes).find(".element-llegir-mes .text-complet ul").each(function() {
      if (!$(this).attr("class")) {
        $(this).addClass("llista-especial");
      }
    });
    $(pestanyes).find(".llistat_collapse_cont .panel-body ul").each(function() {
      if (!$(this).attr("class")) {
        $(this).addClass("llista-especial");
      }
    });
    var iniciEsquerra = 0;
    fpca_article.reAdjust(iniciEsquerra, pestanyes);
    $(window).on('resize', function(e) {
      fpca_article.reAdjust(iniciEsquerra, pestanyes);
    });

    $(pestanyes).find('.scroller-right').click(function() {
      fpca_article.scrollerRight(scrollBarWidths, pestanyes);
    });

    $(pestanyes).find('.scroller-left').click(function() {
      fpca_article.scrollerLeft(pestanyes);
    });
    $(pestanyes).find(".pestanyes_top .tab").each(function() {
      var thisPanel = $(this).parent().parent().parent().siblings(".pestanyes_bot").children(".panel");
      $(this).click(function() {
        var thisItem = $(this).index();
        $(this).removeClass("active").siblings(".tab").removeClass("active");
        $(this).addClass("active");
        thisPanel.children(".panel-collapse").addClass("collapse");
        thisPanel.children(".panel-collapse").removeClass("in");
        thisPanel.eq(thisItem).children(".panel-collapse").addClass("in");
        thisPanel.removeClass("active");
        thisPanel.eq(thisItem).addClass("active");
        thisPanel.children(".panel-title").children("a").addClass("collapsed");
        thisPanel.eq(thisItem).find(".panel-title").children().removeClass("collapsed");
      });
    });

    var thisItem2 = $(this).index();
    $(pestanyes).find(".panel.tipo4 .panel-extern .panel-title").children().click(function() {
      if ($(this).hasClass("collapsed")) {
        $(pestanyes).find(".panel.tipo4").removeClass("active");
        $(this).parent().parent().parent().addClass("active");
      } else {
        $(pestanyes).find(".panel.tipo4").removeClass("active");
      }
    });

    /***Scroll a les pestanyes en mòbil***/
    $(pestanyes).find(".pestanyes_bot").each(function() {
      $(this).find(".visible-xs").addClass("accord");
    });

    $(pestanyes).find(".accord").click(function() {
      var idCont = "#" + $(this).parent().attr("id");
      var ajust = $(this).parent().height();
      var pathname = window.location.pathname + idCont;
      window.location.replace(pathname);
      setTimeout(function() {
        var posicio = $(idCont).offset().top - ajust;
        $("body,html").animate({
          scrollTop: posicio
        }, '500');
      }, 600);
    });
    /***Scroll a les pestanyes en mòbil***/
    var maximaAltura = 0;
    $(pestanyes).find('.list li.pestanya-slider').each(function() {
      if (maximaAltura < $(this).height()) {
        maximaAltura = $(this).height();
      }
    });
    $(pestanyes).find(".pestanya-slider").height(maximaAltura + 1);
    $(pestanyes).find(".pestanya-slider.active").height(maximaAltura + 1);
    $(pestanyes).find(".wrapper").height(maximaAltura + 2);
    var ajustPadding = (maximaAltura / 2) - 9;
    $(pestanyes).find(".scroller").css("padding-top", ajustPadding);
    $(pestanyes).find(".scroller").css("padding-bottom", ajustPadding);

    /**************fpca_article**********/

  },
  widthOfList: function(pestanyes) {
    var itemsWidth = 0;
    $(pestanyes).find('.list li').each(function() {
      var itemWidth = $(this).outerWidth();

      itemsWidth += itemWidth;
    });
    return itemsWidth;
  },
  widthOfHidden: function(pestanyes, scrollBarWidths) {

    return (($(pestanyes).find('.wrapper').outerWidth()) - fpca_article.widthOfList(pestanyes) - fpca_article.getLeftPosi()) - scrollBarWidths;
  },
  getLeftPosi: function(pestanyes) {
    try {
      return $(pestanyes).find('.list').position().left;
    } catch (err) {
      return '20';
    }

  },
  reAdjust: function(iniciEsquerra, pestanyes) {
    if (($(pestanyes).find('.wrapper').outerWidth()) < fpca_article.widthOfList(pestanyes)) {
      $(pestanyes).find('.scroller-right').show();
    } else {
      $(pestanyes).find('.scroller-right').hide();
    }
    //iniciEsquerra = getLeftPosi();
    if (iniciEsquerra < 0) {
      $(pestanyes).find('.scroller-left').show();
    } else {
      $(pestanyes).find('.item').animate({
        left: "-=" + fpca_article.getLeftPosi(pestanyes) + "px"
      }, 'slow');
      $(pestanyes).find('.scroller-left').hide();
    }
  },
  scrollerLeft: function(pestanyes) {
    $(pestanyes).find('.scroller-right').fadeIn('slow');
    $(pestanyes).find('.scroller-left').fadeOut('slow');

    $(pestanyes).find('.list').animate({
      left: "-=" + fpca_article.getLeftPosi(pestanyes) + "px"
    }, 'slow', function() {

    });
  },
  scrollerRight: function(scrollBarWidths, pestanyes) {
    $(pestanyes).find('.scroller-left').fadeIn('slow');
    $(pestanyes).find('.scroller-right').fadeOut('slow');

    $(pestanyes).find('.list').animate({
      left: "+=" + fpca_article.widthOfHidden(pestanyes, scrollBarWidths) + "px"
    }, 'slow', function() {

    });
  },
  iteraPestanyes: function(pestanyes) {
    var widthLast = 0;
    $(pestanyes).find(".pestanya-slider").each(function(index) {
      widthLast = $(this).width() + widthLast;
    });
    return widthLast;
  },
  simulaFirstLast: function(llista) {
    i = 0;
    elementsLlista = 0;
    llistaElements = $(llista).children();
    eleFinal = fpca_article.retornaElementsFinals(llistaElements);
    for (i = 0; i < llistaElements.length; i++) {
      if ((i < fpca_article.retornaCols(llistaElements))) {
        $(llistaElements[i]).addClass('primer-dret');
      }
      if ((i >= (llistaElements.length) - fpca_article.retornaCols(llistaElements)) && (i <= (llistaElements.length))) {
        $(llistaElements[i]).addClass('ultim-esq');
      }
    }
  },
  retornaCols: function(llistaElements) {
    if (($(llistaElements).first().hasClass('col-sm-12')) || (genericResponsive.esMobil())) {
      return 1;
    } else if ($(llistaElements).first().hasClass('col-sm-6')) {
      return 2;
    } else if ($(llistaElements).first().hasClass('col-sm-4')) {
      return 3;
    } else if ($(llistaElements).first().hasClass('col-sm-3')) {
      return 4;
    }
  },
  retornaElementsFinals: function(elements) {
    var cols = fpca_article.retornaCols(elements);
    divisio = (elements.length) / cols;
    decimals = divisio - Math.floor(divisio);
    switch (cols) {
      case 4:
        cols = decimals * 4;
        break;
      case 3:
        cols = decimals * 3;
        break;
      case 2:
        cols = decimals * 2;
        break;
      case 1:
        cols = decimals * 1;
        break;
    }
    return cols;
  },
  generaFiles: function(llista) {
    i = 0;
    j = 0;
    cols = fpca_article.retornaCols($(llista).children());
    limitSuperior = cols;
    files = 0;
    do {
      for (j = i; j < limitSuperior; j++) {
        $($(llista).children()[j]).addClass("fila_" + files);
      }
      limitSuperior = j + cols;
      i = i + cols;
      files++;
    } while (i < $(llista).children().length);
  },
  retornaFiles: function(llista) {
    cols = fpca_article.retornaCols($(llista).children());
    return Math.ceil(($(llista).children().length / cols));
  },
  automaticAutoHeight: function(element) {
    if (!genericResponsive.esMobil()&&(!$(element).closest(".llistat_collapse").length>0)) {
      fpca_article.metodeManualAutoHeight(element);
    }
  },
  metodeManualAutoHeight: function(element) {
    i = 0;
    elementsLlista = $(element).children();
    files = fpca_article.retornaFiles(element);
    for (i = 0; i < files; i++) {
      alturaTitol = 0;
      $(element).find('.fila_' + i).each(function() {
        if (alturaTitol < $(this).height()) {
          alturaTitol = $(this).height();
        }
      });
      $(element).find('.fila_' + i).height(alturaTitol);
    }
  },
  compatibilitatAcordions: function(element) {
    var idAcordio = $(element).find(".panel-group.llistat_collapse_cont").attr("id");
    $('#' + idAcordio).on('shown.bs.collapse', function() {
      var llistAccordio = $(this).find(".collapse.in ul.llista-subhome");
      fpca_article.metodeManualAutoHeight(llistAccordio);
    });
  }
}
$(document).ready(function() {
  $(".fpca_article .pestanyes-slider-component").each(function(index, el) {
    fpca_article.initPestanyes(this);
  });
  $(".fpca_article .llistat_collapse").each(function(index, el) {
    fpca_article.compatibilitatAcordions(this);
  });
});

$(window).load(function() {
  $(".fpca_article ul.llista-subhome").each(function(index, el) {
    fpca_article.generaFiles(this);
    fpca_article.simulaFirstLast(this);
    fpca_article.automaticAutoHeight(this);
  });
});
/**************fpca_article FI********/