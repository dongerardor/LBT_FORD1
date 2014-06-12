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
	var iOS 				= ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

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
	  		rodapeOff();
  		}else{
	  		nav_painelInferior("next");
  		}
  	})

  	$("#animacao1").click(function(){
   		document.getElementById('animacao1').play();
	});
	$("#animacao2").click(function(){
   		document.getElementById('animacao2').play();
	});
	$("#animacao3").click(function(){
   		document.getElementById('animacao3').play();
	});


///////////////////////////////////////////////////
	
	if (!iOS){
		$("video").attr("poster", "images/animacoes/posterVideo.png");
	}

	function initAll(){
		blueprint();
		rodapeOff();
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
						rodapeOff();
					}else{
						$('.pulsantes').css("display", "none");
						$(pulsanteAtivo).css("display", "block");
					}
				},2000);
			});
		}
	}

	function rodapeOff(){
		rodapeAtivo = 0;
		$("#info_painelInferior").fadeOut();
		$(".pulsantes").hide();
		$("section").hide();
		$(".tooltip").hide();
	}

	function adminVideo(video){
		if (!iOS){
			document.getElementById('animacao1').pause()
			document.getElementById('animacao1').currentTime = 0;
			document.getElementById('animacao2').pause()
			document.getElementById('animacao2').currentTime = 0;
			document.getElementById('animacao3').pause()
			document.getElementById('animacao3').currentTime = 0;

			if (video){
				var videoAtual = document.getElementById('animacao' + (rodapeAtivo + 1));
				videoAtual.play();
			}
		}
	}

	function showTooltip(){
		var idTooltip = "tooltip" + (rodapeAtivo + 1);
		if ($("#" + idTooltip).css("display") == "none"){
			$("#" + idTooltip).fadeIn("slow");
		}
	}
});