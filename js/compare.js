//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            if(GetCarArrPosition(carArr, carClass) === -1){
                if(carArr.length >= 2){
                    alert("Você só pode comparar 2 carros.");
                    el.checked = false;
                    return;
                }
                carArr.push(carClass);
            }
        } else {
            const pos = GetCarArrPosition(carArr, carClass);
            if(pos !== -1){
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}


function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    const car1 = carArr[0];
    const car2 = carArr[1];

    document.getElementById('car1Name').innerText = car1.nome;
    document.getElementById('car2Name').innerText = car2.nome;

    document.getElementById('car1Preco').innerText = "R$ " + car1.preco.toLocalString();
    document.getElementById('car2Preco').innerText = "R$ " + car2.preco.toLocalString();

    document.getElementById('car1AltCacamba').innerText = car1.alturaCacamba + " mm";
    document.getElementById('car2AltCacamba').innerText = car2.alturaCacamba + " mm";

    document.getElementById('car1AltVeiculo').innerText = car1.alturaVeiculo + " mm";
    document.getElementById('car2AltVeiculo').innerText = car2.alturaVeiculo + " mm";

    document.getElementById('car1AltSolo').innerText = car1.alturaSolo + " mm";
    document.getElementById('car2AltSolo').innerText = car2.alturaSolo + " mm";

    document.getElementById('car1CapCarga').innerText = car1.capacidadeCarga + " kg";
    document.getElementById('car2CapCarga').innerText = car2.capacidadeCarga + " kg";

    document.getElementById('car1Motor').innerText = car1.motor + " L";
    document.getElementById('car2Motor').innerText = car2.motor + " L";

    document.getElementById('car1Potencia').innerText = car1.potencia + " cv";
    document.getElementById('car2Potencia').innerText = car2.potencia + " cv";

    document.getElementById('car1VolCacamba').innerText = car1.volumeCacamba + " L";
    document.getElementById('car2VolCacamba').innerText = car2.volumeCacamba + " L";

    document.getElementById('car1Roda').innerText = car1.roda;
    document.getElementById('car2Roda').innerText = car2.roda;

    document.getElementById('car1Image').src = car1.image;
    document.getElementById('car2Image').src = car2.image;

}
