//  Iš div elementų sukurti tris skirtingų spalvų kvadratus.
//  Kvadratai turi būti sudėti vienas į kitą (<div><div><div></div></div></div>)
// Paspaudus ant konkretaus kvadrato, šalia esančiam dar viename bendrame div elemente turi atsirasti to kvadrato spalva (viso turi būti trys spalvos, nekintančios)

const intoElement1 = document.querySelector('.i_TrysKvadratai div');
intoElement1.style.width = 300 + 'px';
intoElement1.style.height = 300 + 'px';
intoElement1.style.backgroundColor = 'red';

const intoElement2 = document.querySelector('.i_TrysKvadratai div>div');
intoElement2.style.width = 200 + 'px';
intoElement2.style.height = 200 + 'px';
intoElement2.style.backgroundColor = 'blue';

const intoElement3 = document.querySelector('.i_TrysKvadratai div>div>div');
intoElement3.style.width = 100 + 'px';
intoElement3.style.height = 100 + 'px';
intoElement3.style.backgroundColor = 'orange';

const iSpalva = document.querySelector('.i_Spalva');
iSpalva.style.width = 100 + 'px';
iSpalva.style.height = 100 + 'px';
iSpalva.style.backgroundColor = 'gray';

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
