// Funciones que escriben en el DOM
const totalGeneral = document.getElementById('total-general');
const repetidosGeneral = document.getElementById('repetidos-general');
const contactadosGeneral = document.getElementById('contactados-general');
const noContGeneral = document.getElementById('noCont-general');
const noCalGeneral = document.getElementById('noCal-general');
const noIntGeneral = document.getElementById('noInt-general');
const intGeneral = document.getElementById('int-general');
const inicioGeneral = document.getElementById('inicio-general');

const elementosBloqueGeneral = [
    totalGeneral,
    repetidosGeneral,
    contactadosGeneral,
    noContGeneral,
    noCalGeneral,
    noIntGeneral,
    intGeneral,
    inicioGeneral
];

function escribirValor(lugar, valor) {
    lugar.innerHTML = valor;
}
function escribirBloque(bloque, lista) {    
    bloque[0].innerHTML = lista.length;
    bloque[1].innerHTML = numeroDeRepetidosEnLista(lista);
    bloque[2].innerHTML = contactados(lista).length;
    bloque[3].innerHTML = lista.filter((candidato) => candidato.fase1 === 'noCont').length;
    bloque[4].innerHTML =lista.filter((candidato) => candidato.fase1 === 'noCal').length;
    bloque[5].innerHTML = noInteresados(lista).length;
    bloque[6].innerHTML = interesados(lista).length;
    bloque[7].innerHTML = procesosIniciados(lista).length;
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

const elementosBloqueEspec = [
    totalEspec,
    repetidosEspec,
    contactadosEspec,
    noContEspec,
    noCalEspec,
    noIntEspec,
    intEspec,
    inicioEspec
];

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
});

const contactadosComparaL = document.getElementById('contactados-l');
const noContComparaL = document.getElementById('noCont-l');
const noCalComparaL = document.getElementById('noCal-l');
const noIntComparaL = document.getElementById('noInt-l');
const intComparaL = document.getElementById('int-l');
const inicioComparaL = document.getElementById('inicio-l');

const elementosComparaL = [
    contactadosComparaL,
    noContComparaL,
    noCalComparaL,
    noIntComparaL,
    intComparaL,
    inicioComparaL,
]

const contactadosComparaR = document.getElementById('contactados-r');
const noContComparaR = document.getElementById('noCont-r');
const noCalComparaR = document.getElementById('noCal-r');
const noIntComparaR = document.getElementById('noInt-r');
const intComparaR = document.getElementById('int-r');
const inicioComparaR = document.getElementById('inicio-r');

const elementosComparaR = [
    contactadosComparaR,//0
    noContComparaR,//1
    noCalComparaR,//2
    noIntComparaR,//3
    intComparaR,//4
    inicioComparaR,//5
]

function escribirPorcentajes(bloque, lista) {
    bloque[0].innerHTML = calcularPorcentajeContactado(lista) + '%';
    bloque[1].innerHTML = calcularPorcentajeCategoria(lista, 'noCont') + '%';
    bloque[2].innerHTML = calcularPorcentajeCategoria(contactados(lista), 'noCal') + '%';
    bloque[3].innerHTML = calcularPorcentajeCategoria(contactados(lista), 'noInteresado') + '%';
    bloque[4].innerHTML = calcularPorcentajeCategoria(contactados(lista), 'interesado') + '%';
    bloque[5].innerHTML = calcularPorcentajeCategoria(contactados(lista), 'inicio') + '%';
}

escribirPorcentajes(elementosComparaL, savannah);
escribirPorcentajes(elementosComparaR, leycy);