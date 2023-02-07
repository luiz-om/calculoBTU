/* Neste exercício você deve implementar uma calculadora de BTU. BTU é o acrônimo 
de British Thermal Unit (Unidade térmica britânica). Trata-se de uma unidade de 
energia muito utilizada para indicar a potência de um ar-condicionado. Logo a 
calculadora deve dizer quantos BTU de potência ele deve ter para um determinado 
cômodo.
1
A fórmula utilizada para o cálculo dos BTU de um cômodo é a seguinte:
● Para cada metro quadrado, soma-se 600 BTU
● Para cada pessoa no cômodo soma-se 600 BTU (A primeira pessoa não é
contabilizada)
● Para cada equipamento eletroeletrônico, soma-se 600 BTU
Exemplo:
Em um cômodo com 30 m2, com 3 pessoas e 2 computadores (eletroeletrônicos), temos
( 30 x 600 ) + ( 2 x 600 ) + ( 2 x 600) = 20.400 BTU
O resultado deve ser exibido em uma janela de alerta. */
let metragemComodo = 30
const BTU = 600
let pessoas = 3 - 1;
let eletroeletronicos = 2

let app = document.getElementById('app')

app.innerHTML = `
<div id='dados'>
            <div id='campos'>
            <label >Qtd Pessoas: </label>
            <input type='text' id='pessoas'placeholder='Pessoas'>
            <label>Qtd Eletrodomesticos: </label>
            <input type='text' id='eletro' placeholder='Eletrodomesticos'>
            <label>Metragem: </label>
            <input type="text" name="" id="metragem" placeholder='Metragem'>
            </div>
            <input type='button' id='d'value='calcular' onclick='calcular()'>
            </div>
            
            <p id='res'></p>
            
            `

            function calcular(){
              let pessoas= document.getElementById('pessoas').value 
              let eletro= document.getElementById('eletro').value 
              let metragem= document.getElementById('metragem').value 
              if (!metragem || !pessoas || !eletro) {
                return
              }
         

             let resultado = (+metragem * BTU) + ((+pessoas-1) * BTU) + (+eletro * BTU)
             document.getElementById('res').innerHTML = `Sera necessario ${resultado}btus, para um ambiente de ${metragem}m2  `


            }



