$(function() {

	var rodapes 			= ["section1", "section2", "section3"];
	var pulsantes 			= ["pulsante_tela1", "pulsante_tela2", "pulsante_tela3"];
	var rodapeAtivo 		= 0;
	var blueprintOn 		= false;
	var fadeInTime 			= 2000;
	var pulsarOn 			= true;
	var pulsarOpacidad00 	= .2;
	var pulsarOpacidad01 	= .6;
	var mouseoverPulsante  	= false;

    $('.pulsante').click(function(evt){
    	showTooltip();
    }).mouseover(function(evt){
    	$('.pulsante').removeClass("pulsando");
    }).mouseout(function(evt){
    	$('.pulsante').addClass("pulsando");
    });
    // fim PULSAR //

	$("#btn_comoFunciona").click(function(evt){
		blueprintOn = blueprintOn?false:true;
		initAll();
	})

  	$("#info_painelInferior section .btn_anterior").click(function(evt){
  		nav_painelInferior("prev");
  	})
  	$("#info_painelInferior section .btn_seguinte").click(function(evt){
  		if ($(this).attr("id") == "btn_inicio"){
  			blueprintOn = false;
  			blueprint();
	  		resetRodape();
  		}else{
	  		nav_painelInferior("next");
  		}
  	})




///////////////////////////////////////////////////


	function initAll(){
		blueprint();
		resetRodape();
		activateRodape();
	}


	function blueprint(){
		if (blueprintOn){
			$("#fordFiestaBlueprint").fadeIn(fadeInTime);
		}else{
			$("#fordFiestaBlueprint").fadeOut(fadeInTime);
		}
	}


	function nav_painelInferior(pos){
		$(".pulsantes").hide();
		$("section").hide();
		$(".tooltip").hide();
		
		if (pos == "prev"){
			if (rodapeAtivo == 0){
				rodapeAtivo = rodapes.length - 1;
			}else{
				rodapeAtivo -= 1;
			}
		}else if (pos == "next"){
			if (rodapeAtivo == rodapes.length - 1){
				rodapeAtivo = 0;
			}else{
				rodapeAtivo += 1;
			}
		}
		activateRodape();
	}


	function activateRodape(){

		if ($("#info_painelInferior").css("display") == "none"){
			$("#info_painelInferior").fadeIn("fast", function(){
				goOnRodape();
			});
		}else{
			goOnRodape();
		}

		function goOnRodape(){
			$("#" + rodapes[rodapeAtivo]).fadeIn("slow", function(){
				adminVideo(true);
				var localRodapeAtivo = rodapeAtivo;
				var pulsanteAtivo = "#pulsante_tela" + (rodapeAtivo + 1);
				$('.pulsantes').css("display", "none");
				setTimeout(function(){
					if (!blueprintOn){
						resetRodape();
					}else{
						$('.pulsantes').css("display", "none");
						$(pulsanteAtivo).css("display", "block");
					}
				},2000);
			});
		}
	}

	function resetRodape(){
		rodapeAtivo = 0;
		$("#info_painelInferior").fadeOut();
		blueprint(false);
		adminVideo(false);
		$(".pulsantes").hide();
		$("section").hide();
		$(".tooltip").hide();
	}

	function adminVideo(video){
		var video1 = document.getElementById('animacao1');
		var video2 = document.getElementById('animacao2');
		var video3 = document.getElementById('animacao3');
		var videos = [video1, video2, video3];
		for (var i=0; i<videos.length; i++){
			videos[i].pause();
			videos[i].currentTime = 0;
		}		

		var videoAtual = document.getElementById('animacao' + (rodapeAtivo + 1));
		if (video){
			videoAtual.loop = true;
			videoAtual.play();
		}
	}

	function showTooltip(){
		var idTooltip = "tooltip" + (rodapeAtivo + 1);
		if ($("#" + idTooltip).css("display") == "none"){
			$("#" + idTooltip).fadeIn("slow");
		}
	}




});

