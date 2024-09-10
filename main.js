import { KUTYALISTA } from "./adatok.js";
import Kartyak from "./view/Kartyak.js";


const taroloELEM =$(".tartalom");

new Kartyak(KUTYALISTA,taroloELEM)

const kivalasztottKutyaLista=[]

const kivElem=$(".kivalasztott")

// tegyük bele a kiválasztott kutya adatait a kivalasztottKutyaLista-ba

// itt feliratkozunk a Kartya sztályban létrehozott saját eseményünkre
$(window).on("kivalaszt",(event)=>{
    console.log(event.detail);
    kivalasztottKutyaLista.push(event.detail);
    console.log(kivalasztottKutyaLista)
})