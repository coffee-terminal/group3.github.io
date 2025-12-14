
// e uzduotis
const input1 = document.querySelector('.e_input1');
const input2 = document.querySelector('.e_input2');
const rezultatas = document.querySelector('.e_suma');

const skaiciuoti = () => {
    const a = Number(input1.value);
    const b = Number(input2.value);
    if (isNaN(a) || isNaN(b)) {
        rezultatas.innerText = 'Įveskite skaičių';
    } else {
        rezultatas.innerText = 'Atsakymas: ' + (a + b);
    }
};

input1.addEventListener('input', skaiciuoti);
input2.addEventListener('input', skaiciuoti);



// f uzduotis

  const input = document.querySelector('.f_input');
  const skaicius = document.querySelector('.f_skaicius');

  input.min = 10;
  input.max = 99;
  input.step = 1;

  const fValue = () => {
      skaicius.innerText = input.value;
  };
  input.addEventListener('input', fValue);

  fValue();




