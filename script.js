// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["1", "2", "3", "4", "5", "6", "7", "8"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 = {
    label: "Ventas por mes",
    data: [78, 44, 84, 65, 105, 44, 72, 15], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'white', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const prediccionVentas2020 = {
    label: "Prediccion Ventas por mes",
    data: [
        0,
        85,
        85,
        50,
        102,
        83,
        72,
        15
    ], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'white', // Color de fondo
    borderColor: 'rgba(162, 54, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            prediccionVentas2020
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

function pintar_grafica(){
    // hacer un fetch a la api a traves del metodo post con datos

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=W7yaAtJPDS7p0JzZpMX6Ew0hjBwnRLwH0kAaTSxHqeLO76eYN7sbk37n189ZHk85");

    var raw = JSON.stringify({
    "id_plan_asignatura": 9203
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/previsor", requestOptions)
    .then(response => response.json().then(data => {console.log(data)}))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

pintar_grafica()