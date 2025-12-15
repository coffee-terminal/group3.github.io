console.log('testuoju');

// let theText = myTextInput.value;

// let sukeistasMygtukas2 = document.querySelector('.cMygtukas2');
// sukeistasMygtukas2.addEventListener('click', _ => {
//     sukeistasMygtukas2.innerText = 'X'
// });

// let sukeistasMygtukas1 = document.querySelector('.cMygtukas1');
// sukeistasMygtukas1.addEventListener('click', _ => {
//     sukeistasMygtukas1.innerText = 'O'
// });

// KITAM KARTUI: buvo gera ideja daryti IF daryti kad ir po antro pasispaudimo apsikeistu tekstas
//bet reikia if padaryti evento viduje ne apacioje

// let sukeistasMygtukas2 = document.querySelector('.cMygtukas2');
// sukeistasMygtukas2.addEventListener('click', _ => {
//     sukeistasMygtukas2.innerText = 'X'
// });

// let sukeistasMygtukas1 = document.querySelector('.cMygtukas1');
// sukeistasMygtukas1.addEventListener('click', _ => {
//     if (sukeistasMygtukas1.innerText === 'X') {
//         sukeistasMygtukas1.innerText = 'O'
//     } else { sukeistasMygtukas1.innerText = 'X' }

// });

// let sukeistasMygtukas2 = document.querySelector('.cMygtukas2');
// sukeistasMygtukas2.addEventListener('click', _ => {
//     if (sukeistasMygtukas2.innerText === 'O') { sukeistasMygtukas2.innerText = 'X' }
//     else { sukeistasMygtukas2.innerText = 'O' }

// });

let sukeistasMygtukas1 = document.querySelector('.cMygtukas1');
let sukeistasMygtukas2 = document.querySelector('.cMygtukas2');

function swapButtonText() {
    let ctext1 = sukeistasMygtukas1.innerText;
    let ctext2 = sukeistasMygtukas2.innerText;
    sukeistasMygtukas1.innerText = ctext2;
    sukeistasMygtukas2.innerText = ctext1;
}

sukeistasMygtukas1.addEventListener('click', swapButtonText);
sukeistasMygtukas2.addEventListener('click', swapButtonText);

//dInputas dDivas

let sukeistasInput = document.querySelector('.dInputas');
let sukeistasDivas = document.querySelector('#values');
//.getElementById("values");

function repeatInputText(e) {
    sukeistasDivas.textContent = e.target.value;
}

sukeistasInput.addEventListener('input', repeatInputText);

// function repeatInputText() {
//     let dInputText = sukeistasInput.value;
//     let dDivText = sukeistasDivas.value;
//     sukeistasDivas.value = dInputText;
// }

// sukeistasInput.addEventListener('input', updateValue);
// function updateValue(e) {
//     sukeistasDivas.textContent = e.target.value;
// }

// updateValue();






