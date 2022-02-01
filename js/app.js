const info = document.querySelector('.info');
const caja = document.querySelector('.caja');
const btnCerrar = document.querySelector('.btn-cerrar');

const nombreElemento = document.querySelector('.info-nombre');
const simboloElemento = document.querySelector('.simbolo');
const numAtomicoElemento = document.querySelector('.n-atomico');
const masaAtomicaElemento = document.querySelector('.m-atomica');
const serieQuimicaElemento = document.querySelector('.serie');


btnCerrar.addEventListener('click',cerrar);

let elementos = [{},
    {
        nombre: "Hidrógeno",
        simbolo: "H",
        numatomico: "1",
        masaatomica:"1,00784​ u",
        serie:"No metales"
    },
    {
        nombre: "Helio",
        simbolo:"He",
        numatomico: "2",
        masaatomica:"4,00261​ u",
        serie:"Gases nobles"
    },
    {
        nombre: "Litio",
        simbolo:"Li",
        numatomico: "3",
        masaatomica:"6.94174064 u",
        serie:"Metales alcalinos"
    },
    {
        nombre: "Berilio",
        simbolo:"Be",
        numatomico: "4",
        masaatomica:"9.0122 u",
        serie:"M - alcalinotérreos"
    },
    {
        nombre: "Boro",
        simbolo:"B",
        numatomico: "5",
        masaatomica:"10,811(7)u",
        serie:"Metaloides"
    },
    {
        nombre: "Carbono",
        simbolo:"C",
        numatomico: "6",
        masaatomica:"12,0107 u",
        serie:"No metal"
    },
    {
        nombre: "Nitrógeno",
        simbolo:"N",
        numatomico: "7",
        masaatomica:"14,007 u",
        serie:"No metal"
    },
    {
        nombre: "Oxígeno",
        simbolo:"O",
        numatomico: "8",
        masaatomica:"15,9994 u",
        serie:"No metal"
    },
    {
        nombre: "Flúor",
        simbolo:"F",
        numatomico: "9",
        masaatomica:"18,9984032 u",
        serie:"	Halógenos"
    },
    {
        nombre: "Neón",
        simbolo:"Ne",
        numatomico: "10",
        masaatomica:"20,1797 u",
        serie:"Gases nobles"
    },
    {
        nombre: "Sodio",
        simbolo:"Na",
        numatomico: "11",
        masaatomica:"22.98976928(2) u",
        serie:"Metales alcalinos"
    },
    {
        nombre: "Magnesio",
        simbolo:"Mg",
        numatomico: "12",
        masaatomica:"24,312 u",
        serie:"M-alcalinotérreos"
    },
    {
        nombre: "Aluminio",
        simbolo:"Al",
        numatomico: "13",
        masaatomica:"26,9815386(8) u",
        serie:"Metales bloque p"
    },
    {
        nombre: "Sicilio",
        simbolo:"Si",
        numatomico: "14",
        masaatomica:"28,085 u",
        serie:"Metaloides"
    },
    {
        nombre: "Fósforo",
        simbolo:"P",
        numatomico: "15",
        masaatomica:"30,9737620 u",
        serie:"No metales"
    },
    {
        nombre: "Azufre",
        simbolo:"S",
        numatomico: "16",
        masaatomica:"32,065(5) u",
        serie:"No metales"
    },
    {
        nombre: "Cloro",
        simbolo:"Cl",
        numatomico: "17",
        masaatomica:"35,453 u",
        serie:"Halógenos"
    },
    {
        nombre: "Argón",
        simbolo:"Ar",
        numatomico: "18",
        masaatomica:"39,948 u",
        serie:"Gases nobles"
    },
    {
        nombre: "Potasio",
        simbolo:"K",
        numatomico: "19",
        masaatomica:"39,0983 u",
        serie:"Metales alcalinos"
    },
    {
        nombre: "Calcio",
        simbolo:"Ca",
        numatomico: "20",
        masaatomica:"40,078 u",
        serie:"M-alcalinotérreos"
    },
    {
        nombre: "Escandio",
        simbolo:"Sc",
        numatomico: "21",
        masaatomica:"44,955910 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Titanio",
        simbolo:"Ti",
        numatomico: "22",
        masaatomica:"47,867(1)1​ u",
        serie:"Metal de transición"
    },
    {
        nombre: "Vanadio",
        simbolo:"V",
        numatomico: "23",
        masaatomica:"50,9415 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Cromo",
        simbolo:"Cr",
        numatomico: "24",
        masaatomica:"51,9961 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Manganeso",
        simbolo:"Mn",
        numatomico: "25",
        masaatomica:"54,938049 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Hierro",
        simbolo:"Fe",
        numatomico: "26",
        masaatomica:"55,847 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Cobalto",
        simbolo:"Co",
        numatomico: "27",
        masaatomica:"58,933200 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Níquel",
        simbolo:"Ni",
        numatomico: "28",
        masaatomica:"58,6934 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Cobre",
        simbolo:"Cu",
        numatomico: "29",
        masaatomica:"63,546 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Zinc",
        simbolo:"Zn",
        numatomico: "30",
        masaatomica:"65,38 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Galio",
        simbolo:"Ga",
        numatomico: "31",
        masaatomica:"69,723 u",
        serie:"Metales bloque p"
    },
    {
        nombre: "Germanio",
        simbolo:"Ge",
        numatomico: "32",
        masaatomica:"72,64 u",
        serie:"Metaloides"
    },
    {
        nombre: "Arsénico",
        simbolo:"As",
        numatomico: "33",
        masaatomica:"74,92160 u",
        serie:"Metaloides"
    },
    {
        nombre: "Selenio",
        simbolo:"Se",
        numatomico: "34",
        masaatomica:"78,96 u",
        serie:"No metales"
    },
    {
        nombre: "Bromo",
        simbolo:"Br",
        numatomico: "35",
        masaatomica:"79,909 u",
        serie:"Halógenos"
    },
    {
        nombre: "Kriptón",
        simbolo:"Kr",
        numatomico: "36",
        masaatomica:"83,80 u",
        serie:"Gases nobles"
    },
    {
        nombre: "Rubidio",
        simbolo:"Rb",
        numatomico: "37",
        masaatomica:"85,4678 u",
        serie:"Metales alcalinos"
    },
    {
        nombre: "Estroncio",
        simbolo:"Sr",
        numatomico: "38",
        masaatomica:"87,62 u",
        serie:"M - alcalinotérreos"
    },
    {
        nombre: "Itrio",
        simbolo:"Y",
        numatomico: "39",
        masaatomica:"88,90585 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Circonio",
        simbolo:"Zr",
        numatomico: "40",
        masaatomica:"91,224 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Niobio",
        simbolo:"Nb",
        numatomico: "41",
        masaatomica:"92,90638 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Molibdeno",
        simbolo:"Mo",
        numatomico: "42",
        masaatomica:"95,94 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Tecnecio",
        simbolo:"Tc",
        numatomico: "43",
        masaatomica:"98,90631​ u",
        serie:"Metal de transición"
    },
    {
        nombre: "Rutenio",
        simbolo:"Ru",
        numatomico: "44",
        masaatomica:"101,07 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Rodio",
        simbolo:"Rh",
        numatomico: "45",
        masaatomica:"102,90550 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Paladio",
        simbolo:"Pd",
        numatomico: "46",
        masaatomica:"106,42 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Plata",
        simbolo:"Ag",
        numatomico: "47",
        masaatomica:"107,8683 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Cadmio",
        simbolo:"Cd",
        numatomico: "48",
        masaatomica:"112,411 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Indio",
        simbolo:"In",
        numatomico: "49",
        masaatomica:"114,818 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Estaño",
        simbolo:"Sn",
        numatomico: "50",
        masaatomica:"118,710 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Antimonio",
        simbolo:"Sb",
        numatomico: "51",
        masaatomica:"121,760 u",
        serie:"Metaloides"
    },
    {
        nombre: "Telurio",
        simbolo:"Te",
        numatomico: "52",
        masaatomica:"127,6 u",
        serie:"Metaloides"
    },
    {
        nombre: "Yodo",
        simbolo:"I",
        numatomico: "53",
        masaatomica:"126,90447 u",
        serie:"Halógenos"
    },
    {
        nombre: "Xenón",
        simbolo:"Xe",
        numatomico: "54",
        masaatomica:"131,293 u",
        serie:"Gases nobles"
    },
    {
        nombre: "Cesio",
        simbolo:"Cs",
        numatomico: "55",
        masaatomica:"132,90545 u",
        serie:"Metal alcalino"
    },
    {
        nombre: "Bario",
        simbolo:"Ba",
        numatomico: "56",
        masaatomica:"137,327 u",
        serie:"M alcalinotérreos"
    },
    {
        nombre: "Lantano",
        simbolo:"La",
        numatomico: "57",
        masaatomica:"138,9055 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Cerio",
        simbolo:"Ce",
        numatomico: "58",
        masaatomica:"140,116 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Praseodimio",
        simbolo:"Pr",
        numatomico: "59",
        masaatomica:"140,90765 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Neodimio",
        simbolo:"Nd",
        numatomico: "60",
        masaatomica:"144,24 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Prometio",
        simbolo:"Pm",
        numatomico: "61",
        masaatomica:"145 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Samario",
        simbolo:"Sm",
        numatomico: "62",
        masaatomica:"150,35 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Europio",
        simbolo:"Eu",
        numatomico: "63",
        masaatomica:"151,964 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Gadolinio",
        simbolo:"Gd",
        numatomico: "64",
        masaatomica:"157,25 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Terbio",
        simbolo:"Tb",
        numatomico: "65",
        masaatomica:"158,92534(2) u",
        serie:"Lantánidos"
    },
    {
        nombre: "Disprosio",
        simbolo:"Dy",
        numatomico: "66",
        masaatomica:"158,924(1) u",
        serie:"Lantánidos"
    },
    {
        nombre: "Holmio",
        simbolo:"Ho",
        numatomico: "67",
        masaatomica:"164,9304 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Erbio",
        simbolo:"Er",
        numatomico: "68",
        masaatomica:"167,259 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Tulio",
        simbolo:"Tm",
        numatomico: "69",
        masaatomica:"168,934 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Iterbio",
        simbolo:"Yb",
        numatomico: "70",
        masaatomica:"173,04 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Lutencio",
        simbolo:"Lu",
        numatomico: "71",
        masaatomica:"174,967 u",
        serie:"Lantánidos"
    },
    {
        nombre: "Hafnio",
        simbolo:"Hf",
        numatomico: "72",
        masaatomica:"178,49 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Tantalio",
        simbolo:"Ta",
        numatomico: "73",
        masaatomica:"180,9479 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Wolframio",
        simbolo:"W",
        numatomico: "74",
        masaatomica:"183,84 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Renio",
        simbolo:"Re",
        numatomico: "75",
        masaatomica:"186,207(1)​ u",
        serie:"Metal de transición"
    },
    {
        nombre: "Osmio",
        simbolo:"Os",
        numatomico: "76",
        masaatomica:"190,23 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Iridio",
        simbolo:"Ir",
        numatomico: "77",
        masaatomica:"192,217 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Platino",
        simbolo:"Pt",
        numatomico: "78",
        masaatomica:"195.084 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Oro",
        simbolo:"Au",
        numatomico: "79",
        masaatomica:"196,966569(4) u",
        serie:"Metal de transición"
    },
    {
        nombre: "Mercurio",
        simbolo:"Hg",
        numatomico: "80",
        masaatomica:"200,59 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Talio",
        simbolo:"Tl",
        numatomico: "81",
        masaatomica:"204,3833 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Plomo",
        simbolo:"Pb",
        numatomico: "82",
        masaatomica:"207,2 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Bismuto",
        simbolo:"Bi",
        numatomico: "83",
        masaatomica:"208,980386 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Polonio",
        simbolo:"Po",
        numatomico: "84",
        masaatomica:"209.9824 u",
        serie:"Metaloide"
    },
    {
        nombre: "Astato",
        simbolo:"At",
        numatomico: "85",
        masaatomica:"210 u",
        serie:"Halógenos"
    },
    {
        nombre: "Radón",
        simbolo:"Rn",
        numatomico: "86",
        masaatomica:"223 u",
        serie:"Gases nobles"
    },
    {
        nombre: "Francio",
        simbolo:"Fr",
        numatomico: "87",
        masaatomica:"223 u",
        serie:"Metal alcalino"
    },
    {
        nombre: "Radio",
        simbolo:"Ra",
        numatomico: "88",
        masaatomica:"226,0254",
        serie:"M - alcalinotérreos"
    },
    {
        nombre: "Actinio",
        simbolo:"Ac",
        numatomico: "89",
        masaatomica:"227 u",
        serie:"Actínidos"
    },
    {
        nombre: "Torio",
        simbolo:"Th",
        numatomico: "90",
        masaatomica:"232,0381 u",
        serie:"Actínidos"
    },
    {
        nombre: "Protactinio",
        simbolo:"Pa",
        numatomico: "91",
        masaatomica:"231.03588 u",
        serie:"Actínidos"
    },
    {
        nombre: "Uranio",
        simbolo:"U",
        numatomico: "92",
        masaatomica:"238,02891 u",
        serie:"Actínidos"
    },
    {
        nombre: "Neptunio",
        simbolo:"Np",
        numatomico: "93",
        masaatomica:"237 u",
        serie:"Actínidos"
    },
    {
        nombre: "Plutonio",
        simbolo:"Pu",
        numatomico: "94",
        masaatomica:"244 u",
        serie:"Actínidos"
    },
    {
        nombre: "Americio",
        simbolo:"Am",
        numatomico: "95",
        masaatomica:"243 u",
        serie:"Actínidos"
    },
    {
        nombre: "Curio",
        simbolo:"Cm",
        numatomico: "96",
        masaatomica:"247 u",
        serie:"Actínidos"
    },
    {
        nombre: "Berkelio",
        simbolo:"Bk",
        numatomico: "97",
        masaatomica:"247 u",
        serie:"Actínidos"
    },
    {
        nombre: "Californio",
        simbolo:"Cf",
        numatomico: "98",
        masaatomica:"[251] 1​ u",
        serie:"Actínidos"
    },
    {
        nombre: "Einstenio",
        simbolo:"Es",
        numatomico: "99",
        masaatomica:"252 u",
        serie:"Actínidos"
    },
    {
        nombre: "Fermio",
        simbolo:"Fm",
        numatomico: "100",
        masaatomica:"257 u",
        serie:"Actínidos"
    },
    {
        nombre: "Mendelevio",
        simbolo:"Md",
        numatomico: "101",
        masaatomica:"258.1 u",
        serie:"Actínidos"
    },
    {
        nombre: "Nobelio",
        simbolo:"No",
        numatomico: "102",
        masaatomica:"259 u",
        serie:"Actínidos"
    },
    {
        nombre: "Laurencio",
        simbolo:"Lr",
        numatomico: "103",
        masaatomica:"262 u",
        serie:"Actínidos"
    },
    {
        nombre: "Rutherfordio",
        simbolo:"Rf",
        numatomico: "104",
        masaatomica:"261 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Dubnio",
        simbolo:"Db",
        numatomico: "105",
        masaatomica:"262 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Seaborgio",
        simbolo:"Sg",
        numatomico: "106",
        masaatomica:"269 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Bohrio",
        simbolo:"Bh",
        numatomico: "107",
        masaatomica:"264 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Hasio",
        simbolo:"Hs",
        numatomico: "108",
        masaatomica:"269 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Meitnerio",
        simbolo:"Mt",
        numatomico: "109",
        masaatomica:"269 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Darmstatio",
        simbolo:"Ds",
        numatomico: "110",
        masaatomica:"281 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Roentgenio",
        simbolo:"Rg",
        numatomico: "111",
        masaatomica:"282 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Copernico",
        simbolo:"Cn",
        numatomico: "112",
        masaatomica:"285 u",
        serie:"Metal de transición"
    },
    {
        nombre: "Nihonio",
        simbolo:"Nh",
        numatomico: "113",
        masaatomica:"285 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Flerovio",
        simbolo:"Fl",
        numatomico: "114",
        masaatomica:"287 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Moscovio",
        simbolo:"Mc",
        numatomico: "115",
        masaatomica:"288 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Livermorio",
        simbolo:"Lv",
        numatomico: "116",
        masaatomica:"291 u",
        serie:"Metal bloque p"
    },
    {
        nombre: "Teneso",
        simbolo:"Ts",
        numatomico: "117",
        masaatomica:"294 u",
        serie:"	Halógenos"
    },
    {
        nombre: "Oganesón",
        simbolo:"Og",
        numatomico: "118",
        masaatomica:"294 u",
        serie:"Gases nobles"
    },
];
function mostrarInfo(valor){
    nombreElemento.textContent = elementos[valor].nombre;
    simboloElemento.textContent = elementos[valor].simbolo;
    numAtomicoElemento.textContent =`Número atómico: ${elementos[valor].numatomico}`;
    masaAtomicaElemento.textContent = `Masa atómica: ${elementos[valor].masaatomica}`;
    serieQuimicaElemento.textContent = `Serie química: ${elementos[valor].serie}`;
    caja.style.display="block";
}

function cerrar(){
    caja.style.display="none";
}