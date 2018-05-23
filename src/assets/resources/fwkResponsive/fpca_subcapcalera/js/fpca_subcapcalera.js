/*Created by JLR@*/
var fpca_subcapcalera = {
    mouXarxes: function(element) {
        if (genericResponsive.esMobil()) {
            $(".oculta_xarxes").removeClass("oculta_xarxes");
            $(element).css("display", "block");
            $(".footer-xarxes").append(element);
        }
    },
    aumentaHeight: function(element) {
        var primaryState = 0;
        $(element).find("#menu_flotant_cont").on("shown.bs.collapse", function() {
            tamanyFooter = $(".fons_footer").height();
            tamanySections = tamanyFooter;
            $("body section").each(function() {
                tamanySections = $(this).height() + tamanySections;
            });
            if (tamanySections < $("#menu_flotant_cont").height()) {
                primaryState = $("body section").last().css("padding-bottom").split("px").pop();
                if (console.log(primaryState)) {};
                $("body section").last().css("padding-bottom", $("#menu_flotant_cont").height());
            }
        });
        $(element).find("#menu_flotant_cont").on("hide.bs.collapse", function(event) {
          if ($(this).is(event.target)) {
            $("body section").last().css("padding-bottom", primaryState);
            console.log($("body section").css("padding-bottom"));
          }
        })
    }
}
$(document).ready(function() {
    $(".fpca_subcapcalera .llistat_xarxes_socials.header").each(function() {
        try {
            fpca_subcapcalera.mouXarxes(this);
        } catch (e) {
            if (console) {
                console.log("Error movent idiomes al footer: " + e);
            }
        }
    });
    $(".fpca_subcapcalera .menu_flotant").each(function() {
        try {
            fpca_subcapcalera.aumentaHeight(this);
        } catch (e) {
            if (console) {
                console.log("Error intentant corregir el height: " + e);
            }
        }
    });
});
