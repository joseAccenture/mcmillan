$(document).ready(function() {
	$( ".fpca_peu_faldoLlista select" ).on( "change", function() {
		url = $(this).find("option:selected").last().attr('value');
		$(this).children().removeAttr("selected");
		window.open(url, '_self', 'location=yes');
	});	
});