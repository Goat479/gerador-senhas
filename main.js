const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

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

const campoSenha = document.querySelector('#campo-senha');
const checkbox = documente.querySelectorAll('.checkbox');
for(i=o;i<checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}


const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$*&%+=-_,<>~?'
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
}
