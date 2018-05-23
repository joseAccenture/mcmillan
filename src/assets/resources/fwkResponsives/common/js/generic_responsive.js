var genericResponsive = {
		mailRegex : /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
		renderNewSection: function (element)
		{	
			//Buscar el section parent de id
			section = element.closest("section");
			classes = section.attr('class')
			//Crear un section hermano y poner html resultante
			section.after("<section class='"+classes+"'><article class='container fullcontainer-xs'><div class='row'>"+
			element.html()+"</div></article></section>");
			$(element).remove();
		},
		dispositiu: function ()
		{
			//Bootstrap definition:
			//Extra small devices Phones ()	Small devices Tablets (≥768px)	Medium devices Desktops (≥992px)	Large devices Desktops (≥1200px)
			if($(window).width() < 768)
			{
				return "mobil";
			}
			else if($(window).width() < 992)
			{
				return "tablet";
			}
			else if($(window).width() < 1200)
			{
				return "escritoriPetit";
			}
			else
			{
				return "escritori";
			}	
		},
		esMobil: function(){
		      return "mobil" == genericResponsive.dispositiu();
		},
		enviarAmic: function (element)
		{
			function captcha(e){
				$("#myCaptchaResponse").hide();
				var flag = true;
				var nom = $("#nomF").val();
				if(nom == '') {
					$("#msgNameError").show();
					flag = false;
				} else {
					$("#msgNameError").hide();
				}
				var email = $("#mailClientF").val();
				var truEma = genericResponsive.mailRegex.test(email);
				if(truEma == false) {
					flag = false;
					$("#msgEmailError").show();
				} else {
					$("#msgEmailError").hide();
				}
				var capthaValue = $(".formAmic1 .g-recaptcha-response").val();
				if(capthaValue == '') {
					$("#msgCaptchaError").show();
					flag = false;
				} else {
					$("#msgCaptchaError").hide();
				}
				if(flag == true) {
					var postdata = $('.formAmic1').serialize();
					$.ajax({
						type: "POST",
						cache: false,
						async: false,
						url: "/handleForms",
						data: postdata,
						dataType: "json",
						error: function(){
							$("#msgKO").show();
							$(".formAmic1").trigger("reset");
							$(".formAmic1").toggle();
							$("#resultMailAmic").toggle();
							$("#msgCaptchaError").hide();
						},
						success: function(data){
							if (data.res === "ko" && data.error != '') {
								document.getElementById('msgCaptchaError').innerHTML=data.error;
								$("#msgCaptchaError").show();
							} else {
								if (data.res === "ko" && data.error == '') {
									$("#msgKO").show();
								} else {
									$("#msgOK").show();
								}
								//reset formulari
								$(".formAmic1").trigger("reset");
								$(".formAmic1").toggle();
								$("#resultMailAmic").toggle();
								$("#msgCaptchaError").hide();
								resetAmic();
							}
						}
					});
					e.preventDefault();
				} else {
					e.preventDefault();
				}
			}
			var url = document.URL;
			$("#urlPage").val(unescape(url));
			$("#titolpagina").val($(document).prop('title'));
			$("#sendMailAmic").click(captcha);
			$("#OKMailAmic").click(function() {
				$("#enviarAmicTab").trigger("click");
				setTimeout(function() {
					$("#resultMailAmic").toggle();
					$("#msgOK").hide();
					$(".formAmic1").toggle();
				}, 1000);
			});
		}
		,
		twitter: function()
		{
			width=575;
			height=400;
			left=($(window).width()-width)/2;
			dalt=($(window).height()-height)/2;
			url= "http://twitter.com/share?text="+encodeURI(document.title)+"&url="+escape(window.location.href); 
			opts="status=1"+",width="+width+",height="+height+",top="+dalt+",left="+left;
			window.open(url,"Twitter",opts);
			event.preventDefault();
		},
		facebook: function ()
		{
			width=575;
			height=400;
			left=($(window).width()-width)/2;
			dalt=($(window).height()-height)/2;
			url="https://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href);
			opts="status=1"+",width="+width+",height="+height+",top="+dalt+",left="+left;
			window.open(url,"Facebook",opts);
			event.preventDefault();
		},
		whatsapp: function ()
		{
			var nameUrl = window.location.href;
			$('.whatsapp').prop('href','whatsapp://send?text='+nameUrl);
		},
		getWidth: function(element) //Función que obtiene el width de una img en IE8 @TODO Hacerla genérica para cualquier propiedad 
		{
			var img = new Image(); 
			img.src = element.prop("src"); 
			
			return img.width;
			
		},
		widthImatge: function(element)
		{
			var width = element.attr("width");
			if(width == null){
				width = element.prop("naturalWidth");
				if(width == null){ //En IE8
					width = genericResponsive.getWidth(element);
				} 
			}
			var parent = element.closest("div");
			
			var who = this.esMobil();

			if (who) {
				parent.addClass("col-xs-12");
			} else {

				if (width >= 750) {
					parent.addClass("col-sm-12");

				} else if (width >= 500) {

					parent.addClass("col-sm-8");

				} else if (width >= 300) {

					parent.addClass("col-sm-6");

				} else {

					parent.addClass("col-sm-4");
				}
			}
		},
		reorderList: function(ul)
		{
			var i=0;
			var elementsLlista = 0;
			var llistaElements = ul.find("> li");
			if(llistaElements.length != 0)
			{
				if((llistaElements.length %2) == 1){
					elementsLlista = Math.floor(llistaElements.length/2);
				}
				else{
					elementsLlista = (llistaElements.length/2)-1;
				}
				for (i=0; i<llistaElements.length; i++){
					if(i==elementsLlista){
							$(llistaElements[i]).addClass("ultim-esq");
							$(llistaElements[i+1]).addClass("primer-dret");
					}
				}
			}
		},
		heightMenuMobil: function(element){
			if(this.esMobil()){
				var heightTitol = element.height();
				//Anem a Prendre la Referència d'altura de la imatge de l'esquerra
				var heightImatge = $(".coloca button").height();
				//Buscar el container parent de id
				container = element.closest(".container");
				if(heightTitol > heightImatge){
					if(heightTitol > (heightImatge*2)){
						container.addClass("three-lines");
						$(".capcelera_basica").addClass("three-lines");
						$("form.navbar-form.navbar-left.primer").addClass("three-lines");
					} else {
						container.addClass("two-lines");
						$(".capcelera_basica").addClass("two-lines");
						$("form.navbar-form.navbar-left.primer").addClass("two-lines");
					}
				} 
			}
		},
		autoHeight: function(element){
			if($(element).hasClass("mob")){
				if(this.esMobil()){
					var maximaAltura = 0;
					$(element).children().each(function() {
						if(maximaAltura<$(this).height())
						{
							maximaAltura = $(this).height();
							if(console.log(maximaAltura));
						}
					});
					$(element).children().height(maximaAltura);
				}			
			}
			else if($(element).hasClass("tots")){
				var maximaAltura = 0;
				$(element).children().each(function() {
					if(maximaAltura<$(this).height())
					{
						maximaAltura = $(this).height();
						if(console.log(maximaAltura));
					}
				});
				$(element).children().height(maximaAltura);
			}
			else {
				if(!this.esMobil()){
					var maximaAltura = 0;
					$(element).children().each(function() {
						if(maximaAltura<$(this).height())
						{
							maximaAltura = $(this).height();
							if(console.log(maximaAltura));
						}
					});
					$(element).children().height(maximaAltura);
				}
			}
		},
		treuPaddings: function(element){
			if(this.esMobil()){
				$(element).closest("section").removeClass("padding-xs padding-sm padding-md");
			}else if($(element).hasClass("tots-dis")){
				$(element).closest("section").removeClass("padding-xs padding-sm padding-md");
			}else if($(element).hasClass("desk-dis")){
				$(element).closest("section").removeClass("padding-xs padding-sm padding-md");
			}
		},
		metaAnalitica: function(element){
			var dataNom = $(element).attr("data-nom");
			var value = $(element).text();
			$("meta[name='WT.z_idioma']").after(function(){
				return "<meta name=\"" + dataNom + "\" content=\"" + value + "\" />";
			});
		}
}

