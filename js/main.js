let titulo = document.querySelector("#titulo");
titulo.textContent = "ETECIA Nutrição e Dietética"

let pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(function (paciente) {
    let peso = paciente.querySelector(".info-peso").textContent
    let altura = paciente.querySelector(".info-altura").textContent

    let pesoValido = true;
    let alturaValido = true;

    let tdImc = paciente.querySelector(".info-imc")
    if (peso <= 0 || peso > 1000) {
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")

    }
    if (altura <= 0 || altura > 3.00) {
        alturaValido = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }
    if (pesoValido && alturaValido) {
        let imc = peso / altura ** 2
        tdImc.textContent = imc.toFixed(2);
    }
});

titulo.addEventListener("click", mostrarMensagem);
titulo.addEventListener("click", trocarCor);

function mostrarMensagem() {
    console.log("Evento aconteceu.")
}
function trocarCor() {
    let cor = parseInt(Math.random() * 255);
    titulo.style.color = `rgb(${cor},${cor},${cor})`;
}

let botao = document.querySelector("#botao-cadastrar")
botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    //pegar valores do form
    let formulario = document.querySelector("#form-paciente");
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;
    //criar linha
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");
    table.appendChild(tr);
    //criar td
    //nome
    let tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);
    tdNome.classList.add("info-nome")
    //peso
    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    tr.appendChild(tdPeso);
    tdPeso.classList.add("info-peso")
    //altura
    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    tr.appendChild(tdAltura);
    tdAltura.classList.add("info-altura")
    //gordura
    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    tr.appendChild(tdGordura);
    tdGordura.classList.add("info-gordura")
    //IMCZADA
    let tdImc = document.createElement("td");
    //tdImc =;
    tr.appendChild(tdImc);
    tdImc.classList.add("info-imc")
    //console.log(tr);
    
});

