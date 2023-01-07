let peso = document.getElementById('pesotxt')
let altura = document.getElementById('alturatxt')
let botCalc = document.getElementById('calcularXD')
let resposta = document.getElementById('resposta1')


function calc (){
let peso1 = peso.value
let altura1 = altura.value 
let calcular = peso1 / altura1 ** 2 * 10000

    if (calcular < 18.5) {
        resposta.innerHTML=(`O seu IMC é ${calcular}, está abaixo do peso`)
        resposta.style.background = 'brown'
        
    } else if (calcular > 18.5 && calcular <= 24.9){
        resposta.innerHTML=(`O seu IMC é ${calcular}, está normal`)
        resposta.style.background = 'blue'
    } else if (calcular >= 25 && calcular <= 29.9){
        resposta.innerHTML=(`O seu IMC é ${calcular}, está com Sobrepeso`)
        resposta.style.background = 'green'
    } else if (calcular >= 30 && calcular <= 34.9){
        resposta.innerHTML=(`O seu IMC é ${calcular}, está com Obesidade grau 1`)
        resposta.style.background = 'orange'
    } else if (calcular >= 35 && calcular <= 39.9) {
        resposta.innerHTML=(`O seu IMC é ${calcular}, está com Obesidade grau 2`)
        resposta.style.background = 'orange'
    } else if (calcular >= 40) {
        resposta.innerHTML=(`O seu IMC é ${calcular}, está com Obesidade grau 3`)
        resposta.style.background = 'red'
    }
    
}

botCalc.addEventListener('click', () => {resposta.value = calc()})




