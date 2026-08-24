const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = documente.querySelectorAll('.checkbox');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$*&%+=-_,<>~?';
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;


function diminuiTamanho() {
    if (tamanhoSenha>1){
        tamanhoSenha = tamanhoSenha - 1;
    }
   
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha<20){
        tamanhoSenha = tamanhoSenha + 1;
    }
   
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for(i=o;i<checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}


geraSenha();

function geraSenha(){
    let alfabeto = '';
    if(checkbox[0].checked){
        alfabeto = alafabeto + letrasMaiusculas;
    }
    if(checkbox[1].checked){
        alfabeto = alafabeto + letrasMinusculas;
    }
    if(checkbox[2].checked){
        alfabeto = alafabeto + numeros;
    }
    if(checkbox[3].checked){
        alfabeto = alafabeto + simbolos;
    }




    let senha = '';
    for (let i=0; i<tamanhoSenha; i++){
        let numeroAleatorio = Math.random()* alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }  

     campoSenha.value = senha;
     classificaSenha(alfabeto.length);
}

function classificaSenha(){
    let entropia = tamanhaSenha*Math.log2(tamanhoAlfabeto);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if(entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57){
        forcaSenha.classList.add('media');
    } else if (entropia < 57){
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "um computador pode levar até" + Math.floor (2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha.";
    }