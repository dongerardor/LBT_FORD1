var rodapes = ["section1", "section2", "section3"];
var rodapeAtivo = 0;

$(function() {
  $("#info_painelInferior section .btn_anterior").click(function(evt){
  	nav_painelInferior("prev");
  })
  $("#info_painelInferior section .btn_seguinte").click(function(evt){
  	nav_painelInferior("next");
  })
});

function nav_painelInferior(pos){

	for (var i = 0; i<rodapes.length; i++){
		$("#" + rodapes[i]).css("display", "none");
	}
	
	if (pos == "prev"){
		if (rodapeAtivo == 0){
			rodapeAtivo = rodapes.length - 1;
		}else{
			rodapeAtivo -= 1;
		}
	}else{
		if (rodapeAtivo == rodapes.length - 1){
			rodapeAtivo = 0;
		}else{
			rodapeAtivo += 1;
		}
	}

	//$("#" + rodapes[rodapeAtivo]).css("display", "block");
	console.log("rodapeAtivo");

	//TweenLite.from($("#" + rodapes[rodapeAtivo]), .5, {padding-left:1000});

}

/*var obj = {myProp:0};
TweenLite.to(obj, 2, {myProp:100});

var photo = document.getElementById("photo"); //or use jQuery's $("#photo")
TweenLite.to(photo, 1.5, {width:100});*/