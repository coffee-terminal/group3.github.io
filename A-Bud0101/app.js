console.log('group3-a-b');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




const btnColor = document.querySelector('#btnColor');

btnColor.addEventListener('click', () => {
    const r = rand(0, 255);
    const g = rand(0, 255);
    const b = rand(0, 255);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    btnColor.style.backgroundColor = randomColor;
});



const btnForm = document.querySelector('#btnForm');

btnForm.addEventListener('click', () => {
    if (btnForm.style.borderRadius === '50%') {
        btnForm.style.borderRadius = '0%'
    } else {
        btnForm.style.borderRadius = '50%';
    }


});



