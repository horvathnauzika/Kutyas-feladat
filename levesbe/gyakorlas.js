import { KUTYALISTA } from "../adatok.js"
// import {kutyakiir} from "./fv.js"
import Kartya from "../view/Kartya.js"
// kutyák adatai megjelenjenek a taralom divben külön divekben, egymás mellett az egyes kutyák adatai

// hozzunk létre változókat
const cim= "Minden, amit a kutyáról tudni kell"
let nev="Jenő"
nev="Béla"
console.log("Név: ", nev)
// Címet írjuk ki a headerve a meglévő név alá
// Megfogjuk az adott html elemet
const cimElem=$("header")
console.log(cimElem)
// Hozzáfűzünk, beleírunk stb..
cimElem.append(`<p>${cim}</p>`)

/*const kutya1={
    nev:"Kolbász",
    kor:12,
    nem:"Nőstény"
}
kutya1.nev="Morzsa"
console.log(kutya1)*/



console.log(KUTYALISTA [0].nev)
// kutyakiir(KUTYALISTA[0])
const taroloELEM =$(".tartalom");

KUTYALISTA.forEach((elem)=>{
    new Kartya(elem, taroloELEM);
})
