var titulo = document.querySelector("#titulo");
titulo.textContent = "ETECIA Nutrição e Dietética"

let pacientes = document.querySelectorAll(".paciente")

    pacientes.forEach(calcularImc);


function calcularImc(paciente){
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
}