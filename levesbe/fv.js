export function kutyakiir(kutya){
    // egyetlen kutya kiírása
    const taroloELEM=$(".tartalom")
    taroloELEM.append(
        `
        <div class="card col-lg-4 col-md-6" style="width:400px">
            <div class="card-body">
                <h3>${kutya.nev}</h3>
                <p>Kor:${kutya.kor}</p>
                <p>Nem:${kutya.nem}</p>
                <button class="btn btn-success">Kiválaszt</button>
            </div>
        </div>
        `
    )
}