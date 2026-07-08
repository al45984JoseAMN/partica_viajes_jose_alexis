// Referencias globales de los formularios
var formIndividual = document.getElementById("individual");
var formPaquetes = document.getElementById("paquetes");

function calcularIndividual() {
    var total = 0;

    // 1. LÓGICA DE SELECCIÓN DE VUELO
    if (formIndividual.vuelo.value == "sin-avion") {
        total += 999;
    } 
    else if (formIndividual.vuelo.value == "ida") {
        total += 2499;
    }
    // === REQUISITO 3A: Programar la condición para "ida-vuelta" ($5,999 MXN) ===


    // 2. LÓGICA DE HOSPEDAJE (Ya completa)
    if (formIndividual.hospedaje.value == "sin-hotel") {
        total += 499;
    } else if (formIndividual.hospedaje.value == "sencilla") {
        total += 799;
    } else if (formIndividual.hospedaje.value == "doble") {
        total += 999;
    }

    // 3. MULTIPLICADORES (Adultos y Menores)
    // Nota: parseInt asegura que el valor del select se procese como número.
    total += parseInt(formIndividual.adultos.value) * 865;
    total += parseInt(formIndividual.menores.value) * 437;
    
    // 4. MULTIPLICADOR DE DÍAS
    if (!formIndividual.diasIndividual.value || formIndividual.diasIndividual.value < 1) {
        alert("Escriba un número de días válido en la sección Individual");
        return;
    }
    total += parseInt(formIndividual.diasIndividual.value) * 769;

    // Despliegue del resultado formateado en pesos
    formIndividual.totalIndividual.value = "$" + total.toLocaleString('es-MX') + " MXN";
}


// FUNCIÓN DE PAQUETES: Ya viene 100% resuelta para que les sirva de guía de sintaxis
function calcularPaquetes() {
    var total = 0;

    if (formPaquetes.destino.value == "europa") {
        total += 21999;
    } else if (formPaquetes.destino.value == "asia") {
        total += 25999;
    }

    if (!formPaquetes.diasPaquete.value || formPaquetes.diasPaquete.value < 1) {
        alert("Escriba un número de días válido en la sección de Paquetes");
        return;
    }
    total += parseInt(formPaquetes.diasPaquete.value) * 899;

    formPaquetes.totalPaquetes.value = "$" + total.toLocaleString('es-MX') + " MXN";
}