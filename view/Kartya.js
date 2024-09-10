export default class Kartya{
    // adattagok
    #obj={}
    #szuloElem;
    // konstruktor
    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        this.kutyakiir();
        // gombelem a kártya saját adattagja lesz
        this.gombElem=$(".kivalaszt:last")
        //console.log(this.gombElem)
        this.esemenykezelo()
    }
    // tagfüggvények
    kutyakiir(){
        // egyetlen kutya kiírása
        this.#szuloElem.append(
            `
            <div class="card col-lg-4 col-md-6" style="width:400px">
                <div class="card-body">
                    <h3>${this.#obj.nev}</h3>
                    <p>Kor:${this.#obj.kor}</p>
                    <p>Nem:${this.#obj.nem}</p>
                    <button class="btn btn-success kivalaszt">Kiválaszt</button>
                </div>
            </div>
            `
        )
    }

    // gombesemények kezelése
    esemenykezelo(){
        this.gombElem.on("click",()=>{
            console.log(this)
            // létrehozunk egy saját eseményt
            const e=new CustomEvent("kivalaszt", {detail:this.#obj})
            window.dispatchEvent(e)
        })
    }

}

// névtelen föggvény esetén, ha function névtelen függvényt használunk, akkor a this azt a html dom elemet jelenti, amelyik az eseményt épp kiváltotta, vagy amire hivatkozunk

// nyílfüggvény esetén a this arra az osztálypéldányra mutat, amelyik az adott nyílfüggvényt körbefogja