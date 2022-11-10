const btnGenera = document.getElementById("btn-genera");
const gridContainer = document.querySelector(".grid-container");
let bombe;
let cont = 0;
let contBombe = 0;

btnGenera.addEventListener("click", function () {
    griglia();
    bombe = generaBombe();

    console.log(bombe);

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

            if (bombe.includes(cella)) { //se il numero presente nell'array bombe è uguale al numero assegnato alla cella, hai trovato una bomba
                alert("Hai perso, hai trovato una bomba...");
                this.classList.add("bg-danger");
                contBombe++;
                if (contBombe === 1) {

                }
            } else { //se no colora di azzurro le altre celle
                this.classList.add("bg-tiffany");
                cont++;
                console.log("stampa " + cont);
                if (cont === 84) {
                    alert("Hai vinto, hai cliccato ben " + cont + " volte!!");
                }
            }
        });

    }

}


function numeriRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function generaBombe() {
    //creiamo un array che conterrà le 16 bombe
    const listaBombe = [];

    while (listaBombe.length < 16) {
        const num = numeriRandom();

        if (!listaBombe.includes(num)) {
            listaBombe.push(num);
        }

    }
    console.log(listaBombe);
    return listaBombe;
}
