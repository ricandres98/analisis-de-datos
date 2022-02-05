function candidato(dni, fase1, fase2, operacion, afiliadora) {
    this.dni = dni;
    this.fase1 = fase1;
    this.fase2 = fase2;
    this.operacion = operacion;
    this.afiliadora = afiliadora;
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

const candidatos = [];

// candidato(dni, fase1, fase2, operacion, afiliadora) 
candidatos.push(new candidato("41921818 ","noInteresado","", "","leycy"));
candidatos.push(new candidato("43715311 ","inicio","aprobado","latam","leycy"));
candidatos.push(new candidato("16691705 ","inicio","aprobado","latam","leycy"));
candidatos.push(new candidato("44035801 ","noCont","","","leycy"));
candidatos.push(new candidato("41612900 ","noInteresado","","","leycy"));
candidatos.push(new candidato("41362494 ","noInteresado","","","leycy"));
candidatos.push(new candidato("43327715 ","noCont","","","leycy"));
candidatos.push(new candidato("002193960 ","noInteresado","","","leycy"));
candidatos.push(new candidato("10448699 ","noCont","","","leycy"));
candidatos.push(new candidato("41796151 ","noCont","","","leycy"));
candidatos.push(new candidato("80095923 ","noCont","","","leycy"));
candidatos.push(new candidato("42504867 ","noCont","","","leycy"));
candidatos.push(new candidato("46077914 ","noCal","","","leycy"));
candidatos.push(new candidato("74744386 ","noCont","","","leycy"));
candidatos.push(new candidato("41708041 ","interesado","","","leycy"));
candidatos.push(new candidato("72054922 ","noInteresado","","","leycy"));
candidatos.push(new candidato("42762797 ","noCont","","","leycy"));
candidatos.push(new candidato("40167475 ","noCont","","","leycy"));
candidatos.push(new candidato("40208311 ","noInteresado","","","leycy"));
candidatos.push(new candidato("41163755 ","noCont","","","leycy"));
candidatos.push(new candidato("43519256 ","inicio","aprobado","urbano","leycy"));
candidatos.push(new candidato("42864225 ","noInteresado","","","leycy"));
candidatos.push(new candidato("40218834 ","noCont","","","leycy"));
candidatos.push(new candidato("41141091 ","noInteresado","","","leycy"));
candidatos.push(new candidato("45870376 ","noCal","","","leycy"));
candidatos.push(new candidato("43470005 ","noCal","","","leycy"));
candidatos.push(new candidato("08694673 ","noCal","","","leycy"));
candidatos.push(new candidato("40986514 ","noCal","","","leycy"));
candidatos.push(new candidato("09841642 ","noCont","","","leycy"));
candidatos.push(new candidato("80134324 ","noCal","","","leycy"));
candidatos.push(new candidato("41038395 ","noCont","","","leycy"));
candidatos.push(new candidato("10652868 ","interesado","","","leycy"));
candidatos.push(new candidato("43707334 ","noCal","","","leycy"));
candidatos.push(new candidato("43385156 ","noInteresado","","","leycy"));
candidatos.push(new candidato("41970587 ","noCont","","","leycy"));
candidatos.push(new candidato("10585754 ","noInteresado","","","leycy"));
candidatos.push(new candidato("42715415 ","noInteresado","","","leycy"));
candidatos.push(new candidato("47069210 ","noCont","","","leycy"));
candidatos.push(new candidato("44040070 ","noCont","","","leycy"));
candidatos.push(new candidato("44820667 ","noCont","","","leycy"));
candidatos.push(new candidato("48985534 ","inicio","aprobado","urbano","leycy"));
candidatos.push(new candidato("40611560 ","noCont","","","leycy"));
candidatos.push(new candidato("40097829 ","noCont","","","leycy"));
candidatos.push(new candidato("41763332 ","interesado","","","leycy")); // pendiente fotos
candidatos.push(new candidato("41991493 ","noCont","","","leycy"));
candidatos.push(new candidato("10618688 ","interesado","","","leycy")); // pendiente fotos
candidatos.push(new candidato("923496804 ","interesado","","","leycy"));
candidatos.push(new candidato("09961644 ","inicio","fAnt","latam","leycy")); // Preguntar motivo real por el que desaprueba
candidatos.push(new candidato("09990906 ","noCont","","","leycy"));
candidatos.push(new candidato("9740113 ","noCont","","","leycy"));
candidatos.push(new candidato("06783143 ","noCont","","","leycy"));
candidatos.push(new candidato("71406285 ","noCont","","","leycy"));
candidatos.push(new candidato("45577554 ","interesado","","","leycy"));
candidatos.push(new candidato("41184496 ","noCont","","","leycy"));
candidatos.push(new candidato("001224262 ","interesado","","","leycy"));
candidatos.push(new candidato("43639242 ","interesado","","","leycy"));
candidatos.push(new candidato("42814234 ","noInteresado","","","leycy"));
candidatos.push(new candidato("47871062 ","noInteresado","","","leycy"));
candidatos.push(new candidato("10621671 ","interesado","","","leycy"));
candidatos.push(new candidato("9640803 ","noCont","","","leycy"));
candidatos.push(new candidato("25667255 ","interesado","","","leycy"));
candidatos.push(new candidato("46079780 ","noCont","","","leycy"));
candidatos.push(new candidato("75262775 ","interesado","","","leycy"));
candidatos.push(new candidato("10106761 ","noInteresado","","","leycy"));
candidatos.push(new candidato("47762970 ","noCont","","","leycy"));
candidatos.push(new candidato("3096731 ","interesado","","","leycy"));
candidatos.push(new candidato("10249138 ","noInteresado","","","leycy"));
candidatos.push(new candidato("44808232 ","noCont","","","leycy"));
candidatos.push(new candidato("70156388 ","noCont","","","leycy"));
candidatos.push(new candidato("9677509 ","inicio","nPaga","","leycy"));
candidatos.push(new candidato("43699504 ","noInteresado","","","leycy"));
candidatos.push(new candidato("45529221 ","noCont","","","leycy"));
candidatos.push(new candidato("42012000 ","noCont","","","leycy"));
candidatos.push(new candidato("41580974 ","noInteresado","","","leycy"));
candidatos.push(new candidato("10752508 ","noCont","","","leycy"));
candidatos.push(new candidato("10751214 ","noCont","","","leycy"));
candidatos.push(new candidato("40406997 ","interesado","","","leycy"));
candidatos.push(new candidato("45974688 ","interesado","","","leycy"));
candidatos.push(new candidato("09293258 ","noCont","","","leycy"));
candidatos.push(new candidato("25838473 ","noCont","","","leycy"));
candidatos.push(new candidato("45555164 ","noCont","","","leycy"));
candidatos.push(new candidato("46909970 ","interesado","","","leycy"));
candidatos.push(new candidato("20672442 ","noInteresado","","","leycy"));
candidatos.push(new candidato("72885111 ","noCont","","","leycy"));
candidatos.push(new candidato("45662881 ","noCont","","","leycy"));
candidatos.push(new candidato("4476033 ","noCont","","","leycy"));
candidatos.push(new candidato("45819198 ","noCont","","","leycy"));
candidatos.push(new candidato("9397868 ","noCont","","","leycy"));
candidatos.push(new candidato("43301869 ","noCal","","","leycy"));
candidatos.push(new candidato("71448957 ","noCal","","","leycy"));
candidatos.push(new candidato("47888552 ","noCont","","","leycy"));
candidatos.push(new candidato("73968207 ","noCont","","","leycy"));
candidatos.push(new candidato("7686012 ","interesado","","","leycy"));
candidatos.push(new candidato("47937654 ","noCal","","","leycy"));
candidatos.push(new candidato("71526036 ","noCont","","","leycy"));
candidatos.push(new candidato("42888461 ","noCont","","","leycy"));
candidatos.push(new candidato("46637672 ","noCont","","","leycy"));
candidatos.push(new candidato("70511368 ","noCont","","","leycy"));
candidatos.push(new candidato("43769408 ","noCal","","","leycy"));
candidatos.push(new candidato("7474314 ","noCal","","","leycy"));
candidatos.push(new candidato("8763960 ","noCont","","","leycy"));
candidatos.push(new candidato("71482642 ","noInteresado","","","leycy"));
candidatos.push(new candidato("41005910 ","interesado","","","leycy"));
candidatos.push(new candidato("9658483 ","noInteresado","","","leycy"));
candidatos.push(new candidato("42333166 ","noInteresado","","","leycy"));
candidatos.push(new candidato("41222749 ","interesado","","","leycy"));
candidatos.push(new candidato("41629262 ","noCont","","","leycy"));
candidatos.push(new candidato("40686410 ","noInteresado","","","leycy"));
candidatos.push(new candidato("42326351 ","noCont","","","leycy"));
candidatos.push(new candidato("33658918 ","inicio","aprobado","urbano","leycy"));
candidatos.push(new candidato("42199516 ","noInteresado","","","leycy"));
candidatos.push(new candidato("46851162 ","interesado","","","savannah"));
candidatos.push(new candidato("43374885 ","interesado","","","savannah"));
candidatos.push(new candidato("75572580 ","inicio","proceso","","savannah")); // pendiente revisión
candidatos.push(new candidato("47020913 ","noInteresado","","","savannah"));
candidatos.push(new candidato("72249150 ","noInteresado","","","savannah"));
candidatos.push(new candidato("45873256 ","noInteresado","","","savannah"));
candidatos.push(new candidato("71421612 ","noInteresado","","","savannah"));
candidatos.push(new candidato("40939493 ","noCal","","","savannah"));
candidatos.push(new candidato("42326351 ","noInteresado","","","savannah"));
candidatos.push(new candidato("42986476 ","noCal","","","savannah"));
candidatos.push(new candidato("41807554 ","repetido","","","savannah"));
candidatos.push(new candidato("46995393 ","noCont","","","savannah"));
candidatos.push(new candidato("9740113 ","noCont","","","savannah"));
candidatos.push(new candidato("25765209 ","repetido","","","savannah"));
candidatos.push(new candidato("71728910 ","interesado","","","savannah"));
candidatos.push(new candidato("42888461 ","noCont","","","savannah"));
candidatos.push(new candidato("47314993 ","noInteresado","","","savannah"));
candidatos.push(new candidato("70810007 ","interesado","","","savannah"));
candidatos.push(new candidato("9809311 ","noInteresado","","","savannah"));
candidatos.push(new candidato("46537761 ","interesado","","","savannah"));
candidatos.push(new candidato("47294472 ","noInteresado","","","savannah"));
candidatos.push(new candidato("25683674 ","noInteresado","","","savannah"));
candidatos.push(new candidato("40774522 ","interesado","","","savannah"));
candidatos.push(new candidato("40710065 ","noInteresado","","","savannah"));
candidatos.push(new candidato("48104162 ","noInteresado","","","savannah"));
candidatos.push(new candidato("47845593 ","noInteresado","","","savannah"));
candidatos.push(new candidato("3830458 ","noInteresado","","","savannah"));
candidatos.push(new candidato("9843262 ","noCal","","","savannah"));
candidatos.push(new candidato("7761087 ","noCont","","","savannah"));
candidatos.push(new candidato("45516915 ","noInteresado","","","savannah"));
candidatos.push(new candidato("10019320 ","noCont","","","savannah"));
candidatos.push(new candidato("42213066 ","noInteresado","","","savannah"));
candidatos.push(new candidato("9766917 ","noCont","","","savannah"));
candidatos.push(new candidato("43707334 ","noCal","","","savannah"));
candidatos.push(new candidato("7761087 ","noCont","","","savannah"));
candidatos.push(new candidato("46499080 ","noInteresado","","","savannah"));
candidatos.push(new candidato("46991621 ","noInteresado","","","savannah"));
candidatos.push(new candidato("70251609 ","noCont","","","savannah"));
candidatos.push(new candidato("21568267 ","inicio","proceso","","savannah")); // aclarar
candidatos.push(new candidato("42871587 ","noInteresado","","","savannah"));
candidatos.push(new candidato("45721636 ","noCont","","","savannah"));
candidatos.push(new candidato("41740059 ","noCont","","","savannah"));
candidatos.push(new candidato("44908843 ","repetido","","","savannah"));
candidatos.push(new candidato("10128512 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41048247 ","noCont","","","savannah"));
candidatos.push(new candidato("45997192 ","noInteresado","","","savannah"));
candidatos.push(new candidato("47871062 ","noInteresado","","","savannah"));
candidatos.push(new candidato("71581064 ","interesado","","","savannah"));
candidatos.push(new candidato("25758676 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41749331 ","noCont","","","savannah"));
candidatos.push(new candidato("33658918 ","repetido","","","savannah"));
candidatos.push(new candidato("42392783 ","noInteresado","","","savannah"));
candidatos.push(new candidato("40620867 ","noCont","","","savannah"));
candidatos.push(new candidato("42695426 ","noCont","","","savannah"));
candidatos.push(new candidato("41697534 ","noInteresado","","","savannah"));
candidatos.push(new candidato("46508995 ","noCont","","","savannah"));
candidatos.push(new candidato("40143570 ","noCont","","","savannah"));
candidatos.push(new candidato("40477511 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41878255 ","interesado","","","savannah"));
candidatos.push(new candidato("40054246 ","noCont","","","savannah"));
candidatos.push(new candidato("41743346 ","noCal","","","savannah"));
candidatos.push(new candidato("43888189 ","interesado","","","savannah"));
candidatos.push(new candidato("42809664 ","noInteresado","","","savannah"));
candidatos.push(new candidato("42926129 ","noCal","","","savannah"));
candidatos.push(new candidato("77354331 ","noCal","","","savannah"));
candidatos.push(new candidato("25443826 ","noCal","","","savannah"));
candidatos.push(new candidato("10439127 ","interesado","","","savannah"));
candidatos.push(new candidato("08138533","noCont","","","savannah"));
candidatos.push(new candidato("10760971 ","noCont","","","savannah"));
candidatos.push(new candidato("43366150 ","noCont","","","savannah"));
candidatos.push(new candidato("41795294 ","noInteresado","","","savannah"));
candidatos.push(new candidato("42767307 ","noCont","","","savannah"));
candidatos.push(new candidato("42904299 ","noInteresado","","","savannah"));
candidatos.push(new candidato("72769596 ","noCont","","","savannah"));
candidatos.push(new candidato("46786431 ","noInteresado","","","savannah"));
candidatos.push(new candidato("40188559 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41519728 ","interesado","","","savannah"));
candidatos.push(new candidato("47740915 ","noCont","","","savannah"));
candidatos.push(new candidato("46749068 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41841986 ","noInteresado","","","savannah"));
candidatos.push(new candidato("47736209 ","interesado","","","savannah"));
candidatos.push(new candidato("42809664 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41545560 ","noCal","","","savannah"));
candidatos.push(new candidato("44200654 ","noInteresado","","","savannah"));
candidatos.push(new candidato("44263250 ","noInteresado","","","savannah"));
candidatos.push(new candidato("43715311 ","noInteresado","","","savannah"));
candidatos.push(new candidato("44035801 ","noCont","","","savannah"));
candidatos.push(new candidato("41362494 ","noCont","","","savannah"));
candidatos.push(new candidato("002193960 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41796151 ","interesado","","","savannah"));
candidatos.push(new candidato("42504867 ","noCal","","","savannah"));
candidatos.push(new candidato("74744386 ","noInteresado","","","savannah"));
candidatos.push(new candidato("72054922 ","noCont","","","savannah"));
candidatos.push(new candidato("004564050 ","noInteresado","","","savannah"));
candidatos.push(new candidato("40167475 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41163755 ","inicio","aprobado","plazas","savannah")); // operación pendiente
candidatos.push(new candidato("42864225 ","noInteresado","","","savannah"));
candidatos.push(new candidato("42864225 ","noInteresado","","","savannah"));
candidatos.push(new candidato("42864225 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41141091 ","noCal","","","savannah"));
candidatos.push(new candidato("43470005 ","noInteresado","","","savannah"));
candidatos.push(new candidato("43470005 ","noInteresado","","","savannah")); //repetido en la linea de arriba
candidatos.push(new candidato("40986514 ","noInteresado","","","savannah"));
candidatos.push(new candidato("80134324 ","noCont","","","savannah"));
candidatos.push(new candidato("10652868 ","interesado","","","savannah"));
candidatos.push(new candidato("43385156 ","noCal","","","savannah"));
candidatos.push(new candidato("10585754 ","interesado","","","savannah"));
candidatos.push(new candidato("44820667","noCont","","","savannah"));
candidatos.push(new candidato("40611560 ","noInteresado","","","savannah"));
candidatos.push(new candidato("41763332","interesado","","","savannah"));
candidatos.push(new candidato("10618688","noCont","","","savannah"));
candidatos.push(new candidato("09990906","noCal","","","savannah"));
candidatos.push(new candidato("48363886","noCont","","","savannah"));
candidatos.push(new candidato("70156388","noCal","","","savannah"));
candidatos.push(new candidato("45577554 ","noCont","","","savannah"));
candidatos.push(new candidato("70156388 ","noCal","","","savannah"));
candidatos.push(new candidato("45555164 ","noCal","","","savannah"));
candidatos.push(new candidato("09572222 ","noCal","","","savannah"));
candidatos.push(new candidato("20672442 ","noCal","","","savannah"));
candidatos.push(new candidato("10665442 ","noCal","","","savannah"));
candidatos.push(new candidato("72661980 ","noCal","","","savannah"));
candidatos.push(new candidato("47341688 ","noCal","","","savannah"));
candidatos.push(new candidato("44101394","noCal","","","savannah"));
candidatos.push(new candidato("47953975 ","noCal","","","savannah"));
candidatos.push(new candidato("41430154 ","noCal","","","savannah"));
//candidatos.push(new candidato(" ","","","","savannah"));
