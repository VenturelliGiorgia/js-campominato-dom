const btnGenera = document.getElementById("btn-genera");
const gridContainer = document.querySelector(".grid-container");
let bombs;


btnGenera.addEventListener("click", function () {
    griglia();
    bombs = generaBombe();

    console.log(bombs);

});

function griglia() {

    for (let i = 1; i <= 100; i++) {
        console.log(i);
        const cella = document.createElement("div");
        cella.classList.add("cella");
        cella.classList.add("text-center");
        cella.style.width = "calc(100%/10)";
        cella.innerHTML = i;
        cella.dataset.numCella = i;
        gridContainer.append(cella); //aggiungo l'elemento all'html
        cella.addEventListener("click", function () {
            // this.classList.add("bg-tiffany");
            const cella = +this.dataset.numCella;

            if (bombs.includes(cella)) { //se il numero presente nell'array bombe è uguale al numero assegnato alla cella, hai trovato una bomba
                let bombeEsplose = alert("Hai perso, hai trovato una bomba...");
                console.log(bombeEsplose);
                this.classList.add("bg-danger");
            } else { //se no colora di azzurro le altre celle
                this.classList.add("bg-tiffany");
            }
        });

    }

}


function numeriRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function generaBombe() {
    //creiamo un array che conterrà le 16 bombe
    const bombe = [];

    while (bombe.length < 16) {
        const num = numeriRandom();

        if (!bombe.includes(num)) {
            bombe.push(num);
        }

    }
    console.log(bombe);
    return bombe;
}
