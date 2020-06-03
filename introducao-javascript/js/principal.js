console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo"); //querySelector = seleciona a classe ".titulo"
titulo.textContent = "Gui"; //Renomeia no html 

var pacientes = document.querySelectorAll(".paciente"); // seleciona todos do array ".paciente" 

for (var i =0; i < pacientes.length; i++){
    // for ( de onde iniciar i ; até onde i vai; quanto add para i)
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoTrue = true;
    var altTrue = true;

    if (peso<=0 || peso >=1000){
        // peso<=0 OU peso >=1000 - nesse caso || faz a validação das duas instruções 

        pesoTrue = false;
        tdImc.textContent="Peso Inválido";
        paciente.classList.add("paciente-invalido"); //adiciona instrução na classe CSS "paciente-invalido"
    }

    if(altura<=0 || altura >=2.50){

        altTrue = false;
        tdAltura.textContent="Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoTrue && altTrue){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2); 


    }


}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    // preventDefault - Previne ação padrão

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);




});