//  Iš div elementų sukurti tris skirtingų spalvų kvadratus.
//  Kvadratai turi būti sudėti vienas į kitą (<div><div><div></div></div></div>)
// Paspaudus ant konkretaus kvadrato, šalia esančiam dar viename bendrame div elemente turi atsirasti to kvadrato spalva (viso turi būti trys spalvos, nekintančios)

const intoElement1 = document.querySelector('.i_TrysKvadratai div');
intoElement1.style.width = 100 + '%';

intoElement1.style.backgroundColor = '#F7FFF7';

const intoElement2 = document.querySelector('.i_TrysKvadratai div>div');
intoElement2.style.width = 65 + '%';

intoElement2.style.backgroundColor = '#1A535C';

const intoElement3 = document.querySelector('.i_TrysKvadratai div>div>div');
intoElement3.style.width = 50 + '%';

intoElement3.style.backgroundColor = '#F5A65B';

const iSpalva = document.querySelector('.i_Spalva');
// iSpalva.style.width = 100 + 'px';
iSpalva.style.backgroundColor = '#555555';

intoElement1.addEventListener('click', (e) => {
    e.stopPropagation();
    iSpalva.style.backgroundColor = intoElement1.style.backgroundColor;
});
intoElement2.addEventListener('click', (e) => {
    e.stopPropagation();
    iSpalva.style.backgroundColor = intoElement2.style.backgroundColor;
});

intoElement3.addEventListener('click', (e) => {
    e.stopPropagation();
    iSpalva.style.backgroundColor = intoElement3.style.backgroundColor;
});

// Sukurti color tipo input laukelį ir div elementą. Parinkus input laukelyje spalvą, tos spalvos vardas turi atsirasti div elemente. Spalvų vardus imti iš API https://www.thecolorapi.com/ Dokumentacija nuorodoje.

const colorPicker = document.querySelector('#j_Picker');
colorPicker.addEventListener('input', updateFirst);
colorPicker.addEventListener('change', update);
function updateFirst(event) {
    const divColor = document.querySelector('.j_colorDiv');
    if (divColor) {
        divColor.style.backgroundColor = event.target.value;
    }
}
function update(event) {
    const divColor = document.querySelector('.j_colorDiv');
    divColor.style.backgroundColor = event.target.value;
    metaColor = event.target.value.slice(1);
    console.log(metaColor);

    const provideColor = (meta) => {
        divColor.innerHTML = meta.name.value;
    };

    fetch('https://www.thecolorapi.com/id?hex=' + metaColor)
        .then((res) => res.json())
        .then((meta) => {
            console.log(meta);
            provideColor(meta);
        });
}
