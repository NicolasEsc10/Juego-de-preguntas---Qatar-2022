select_class(".btnExit").addEventListener('click', () => {
    select_class(".main").style.display = "flex"
	select_class(".game").style.display = "none"
    reiniciarPuntos()
})

select_class(".btnGrilla").addEventListener('click', () => {
    select_class(".main").style.display = "none"
	select_class(".grillaMundial").style.display = "flex"
    select_class(".videoGrilla").play()
})

select_class(".btnExit_grilla").addEventListener('click', () => {
    select_class(".main").style.display = "flex"
	select_class(".grillaMundial").style.display = "none"
})


select_id("main_btn1").addEventListener('click', () => {
    elegir = 0
	escogerPreguntaAleatoria()
    select_class(".main").style.display = "none"
	select_class(".game").style.display = "flex"
    reiniciarPuntos()
})

select_id("main_btn2").addEventListener('click', () => {
    elegir = 1
	escogerPreguntaAleatoria()
    select_class(".main").style.display = "none"
	select_class(".game").style.display = "flex"
    reiniciarPuntos()
})


select_id("main_btn3").addEventListener('click', () => {
    elegir = 2
    escogerPreguntaAleatoria()
    select_class(".main").style.display = "none"
	select_class(".game").style.display = "flex"
    reiniciarPuntos()
})

select_id("main_btn4").addEventListener('click', () => {
    elegir = 3
    escogerPreguntaAleatoria()
    select_class(".main").style.display = "none"
	select_class(".game").style.display = "flex"
    reiniciarPuntos()
})