
let base_preguntas = readText("base-preguntas.json")
let base_preguntas_mundial = readText("base-preguntas-mundial.json")
let base_preguntas_equipos = readText("base-preguntas-equipos.json")
let base_preguntas_jugadores = readText("base-preguntas-jugadores.json")
let interprete_bp = JSON.parse(base_preguntas)	
let interprete_bp_mundial = JSON.parse(base_preguntas_mundial)	
let interprete_bp_equipos = JSON.parse(base_preguntas_equipos)	
let interprete_bp_jugadores = JSON.parse(base_preguntas_jugadores)	
let pregunta
let posibles_respuestas
let elegir = 0
let puntos = 0
let intentos = 0


function numAleatorioSinRepetir(minimo,maximo) {
	var i;

	if (minimo!=this.minimo || maximo!=this.maximo){ 
		this.minimo=minimo; 
		this.maximo=maximo;
		this.numerosAparecidos=[]; 
		for (i=minimo;i<=maximo;i++)
			this.numerosAparecidos.push(i); 
	}
	
	var random=Math.floor(Math.random()*this.numerosAparecidos.length); 
	var numero=this.numerosAparecidos[random]; 

	return numero; 
}


select_class(".puntos").innerHTML = "RESPUESTAS CORRECTAS : 0 / 10"
select_class(".vidas").innerHTML += "INTENTOS" 


function quitarVida(){
	if (intentos == 1) {
		select_id("vidas_restantes_img_1").style.display = "none"
	}
	else if (intentos == 2) {
		select_id("vidas_restantes_img_2").style.display = "none"
	}
	else if (intentos == 3) {
		select_id("vidas_restantes_img_3").style.display = "none"
	}
}

function reiniciarPuntos(){
	numAleatorioSinRepetir("reset","reset")
	puntos = 0
	intentos = 0
	select_class(".puntos").innerHTML = "RESPUESTAS CORRECTAS : 0 / 10"
	select_id("vidas_restantes_img_1").style.display = "block"
	select_id("vidas_restantes_img_2").style.display = "block"
	select_id("vidas_restantes_img_3").style.display = "block"
}


function escogerPreguntaAleatoria() {
	if(elegir == 0){
		escogerPregunta(Math.floor(Math.random()*45))
	}
	else{
		escogerPregunta(numAleatorioSinRepetir(0,19))
	}
}     

function escogerPregunta(n) {

	if(elegir == 0){
		pregunta = interprete_bp[n]
	}
	else if (elegir == 1) {
		pregunta = interprete_bp_mundial[n]
	}
	else if (elegir == 2) {
		pregunta = interprete_bp_equipos[n]
	}
	else {
		pregunta = interprete_bp_jugadores[n]
	}
	select_id("categoria").innerHTML = pregunta.categoria;
	select_id("pregunta").innerHTML = pregunta.pregunta;
	select_id("imagen").setAttribute("src",pregunta.imagen);
	style("imagen").objectFit = pregunta.objectFit;
	desordenarRespuestas(pregunta)

	console.log(n)
}





let btns = [
	select_id("btn1"),
	select_id("btn2"),
	select_id("btn3"),
	select_id("btn4")
]

function desordenarRespuestas(pregunta) {
	posibles_respuestas = [	
		pregunta.respuesta,
		pregunta.incorrecta1,
		pregunta.incorrecta2,
		pregunta.incorrecta3
	]
	posibles_respuestas.sort(()=> Math.random() - 0.5)
	select_id("btn1").innerHTML = posibles_respuestas[0]
	select_id("btn2").innerHTML = posibles_respuestas[1]
	select_id("btn3").innerHTML = posibles_respuestas[2]
	select_id("btn4").innerHTML = posibles_respuestas[3]
}

let suspender_botones = false;

function oprimir_boton(i) {
	if (suspender_botones) {
		return;
	}
	 suspender_botones = true;

	if(posibles_respuestas[i] == pregunta.respuesta){
		btns[i].style.background = "#43b143";
		puntos += 1
		select_class(".puntos").innerHTML = "RESPUESTAS CORRECTAS : " + puntos + " / 10"
		if (puntos == 10) {
			alertaGanar()
			select_class(".main").style.display = "flex"
			select_class(".game").style.display = "none"
			reiniciarPuntos()
		}
	}
	else{
		btns[i].style.background = "#b82551";
		intentos += 1
		quitarVida()
	}
	for (let j = 0; j < 4; j++) {
		if (posibles_respuestas[j] == pregunta.respuesta) {
		  btns[j].style.background = "#43b143";
		  break;
		}
	}

	setTimeout(() => {
		reiniciar()
		suspender_botones = false;
	}, 2000);
	
	if (intentos == 3) {
		alertaPerder()
		select_class(".main").style.display = "flex"
		select_class(".game").style.display = "none"
		reiniciarPuntos()
	}
}


function reiniciar() {
	for(const btn of btns){
		btn.style.background = "linear-gradient(142deg, rgba(225,195,150,1) 0%, rgba(255,255,255,1) 100%)"
	}
	escogerPreguntaAleatoria()
}


function select_id(id) {
	return document.getElementById(id);
}

function select_class(class_name) {
	return document.querySelector(class_name);
}

function style(id) {
	return select_id(id).style;
}


function readText(ruta_local) {
	var texto = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", ruta_local, false);
	xmlhttp.send();
	if (xmlhttp.status == 200) {
		texto = xmlhttp.responseText;
	}
	return texto;
}
 
function alertaGanar(){
	Swal.fire({
		title: 'Gooooool !!!',
		text: 'Te ganaste la Copa Mundial, Felicidades',
		confirmButtonText: 'Tomar Copa',
		width:'30%',
		padding:'1rem',
		imageUrl: 'https://i.ibb.co/6WNZgq8/Dise-o-sin-t-tulo.gif',
		imageWidth: 200,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonColor: '#5cc62e'
	})	
}


function alertaPerder(){
	Swal.fire({
		title: 'PERDISTE',
		text: 'Esa Copa Mundial no se va a ganar sola, intentalo otra vez',
		confirmButtonText: 'Volver a intentar',
		width:'30%',
		padding:'1rem',
		imageWidth: 200,
		imageHeight: 200,
		imageAlt: 'Custom image',
		icon: 'error',
		confirmButtonColor: '#bc0435'
	})
}	

