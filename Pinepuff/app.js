console.log('testuoju');

let sukeistasMygtukas1 = document.querySelector('.c_Mygtukas1');
let sukeistasMygtukas2 = document.querySelector('.c_Mygtukas2');

function swapButtonText() {
    let c_text1 = sukeistasMygtukas1.innerText;
    let c_text2 = sukeistasMygtukas2.innerText;
    sukeistasMygtukas1.innerText = c_text2;
    sukeistasMygtukas2.innerText = c_text1;
}

sukeistasMygtukas1.addEventListener('click', swapButtonText);
sukeistasMygtukas2.addEventListener('click', swapButtonText);

//dInputas dDivas

let sukeistasInput = document.querySelector('.d_Inputas');
let sukeistasDivas = document.querySelector('#d_values');
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






