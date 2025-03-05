const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const horas = document.getElementById("horas");
const controle = document.getElementById("controle");
const resetar = document.getElementById("resetar");


var estados = ["PAUSAR", "CONTINUAR"], num = 0;


segundos.innerHTML = 0;
minutos.innerHTML = 0;
horas.innerHTML = 0;

function contador(hora, minuto, segundo) {
    // var i = segundo.innerHTML, iMinuto = minuto.innerHTML;

    setInterval(()=>{
        if(estadoAtual() == estados[0]){
        segundo.innerHTML++;
        if(segundo.innerHTML == 59){
            // iMinuto++;
            minuto.innerHTML++;
            segundo.innerHTML = 0;
            // i=0;
        }
        if(minuto.innerHTML == 59){
            // iMinuto = 0;
            hora.innerHTML++;
            minuto.innerHTML = 0;
        }
    }
        
    }, 1000);
    
}

controle.onclick = function(e) {
    e.preventDefault();
    num++;
    controle.innerHTML = estadoAtual();
}

function estadoAtual() {
    return estados[num%2];
}

resetar.onclick = function(e) {
    e.preventDefault();
    segundos.innerHTML = 0;
    minutos.innerHTML = 0;
    horas.innerHTML = 0;
}



contador(horas, minutos, segundos)