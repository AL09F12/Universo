// JavaScript Document
	$(document).ready(function(e){

    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#roar")[0].play();	
	 $.mobile.navigate( "#principal" );
	});
	
	$('#Teo_un').tap(function (e) {
 	 $.mobile.navigate( "#Teo" );
	});
	
		$('#Gal').tap(function (e) {
 	 $.mobile.navigate( "#Galaxias" );
	});
	
		$('#Es').tap(function (e) {
 	 $.mobile.navigate( "#Estrellas" );
	});
		$('#Com_ast').tap(function (e) {
 	 $.mobile.navigate( "#C_a" );
	});
			$('#Satel').tap(function (e) {
 	 $.mobile.navigate( "#Satelites" );
	});
		$('#Plan').tap(function (e) {
 	 $.mobile.navigate( "#Planetas" );
	});
	
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
	  });
	
});//ready

