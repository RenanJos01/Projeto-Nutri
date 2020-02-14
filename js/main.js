//alert("Welcome!")
//console.log("Save")
//console.warn("Virus instalado com sucesso")
//console.error("Falha ao atualizar")


let pacientes = document.querySelectorAll(".paciente")

var titulo = document.querySelector("#titulo");
titulo.textContent = "ETECIA Nutrição e Dietética"

for (var i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]
    //pegar peso
    let tdPeso = paciente.querySelector(".info-peso")
    let peso = tdPeso.textContent
    //pegar altura
    let tdAltura = paciente.querySelector(".info-altura")
    let altura = tdAltura.textContent

    let pesoValido = true;
    let alturaValido = true;
    //validar dados
    if (peso <= 0 || peso > 1000) {
        alert("Peso Inválido")
        pesoValido = false;
        
    }
    if (altura <= 0 || altura > 3.00) {
        alert("Altura Inválido")
        alturaValido = false;
    }
    if (pesoValido && alturaValido) {
        //calcular imc
        let imc = peso / altura ** 2
        //escrever o IMC da pessoa
        let tdImc = paciente.querySelector(".info-imc")
        tdImc.textContent = imc.toFixed(2);
    }
}