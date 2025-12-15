console.log('group3-a-b');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




const a_btnColor = document.querySelector('#a_btnColor');

a_btnColor.addEventListener('click', () => {
    const r = rand(0, 255);
    const g = rand(0, 255);
    const b = rand(0, 255);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    a_btnColor.style.backgroundColor = randomColor;
});



const b_btnForm = document.querySelector('#b_btnForm');

b_btnForm.addEventListener('click', () => {
    if (b_btnForm.style.borderRadius === '50%') {
        b_btnForm.style.borderRadius = '0%'
    } else {
        b_btnForm.style.borderRadius = '50%';
    }


});



