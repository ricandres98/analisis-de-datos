class Candidato{
    constructor({
        dni,
        fase1,
        fase2 = "NA",
        operacion = "NA",
        afiliadora,
    }){
        this.dni = dni;
        this.fase1 = fase1;
        this.fase2 = fase2;
        this.operacion = operacion;
        this.afiliadora = afiliadora;
    }
}
// Parámetros de clasificación
//
// fase 1: - No contestó ---> noCont
//         - Inició proceso ---> inicio
//         - Interesado, pero no inició ---> interesado
//         - No califica ---> noCal
//         - No le interesa ---> noInteresado
//         - Atendido por otra afiliadora ---> repetido
//
// fase 2: - Aprobado ---> aprobado
//         - En proceso ---> proceso
//         - Falla polígrafo ---> fPoligr
//         - Falla en antecedentes ---> fAnt
//         - Pierde interés ---> pInteres
//         - No paga al aprobar ---> nPaga
//         - N/A ---> NA
//
// operación: - LATAM ---> latam
//            - URBANO ---> urbano
//            - Centros comerciales ---> plazas
//            - N/A ---> NA
//
// Afiliadoras: - savannah
//              - leycy

class ListaDeCandidatos {
    constructor({
        lista = [],
        titulo,
    })
    {
        this._lista = lista;
        this.titulo = titulo;
    }

    get length() {
        return this._lista.length;
    }

    get contactados() {
        return new ListaDeCandidatos({
            lista: this._lista.filter((candidato) => candidato.fase1 !== "noCont"),
            titulo: `${this.titulo}-contactados`, 
        });
    }

    get interesados() {
        return new ListaDeCandidatos({
            lista: this._lista.filter((candidato) => candidato.fase1 === "interesado"),
            titulo: `${this.titulo}-interesados`,
        });
    }
    
    get noInteresados() {
        return new ListaDeCandidatos({
            lista: this._lista.filter((candidato) => candidato.fase1 === "noInteresado"),
            titulo: `${this.titulo}-noInteresados`,
        });
    }

    get noCalifican() {
        return new ListaDeCandidatos({
            lista: this._lista.filter((candidato) => candidato.fase1 === "noCal"),
            titulo: `${this.titulo}-noCalifican`,
        });
    }

    get procesosIniciados() {
        return new ListaDeCandidatos({
            lista: this._lista.filter((candidato) => candidato.fase1 === "inicio"),
            titulo: `${this.titulo}-procesosIniciados`,
        });
    }

    get repetidos() {
        const listaCount = {};
    
        this._lista.map(
            function(candidato) {
                if(listaCount[candidato.dni]) {
                    listaCount[candidato.dni] += 1;
                }
                else {
                    listaCount[candidato.dni] = 1;
                }
            }
        );
    
        const listaArray = Object.entries(listaCount).filter((item) => item[1] > 1);
    
        // listaArray.map(
        //     function(elemento) {
        //         console.log(elemento[0]
        //             + " aparece "
        //             + elemento[1]
        //             + " veces");
        //     }
        // );
        
        const repetidos = [];
    
        listaArray.forEach((dni) => {
                let dniNumber = dni[0];
                repetidos.push(this._lista.filter((candidato) => {
                            return candidato.dni === dniNumber;
                        }
                    )
                );
            }
        );
    
        return repetidos;
    }

    get numeroDeRepetidosEnLista() {
        const dniRepetidos = this.repetidos;
        // suma todos los repetidos y resta la cantidad de dnis diferentes, para
        // contar solo las apariciones después de la primera
        const leadsRepetidos = dniRepetidos.reduce((acum, item) => acum + item.length, 0) 
                            - dniRepetidos.length; 
        
        return leadsRepetidos;
    }

    calcularPorcentajeCategoria(parametro) {
        const total = this._lista.length;
        let cantidad = 0;
        
        //Si no recibe un parametro, calcula el porcentaje de contactados
        if(parametro) {
            cantidad = this._lista.filter((candidato) => candidato.fase1 === parametro).length;
        }else {
            cantidad = this.contactados.length;
        }
    
        const porcentaje = (cantidad / total) * 100;
        
        return porcentaje.toFixed(0);
    } 

    agregarCandidato(nuevoCandidato) {
        this._lista.push(nuevoCandidato);
    }
}

const candidatos = new ListaDeCandidatos({titulo: 'candidatos'});

