//Se desea calcular el porcentaje de candidatos CONTACTADOS que:
// - No califican
// - No están interesados
// - Iniciarán pronto
// - Iniciaron proceso

// Funciones que escriben en el DOM
const totalGeneral = document.getElementById('total-general');
const repetidosGeneral = document.getElementById('repetidos-general');
const contactadosGeneral = document.getElementById('contactados-general');
const noContGeneral = document.getElementById('noCont-general');
const noCalGeneral = document.getElementById('noCal-general');
const noIntGeneral = document.getElementById('noInt-general');
const intGeneral = document.getElementById('int-general');
const inicioGeneral = document.getElementById('inicio-general');

const elementosBloqueGeneral = {
    total: totalGeneral,
    repetidos: repetidosGeneral,
    contactados: contactadosGeneral,
    noContactados: noContGeneral,
    noCalifican: noCalGeneral,
    noInteresados: noIntGeneral,
    interesados: intGeneral,
    iniciados: inicioGeneral
};

function escribirValor(lugar, valor) {
    lugar.innerHTML = valor;
}
function escribirBloque(bloque, listaDeCandidatos) {    
    bloque.total.innerHTML = listaDeCandidatos.length;
    bloque.repetidos.innerHTML = listaDeCandidatos.numeroDeRepetidosEnLista;
    bloque.contactados.innerHTML = listaDeCandidatos.contactados.length;
    bloque.noContactados.innerHTML = listaDeCandidatos.length - listaDeCandidatos.contactados.length;
    bloque.noCalifican.innerHTML =listaDeCandidatos.noCalifican.length;
    bloque.noInteresados.innerHTML = listaDeCandidatos.noInteresados.length;
    bloque.interesados.innerHTML = listaDeCandidatos.interesados.length;
    bloque.iniciados.innerHTML = listaDeCandidatos.procesosIniciados.length;
}

escribirBloque(elementosBloqueGeneral, candidatos);

const totalEspec = document.getElementById('total-especifico');
const repetidosEspec = document.getElementById('repetidos-especifico');
const contactadosEspec = document.getElementById('contactados-especifico');
const noContEspec = document.getElementById('noCont-especifico');
const noCalEspec = document.getElementById('noCal-especifico');
const noIntEspec = document.getElementById('noInt-especifico');
const intEspec = document.getElementById('int-especifico');
const inicioEspec = document.getElementById('inicio-especifico');

const elementosBloqueEspec = {
    total: totalEspec,
    repetidos: repetidosEspec,
    contactados: contactadosEspec,
    noContactados: noContEspec,
    noCalifican: noCalEspec,
    noInteresados: noIntEspec,
    interesados: intEspec,
    iniciados: inicioEspec
};

// escribirBloque(elementosBloqueEspec, savannah);

const listaAfiliadoras = document.listaAfiliadoras;
const listaAfiliadorasArray = listaAfiliadoras.afiliadoras;

listaAfiliadoras.addEventListener('click', () => {
    let i = 0;
    let opcionSeleccionada = '';

    for(i = 0; i < listaAfiliadorasArray.length; i++) {
        if(listaAfiliadorasArray[i].checked) {
            break;
        }
    }
    
    opcionSeleccionada = listaAfiliadorasArray[i].value;

    switch(opcionSeleccionada) {
        case 'savannah': 
            escribirBloque(elementosBloqueEspec, savannah);
            break;

        case 'leycy':
            escribirBloque(elementosBloqueEspec, leycy);
            break;
    }

    listaAfiliadoras.classList.add('checked');
}, false);

const contactadosComparaL = document.getElementById('contactados-l');
const noContComparaL = document.getElementById('noCont-l');
const noCalComparaL = document.getElementById('noCal-l');
const noIntComparaL = document.getElementById('noInt-l');
const intComparaL = document.getElementById('int-l');
const inicioComparaL = document.getElementById('inicio-l');

const elementosComparaL = {
    porcentajeContactado: contactadosComparaL,
    porcentajeNoContactado: noContComparaL,
    porcentajeNoCalifica: noCalComparaL,
    porcentajeNoInteresado: noIntComparaL,
    porcentajeInteresado: intComparaL,
    porcentajeIniciado: inicioComparaL,
};

const contactadosComparaR = document.getElementById('contactados-r');
const noContComparaR = document.getElementById('noCont-r');
const noCalComparaR = document.getElementById('noCal-r');
const noIntComparaR = document.getElementById('noInt-r');
const intComparaR = document.getElementById('int-r');
const inicioComparaR = document.getElementById('inicio-r');

const elementosComparaR = {
    porcentajeContactado: contactadosComparaR,//0
    porcentajeNoContactado: noContComparaR,//1
    porcentajeNoCalifica: noCalComparaR,//2
    porcentajeNoInteresado: noIntComparaR,//3
    porcentajeInteresado: intComparaR,//4
    porcentajeIniciado: inicioComparaR,//5
};

function escribirPorcentajes(bloque, lista) {
    bloque.porcentajeContactado.innerHTML = lista.calcularPorcentajeCategoria() + '%';
    bloque.porcentajeNoContactado.innerHTML = lista.calcularPorcentajeCategoria('noCont') + '%';
    bloque.porcentajeNoCalifica.innerHTML = lista.contactados.calcularPorcentajeCategoria('noCal') + '%';
    bloque.porcentajeNoInteresado.innerHTML = lista.contactados.calcularPorcentajeCategoria('noInteresado') + '%';
    bloque.porcentajeInteresado.innerHTML = lista.contactados.calcularPorcentajeCategoria('interesado') + '%';
    bloque.porcentajeIniciado.innerHTML = lista.calcularPorcentajeCategoria('inicio') + '%';
}

escribirPorcentajes(elementosComparaL, savannah);
escribirPorcentajes(elementosComparaR, leycy);