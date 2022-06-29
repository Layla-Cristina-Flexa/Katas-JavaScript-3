const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 882, 848, 179, 535, 940, 472];

function kata1(){
    let meuRetorno = []
    for (let i = 1; i <= 25 ; i++){
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(kata1());

function kata2(){
    let meuRetorno = []
    for (let i = 25 - 0; i >= 1 ; i--){
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(kata2());

function kata3(){
    let meuRetorno = []
    for (let i = -1; i >-26 ; i--){
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(kata3());

function kata4(){
    let meuRetorno = []
    for (let i = -25; i <0 ; i++){
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(kata4());

function kata5(){
    let meuRetorno = []
    for (let i = 25 - 0; i >= -26 ; i-=2){
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(kata5());

function kata6(){
    let meuRetorno = []
    for (let i = 1; i < 100; i++){
        if (i % 3 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno
}
console.log(kata6());

function kata7(){
    let meuRetorno = []
    for (let i = 1; i < 100; i++){
        if (i % 7 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno
}
console.log(kata7());

function kata8(){
    let meuRetorno = []
    for (let i = 99; i > 0; i--){
        if (i % 7 == 0 || i % 3 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno
}
console.log(kata8());  

function kata9(){
    let meuRetorno = []
    for (let i = 1; i < 100; i = i += 2){
        if (i % 5 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno
}
console.log(kata9());

function kata10(){
    let meuRetorno
    for (let i = 0; i < sampleArray.length; i++){
    }
    return meuRetorno = sampleArray
}
console.log(kata10());

function kata11(){
    let meuRetorno = []
    for (let i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 2 === 0){
            meuRetorno.push(sampleArray[i])
        }
    }
    return meuRetorno
}
console.log(kata11()); 

function kata12(){
    let meuRetorno = []
    for (let i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 2 === 1){
            meuRetorno.push(sampleArray[i])
        }
    }
    return meuRetorno
}
console.log(kata12());

function kata13(){
    let meuRetorno = []
    for (let i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 8 === 0){
            meuRetorno.push(sampleArray[i])
        }
    }
    return meuRetorno
}
console.log(kata13());


function kata14(num){

    let meuRetorno = []
    for (let i = 0; i < num.length; i++){
        meuRetorno.push(num[i] * num[i]);
    }
    return meuRetorno
}
console.log(kata14(sampleArray));



function kata15(total){
    let meuRetorno = 0
    for(let i = 1 ; i <= total; i++){
        meuRetorno += i
    }
    return meuRetorno
}
console.log(kata15(20));

function kata16(Array){
    let meuRetorno = 0
    for (let i = 1; i < Array.length; i++){
            meuRetorno += Array[i]
        }
        return meuRetorno;
    }
    
console.log(kata16(sampleArray));

function kata17(){
    let meuRetorno
    let menor = sampleArray [0];
    for (let i = 1; i < sampleArray.length; i++){
        if (sampleArray[i] < menor){
            menor = sampleArray[i];
        }
    }
    return meuRetorno = menor
}
console.log(kata17(sampleArray)); 

function kata18(){
    let meuRetorno
    let maior = sampleArray [0];
    for (let i = 1; i < sampleArray.length; i++){
        if (sampleArray[i] > maior){
            maior = sampleArray[i];
        }
    }
    return meuRetorno = maior
}
console.log(kata18(sampleArray));
