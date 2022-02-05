const savannah = candidatos.filter(function(candidato){
    return candidato.afiliadora == "savannah";
});
const leycy = candidatos.filter(function(candidato){
    return candidato.afiliadora == "leycy";
});

function contactados(lista) {
    return lista.filter(
        function(candidato){
            return candidato.fase1 != "noCont";
        }
    );
}

function interesados(lista) {
    return lista.filter(
        function(candidato){
            return candidato.fase1 === "interesado";
        }
    );
}
function noInteresados(lista) {
    return lista.filter(
        function(candidato){
            return candidato.fase1 === "noInteresado";
        }
    );
}

function procesosIniciados(lista) {
    return lista.filter(
        function(candidato){
           return candidato.fase1 === "inicio";
        }
    );
} 


// let busqueda = [];

// function filtrarFase1(lista){
//     busqueda = [];
    
//     for (let i = 0; i < lista.length; i++){
//         if(busqueda[lista[i].fase1]) {
//             busqueda[lista[i].fase1] += 1;
//         }else {
//             busqueda[lista[i].fase1] = 1;
//         }
//     }
// }

function buscarRepetidos(lista) {
    const listaCount = {};

    lista.map(
        function(candidato) {
            if(listaCount[candidato.dni]) {
                listaCount[candidato.dni] += 1;
            }
            else {
                listaCount[candidato.dni] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).filter(
        function (item) {
            return item[1] > 1;
        }
    );

    // listaArray.map(
    //     function(elemento) {
    //         console.log(elemento[0]
    //             + " aparece "
    //             + elemento[1]
    //             + " veces");
    //     }
    // );
    
    const repetidos = [];

    listaArray.forEach(
        function (dni) {
            let dniNumber = dni[0];
            repetidos.push(lista.filter(
                    function(candidato){
                        return candidato.dni === dniNumber;
                    }
                )
            );
        }
    );

    return repetidos;
}

function numeroDeRepetidosEnLista(lista) {
    const dniRepetidos = buscarRepetidos(lista);
    // suma todos los repetidos y resta la cantidad de dnis diferentes, para
    // contar solo las apariciones después de la primera
    const leadsRepetidos = dniRepetidos.reduce(function (acum, item) {
        return acum + item.length
    }, 0) - dniRepetidos.length; 
    
    return leadsRepetidos;
}

//Se desea calcular el porcentaje de candidatos CONTACTADOS que:
// - No califican
// - No están interesados
// - Iniciarán pronto
// - Iniciaron proceso

function calcularPorcentajeCategoria(lista, parametro) {
    const total = lista.length;
    const numero = lista.filter((candidato) => candidato.fase1 === parametro).length;
    console.log(numero + ' / ' + total);

    const porcentaje = (numero / total) * 100;
    
    return porcentaje.toFixed(0);
}

function calcularPorcentajeContactado(lista) {
    const total = lista.length;
    const numero = contactados(lista).length;

    const porcentaje = (numero / total) * 100;

    return porcentaje.toFixed(0);
}
