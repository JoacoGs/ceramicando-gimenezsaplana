import cuencoblanco from "./images/cuenco.jpg";
import cuencogris from "./images/cuencogris.jpg";
import bowlgris from "./images/bowls.jpg";
import bowlazul from "./images/bowlazul.jpg";
import tazablanca from "./images/taza.jpg";
import mategris from "./images/mate.jpg";

const items = [
    {
        id: 1,
        nombre: "Cuenco blanco",
        imagen: cuencoblanco,
        precio: 1500,
        categoria: 'cuencos',
        stock: 10
    },

    {
        id: 2,
        nombre: "Cuenco gris",
        imagen: cuencogris,
        precio: 2000,
        categoria: 'cuencos',
        stock: 10
    },

    {
        id: 3,
        nombre: "Bowl gris",
        imagen: bowlgris,
        precio: 1300,
        categoria: 'bowls',
        stock: 10
    },

    {
        id: 4,
        nombre: "Bowl azul",
        imagen: bowlazul,
        precio: 1300,
        categoria: 'bowls',
        stock: 10
    },

    {
        id: 5,
        nombre: "Taza blanca",
        imagen: tazablanca,
        precio: 700,
        categoria: 'tazas',
        stock: 10
    },

    {
        id: 6,
        nombre: "Mate gris",
        imagen: mategris,
        precio: 800,
        categoria: 'mates',
        stock: 10
    }  
];

export default items;