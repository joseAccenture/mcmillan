/*Created by: JLR@*/
/*Js que centra les xarxes del footer en funció de la resolució actual*/
var fpca_peu_faldoSocial = {
    centraXarxes: function(element) {
            if(genericResponsive.esMobil()){
                tamanyXarxes = 215;
                paddingLeft = ((($(window).width()-tamanyXarxes)/2)/($(window).width()))*100;
                $(element).children().first().css({
                  "margin-left": paddingLeft+"%",
                  "padding-left": "0"
                });
            }else /*if(genericResponsive.dispositiu()=="escritori")*/{
				$(element).children().first().css("margin-top", "20px");
			}
    }
}
$(document).ready(function() {
    $(".fpca_peu_faldoSocial").each(function() {
            try {
                fpca_peu_faldoSocial.centraXarxes(this);
            } catch (e) {
                if (console) {
                    console.log("Error centrant xarxes al footer: "+e);
                }
            }
    });
});