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
                if(carArr.length >= 2){
                    alert("Você só pode comparar 2 carros.");
                    el.checked = false;
                    return;
                }
                carArr.push(carClass);
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
    const car0 = carArr[0];
    const car1 = carArr[1];

    function setCompare(campo, valor0, valor1) {
        document.getElementById(`compare_${campo}_0`).innerHTML = valor0;
        document.getElementById(`compare_${campo}_1`).innerHTML = valor1;
    }

    setCompare('modelo', car0.nome, car1.nome);
    setCompare('preco', `R$ ${car0.preco.toLocaleString('pt-br')}`, `R$ ${car1.preco.toLocaleString('pt-br')}`);
    setCompare('alturacacamba', car0.alturaCacamba + 'mm', car1.alturaCacamba + 'mm');
    setCompare('alturaveiculo', car0.alturaVeiculo + 'mm', car1.alturaVeiculo + 'mm');
    setCompare('alturasolo', car0.alturaSolo + 'mm', car1.alturaSolo + 'mm');
    setCompare('capacidadecarga', car0.capacidadeCarga + 'Kg', car1.capacidadeCarga + 'Kg');
    setCompare('motor', car0.motor + 'L', car1.motor + 'L');
    setCompare('potencia', car0.potencia + 'cv', car1.potencia + 'cv');
    setCompare('volumecacamba', car0.volumeCacamba + 'L', car1.volumeCacamba + 'L');
    setCompare('roda', car0.roda, car1.roda);
    setCompare('image', `<img src="${car0.image}" width="200">`, `<img src="${car1.image}" width="200">`);
    
}