/*

function isNumber(n)
{
   return n == parseFloat(n);
}
function isOdd(n)
{
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}
$('ul.llista-subhome').each(function() {
	
	var i=0;
	var elementsLlista = 0;
	var llistaElements = this.querySelectorAll("li");

	if(isOdd(llistaElements.length)){
		elementsLlista = Math.floor(llistaElements.length/2);
	}
	else{
		elementsLlista = (llistaElements.length/2)-1;
	}
	console.log(elementsLlista);
	for (i=0; i<llistaElements.length; i++){
		if(i==elementsLlista){
			if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
				$(llistaElements[i]).addClass("ultim-esq");
				$(llistaElements[i+1]).addClass("primer-dret");
			}
			else if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
				if(isOdd(llistaElements.length)){
					$(llistaElements[i]).addClass("ultim-esq");
					$(llistaElements[i+1]).addClass("primer-dret");
				}
				else{				
					$(llistaElements[i]).addClass("ultim-esq");
				}
			}
			else{
				$(llistaElements[i]).addClass("ultim-esq");
				$(llistaElements[i+1]).addClass("primer-dret");
			}
		}
	}
});
*/
var controlCaptcha; //callBack function
var widgetAmic; //recatpcha object for "enviar a un amic"
var resetAmic = function() { //reset function for "enviar a un amic"
	grecaptcha.reset(widgetAmic);
}
//FUNCION PARA CREAR RECURSIVAMENTE LAS FILA QUE FALTAN
$(document).ready(function(){
	//Creació section de color
	$(".createDiv").each(function(){
		try{
			genericResponsive.renderNewSection($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga renderNewSection: "+e);
		}
	})
	//Enviar a un amic
	$("#e-amic").each(function(){
		try{
			genericResponsive.enviarAmic($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga enviarAmic: "+e);
		}
	})
	//Funcionalitat twitter
	$(".eventTwitter").each(function(){
		try{
			$(this).bind('click', function(){
				genericResponsive.twitter();
			});
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga twitter: "+e);
		}
	})
	
	//Funcionalitat facebook
	$(".eventFacebook").each(function(){
		try{
			$(this).bind('click', function(){
				genericResponsive.facebook();
			});
			
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga facebook: "+e);
		}
	})
	//Funcionalitat Whatsapp
	$(".eventWhatsapp").each(function(){
		try{
			$(this).bind('click', function(){
				genericResponsive.whatsapp();
			});
			
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga Whatsapp: "+e);
		}
	})
	
	//Funcionalitat widthImatge
	$(".widthResponsive").each(function(){
		try{
			genericResponsive.widthImatge($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga widthImatge: "+e);
		}			
	})
	
	//Reordering list
	$('ul.llistaReorder').each(function() {
		try{
			genericResponsive.reorderList($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga llistaReorder: "+e);
		}	
	})
	
	//HeightMenuMobil
	$(".logoPortal a").each(function() {
		try{
			genericResponsive.heightMenuMobil($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga heightMenuMobil: "+e);
		}
	})
	//AutoHeightElements
	$(".gen-height").each(function() {
		try{
			genericResponsive.autoHeight($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema carga AutoHeightElements: "+e);
		}
	})
	$(".treu-paddings-grid").each(function() {
		try{
			genericResponsive.treuPaddings($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema eliminant paddings de la grid: "+e);
		}
	})
	$(".hiddenAnalitica").each(function(){
		try{
			genericResponsive.metaAnalitica($(this));
		}
		catch(e)
		{
			if(console)
				console.log("Problema creant metadades d'analitica: "+e);
		}
	})
	// Corrección para enlaces que contienen '#'
	$('a').each(function() 
	{
		var link = $(this).attr('href');
		if (typeof link !== 'undefined' && link !== null) 
		{
			if (link.search('U0023') !== -1) 
			{
				link = link.replace('U0023', '#');
				$(this).attr('href', link);
			}
		}		
	});
	//reCatpcha
	var captchaList = document.getElementsByClassName("captchaContainer");
	if (captchaList.length > 0) {
		var locale = document.documentElement.lang || 'ca';
		if (locale.length > 1) {
			locale = locale.substring(0, 2);
		}
		var captchaRenderList = new Array();
	    controlCaptcha = function() {
	        for (var i = 0; i < captchaList.length; i++) {
	        	if (captchaList[i].id == "id_envia_amic_form") {
    				widgetAmic = grecaptcha.render(captchaList[i], {
    					"sitekey": "6LeXwx0UAAAAAMYRScABDJtlRRvg2bVz-qdeFVyb",
    					"hl": locale,
    					'expired-callback': resetAmic
    				})
	        	} else {
    				grecaptcha.render(captchaList[i], {
    					"sitekey": "6LeXwx0UAAAAAMYRScABDJtlRRvg2bVz-qdeFVyb",
    					"hl": locale
    				})
	        	}
	        }
	    }
	    if (typeof grecaptcha == "undefined") {
            var importgr = document.createElement("script");
            importgr.src = "https://www.google.com/recaptcha/api.js?onload=controlCaptcha&render=explicit";
            importgr.setAttribute('async', '');
            importgr.setAttribute('defer', '');
            document.getElementsByTagName("head")[0].appendChild(importgr);
        }
	}
});
