function idade(){

    var nome = document.getElementById('nomedapessoa').value;
    nome.value = nome.value.replace(/[^a-zA-Z]/g, '');
    var idade =document.getElementById('idadedapessoa').value;
    console.log(nome);
    console.log(idade);

    if(idade <= 11) {
        document.getElementById('resultado').innerText = "Olá " + nome + " essa é a idade de uma criança";
    } else if (idade >=12 && idade <=20) {
        document.getElementById('resultado').innerText = "Olá " + nome + " essa é a idade de um Adolescente"; 
    } else if (idade >=21 && idade <=65) {
        document.getElementById('resultado').innerText = "Olá " + nome + " essa é a idade de um Adulto"; 
    } else if (idade >= 65) {
        document.getElementById('resultado').innerText = "Olá " + nome + " essa é a idade de um Idoso " + idade + " anos de idade"; 
    }
}