{
// candidato(dni, fase1, fase2, operacion, afiliadora) 
candidatos.agregarCandidato(new Candidato({dni: "41921818 ", fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43715311 ", fase1: "inicio", fase2: "aprobado", operacion: "latam",  afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "16691705 ", fase1: "inicio", fase2: "aprobado",operacion: "latam", afiliadora: "leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "44035801 ", fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41612900 ", fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41362494 ", fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43327715 ", fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "002193960 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10448699 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41796151 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "80095923 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42504867 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "46077914 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "74744386 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41708041 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "72054922 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42762797 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40167475 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40208311 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41163755 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43519256 ",fase1: "inicio",fase2: "aprobado", operacion: "urbano", afiliadora: "leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42864225 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40218834 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41141091 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45870376 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43470005 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "08694673 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40986514 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "09841642 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "80134324 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41038395 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10652868 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43707334 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43385156 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41970587 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10585754 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42715415 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "47069210 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "44040070 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "44820667 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "48985534 ",fase1: "inicio", fase2:"aprobado", operacion: "urbano", afiliadora: "leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40611560 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40097829 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41763332 ",fase1: "interesado", afiliadora:"leycy"})); // pendiente fotos
candidatos.agregarCandidato(new Candidato({dni: "41991493 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10618688 ",fase1: "interesado", afiliadora:"leycy"})); // pendiente fotos
candidatos.agregarCandidato(new Candidato({dni: "923496804 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "09961644 ",fase1: "inicio", fase2: "fAnt", operacion: "latam", afiliadora: "leycy"})); // Preguntar motivo real por el que desaprueba
candidatos.agregarCandidato(new Candidato({dni: "09990906 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "9740113 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "06783143 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "71406285 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45577554 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41184496 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "001224262 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43639242 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42814234 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "47871062 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10621671 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "9640803 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "25667255 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "46079780 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "75262775 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10106761 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "47762970 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "3096731 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10249138 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "44808232 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "70156388 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "9677509 ",fase1: "inicio", fase2: "nPaga",  afiliadora: "leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43699504 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45529221 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42012000 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41580974 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10752508 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "10751214 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40406997 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45974688 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "09293258 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "25838473 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45555164 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "46909970 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "20672442 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "72885111 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45662881 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "4476033 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "45819198 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "9397868 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43301869 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "71448957 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "47888552 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "73968207 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "7686012 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "47937654 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "71526036 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42888461 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "46637672 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "70511368 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "43769408 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "7474314 ",fase1: "noCal", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "8763960 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "71482642 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41005910 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "9658483 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42333166 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41222749 ",fase1: "interesado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "41629262 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "40686410 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42326351 ",fase1: "noCont", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "33658918 ",fase1: "inicio", fase2:"aprobado", operacion: "urbano", afiliadora: "leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "42199516 ",fase1: "noInteresado", afiliadora:"leycy"}));
candidatos.agregarCandidato(new Candidato({dni: "46851162 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43374885 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "75572580 ",fase1: "inicio", fase2:"proceso", afiliadora: "savannah"})); // pendiente revisión
candidatos.agregarCandidato(new Candidato({dni: "47020913 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "72249150 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "45873256 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "71421612 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40939493 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42326351 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42986476 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41807554 ",fase1: "repetido", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46995393 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "9740113 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "25765209 ",fase1: "repetido", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "71728910 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42888461 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47314993 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "70810007 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "9809311 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46537761 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47294472 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "25683674 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40774522 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40710065 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "48104162 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47845593 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "3830458 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "9843262 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "7761087 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "45516915 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10019320 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42213066 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "9766917 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43707334 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "7761087 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46499080 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46991621 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "70251609 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "21568267 ",fase1: "inicio", fase2:"proceso", afiliadora: "savannah"})); // aclarar
candidatos.agregarCandidato(new Candidato({dni: "42871587 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "45721636 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41740059 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "44908843 ",fase1: "repetido", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10128512 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41048247 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "45997192 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47871062 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "71581064 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "25758676 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41749331 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "33658918 ",fase1: "repetido", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42392783 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40620867 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42695426 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41697534 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46508995 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40143570 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40477511 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41878255 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40054246 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41743346 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43888189 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42809664 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42926129 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "77354331 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "25443826 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10439127 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "08138533",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10760971 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43366150 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41795294 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42767307 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42904299 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "72769596 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46786431 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40188559 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41519728 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47740915 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "46749068 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41841986 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47736209 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42809664 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41545560 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "44200654 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "44263250 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43715311 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "44035801 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41362494 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "002193960 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41796151 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42504867 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "74744386 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "72054922 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "004564050 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40167475 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41163755 ",fase1: "inicio", fase2:"aprobado", operacion: "plazas", afiliadora: "savannah"})); // operación pendiente
candidatos.agregarCandidato(new Candidato({dni: "42864225 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42864225 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "42864225 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41141091 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43470005 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43470005 ",fase1: "noInteresado", afiliadora:"savannah"})); //repetido en la linea de arriba
candidatos.agregarCandidato(new Candidato({dni: "40986514 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "80134324 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10652868 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "43385156 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10585754 ",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "44820667",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "40611560 ",fase1: "noInteresado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41763332",fase1: "interesado", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10618688",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "09990906",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "48363886",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "70156388",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "45577554 ",fase1: "noCont", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "70156388 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "45555164 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "09572222 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "20672442 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "10665442 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "72661980 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47341688 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "44101394",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "47953975 ",fase1: "noCal", afiliadora:"savannah"}));
candidatos.agregarCandidato(new Candidato({dni: "41430154 ",fase1: "noCal", afiliadora:"savannah"}));
//candidatos.push(new candidato(" ","","savannah"));
}

const savannah = new ListaDeCandidatos({
    lista: candidatos._lista.filter((candidato) => candidato.afiliadora == "savannah"),
    titulo: 'Savannah',
}); 
const leycy = new ListaDeCandidatos({
    lista: candidatos._lista.filter((candidato) => candidato.afiliadora == "leycy"),
    titulo: 'Savannah',
}); 