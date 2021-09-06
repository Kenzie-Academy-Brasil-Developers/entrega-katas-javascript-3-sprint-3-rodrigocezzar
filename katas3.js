const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const elements = document.querySelector('ol');
const botton_add_katas = document.querySelector('button')

function showResults(katas_valores) {
    const lista = document.createElement('li');
    lista.innerText = katas_valores;
    elements.appendChild(lista);
}

function kata1() {
    let kt01 = [];
    for(let i = 1; i <= 25; i++) {
      kt01.push(i);
    }
    showResults(kt01);
}
botton_add_katas.addEventListener('click', kata1);

function kata2() {
    let kt02 = [];
    for(let i = 25; i >= 1; i-=1) {
      kt02.push(i);
    }  
    showResults(kt02);
}
botton_add_katas.addEventListener('click', kata2);

function kata3() {
    let kt03 = [];
    for(let i = -1; i >= -25; i-=1) {
      kt03.push(i);
    }  
    showResults(kt03);
}
botton_add_katas.addEventListener('click', kata3);

function kata4() {
    let kt04 = [];
    for(let i = -25; i <= -1; i++) {
      kt04.push(i);
    }  
    showResults(kt04);
}
botton_add_katas.addEventListener('click', kata4);

function kata5() {
    let kt05 = [];
    for(let i = 25; i >= -25; i-=2) {
        kt05.push(i);
    }  
    showResults(kt05);
}
botton_add_katas.addEventListener('click', kata5);

function kata6() {
    let kt06 = [];
    for(let i = 3; i <= 100; i+=3) {
        kt06.push(i);
    }  
    showResults(kt06);
}
botton_add_katas.addEventListener('click', kata6);

function kata7() {
    let kt07 = [];
    for(let i = 7; i <= 100; i+=7) {
        kt07.push(i);
    }  
    showResults(kt07);
}
botton_add_katas.addEventListener('click', kata7);

function kata8() {
    let kt08 = [];
    for(i=100; i>=1; i--) {
      if((i%3 == 0) | (i%7 == 0))
      kt08.push(i);
    }
    showResults(kt08);
}
botton_add_katas.addEventListener('click', kata8);

function kata9() {
    let kt09 = [];
    for(i=1; i <= 100; i++) {
      if((i%2 !== 0) && (i%5 == 0))
      kt09.push(i);
    }
    showResults(kt09);
}
botton_add_katas.addEventListener('click', kata9);

function kata10() {
    showResults(sampleArray);
}
botton_add_katas.addEventListener('click', kata10);

function kata11() {
    let kt11 = [];
    for(let i = 0; i <= sampleArray.length; i++) {
        if(sampleArray[i]%2 == 0) {
            kt11.push(sampleArray[i]);
        }
    } 
    showResults(kt11);
}
botton_add_katas.addEventListener('click', kata11);

function kata12() {
    let kt12 = [];
    for(let i = 0; i <= sampleArray.length; i++) {
        if(sampleArray[i]%2 !== 0) {
            kt12.push(sampleArray[i]);
        }
    } 
    showResults(kt12);
}
botton_add_katas.addEventListener('click', kata12);

function kata13() {
    let kt13 = [];
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i]%8 == 0) {
            kt13.push(sampleArray[i]);
        }
    } 
    showResults(kt13);
}
botton_add_katas.addEventListener('click', kata13);

function kata14() {
    let kt14 = [];
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i]) {
            kt14.push(sampleArray[i]**2);
        }
    } 
    showResults(kt14);
}
botton_add_katas.addEventListener('click', kata14);

function kata15() {
    let kt15 = 0;
    for(let i = 1; i <= 20; i++) {
        kt15 += i
    }
    showResults(kt15);
}
botton_add_katas.addEventListener('click', kata15);

function kata16() {
    let kt16 = 0;
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] >= 0) {
            kt16 += sampleArray[i]
        }
    } 
    showResults(kt16);
}
botton_add_katas.addEventListener('click', kata16);

function kata17() {
    let kt17 = 0;
    for(let i = 0; i<sampleArray.length; i++) {
        if(sampleArray[i] > kt17){
            kt17 = sampleArray[i];
        } 
    }
    showResults(kt17);
}
botton_add_katas.addEventListener('click', kata17);

function kata18() {
    let kt18 = 1000;
    for(let i = 0; i<sampleArray.length; i++) {
        if(sampleArray[i] < kt18){
            kt18 = sampleArray[i];
        } 
    }
    showResults(kt18);
}
botton_add_katas.addEventListener('click', kata18);

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
