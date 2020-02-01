$(document).ready(function(){
    $("#owlino").click(function(){
    	$(".content-games").show(400);
    	$(".owlino-game").show(400);
    	$(".noel-game").hide();
	});
	$("#noel").click(function(){
    	$(".content-games").show(400);
    	$(".owlino-game").hide();
    	$(".noel-game").show(400);
	});

	$("#close-games").click(function(){
    	$(".content-games").hide(400);
    	$(".owlino-game").hide(400);
    	$(".noel-game").hide(400);
	});

});