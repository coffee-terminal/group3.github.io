
// e uzduotis
const e_input1 = document.querySelector('.e_input1');
const e_input2 = document.querySelector('.e_input2');
const e_rezultatas = document.querySelector('.e_suma');

const skaiciuoti = () => {
    const a = Number(e_input1.value);
    const b = Number(e_input2.value);
    if (isNaN(a) || isNaN(b)) {
        e_rezultatas.innerText = 'Įveskite skaičių';
    } else {
        e_rezultatas.innerText = 'Atsakymas: ' + (a + b);
    }
};

e_input1.addEventListener('input', skaiciuoti);
e_input2.addEventListener('input', skaiciuoti);



// f uzduotis

  const f_input = document.querySelector('.f_input');
  const f_skaicius = document.querySelector('.f_skaicius');

  f_input.min = 10;
  f_input.max = 99;
  f_input.step = 1;

  const fValue = () => {
      f_skaicius.innerText = f_input.value;
  };
  f_input.addEventListener('input', fValue);

  fValue();




