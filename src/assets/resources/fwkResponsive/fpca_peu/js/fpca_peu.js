var listgroup1 = {
	list: $('.list-group1'),
	addclass: function(list){
		if (!$(list).parent('.cerca_xarxes').length ==1){
			$(list).addClass('w-45');
		}
	}
}

$(document).ready(function() {
	$( ".list-group1" ).each(function() {
       try {
            listgroup1.addclass(this);
        } catch (e) {
            if (console) {
                console.log("Error en afagir class a list-group1: " + e);
            }
        }  
    });
	try
	{
		var w2 = $(".avis_legal img.adaptImage").first().width();
		//CAS1: Posem a 2-10 en el cas que l'imatge sigui inferior a 122px (gencat)
		if(w2 < 122)
		{
			$("#peuImatge").attr("class", "col-sm-2 col-md-2 col-lg-2");
			$("#peuAvis").attr("class", "col-sm-10 col-md-10 col-lg-10");
		}
		//CAS2: Posem a 3-9 en desktop i 4-8 en tablet en el cas que l'imatge sigui inferior a 192px (cads)
		else if(w2 < 192)
		{
			$("#peuImatge").attr("class", "col-sm-4 col-md-3 col-lg-3");
			$("#peuAvis").attr("class", "col-sm-8 col-md-9 col-lg-9");
		}
		//CAS3: Posem a 3-9 en desktop i 4-8 en tablet en el cas que l'imatge sigui inferior a 255px (agricultura)
		else if(w2 < 255)
		{
			$("#peuImatge").attr("class", "col-sm-5 col-md-4 col-lg-3");
			$("#peuAvis").attr("class", "col-sm-7 col-md-8 col-lg-9");
		}

		var w3 = $(".avis_legal img.checkImage").first().width();
		if(w3 > 200)
		{
			$(".avis_legal img.checkImage").removeAttr("height");
			$(".avis_legal img.checkImage").attr("width", 200);
		}
	}
	catch(e){
		if(console)
			console.log("Error en el recalcul del peu: "+e);
	}
});
