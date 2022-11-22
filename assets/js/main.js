function moverBackground1(id){
    style(id).left = "84.5%"
}

function moverBackground2(id){
    style(id).left = "81%"
}

function moverBackground3(id){
    style(id).left = "77.4%"
}

function moverBackground4(id){
    style(id).left = "73.7%"
}

function regresarBackground(id){
    style(id).left= "65%"
}

let encendido = 0

function apagar_musica(){
    select_class(".audio").pause()
    select_class(".btnMusica_off").style.display = "block"
    select_class(".btnMusica_on").style.display = "none"
    encendido = 1
}

function encender_musica(){
    select_class(".audio").play()
    select_class(".btnMusica_off").style.display = "none"
    select_class(".btnMusica_on").style.display = "block"
    encendido = 0
}


select_class(".btnMusica").addEventListener('click', () => {
    if (encendido == 0) {
        apagar_musica()
    }
    else if (encendido == 1) {
        encender_musica()
    }
})
