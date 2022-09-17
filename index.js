
const displacement = [760, 340];

let elem = document.getElementById('world');
let infoBox = document.getElementById('info-box');
let nameCountryElem = document.getElementById('name');
let facts = document.getElementById('facts');
let image = document.getElementById('flag');
var isMoving = false;

const toggleMoving = ()=>isMoving = isMoving?false:true;

const CalcX = (baseX) => {
    baseX = parseInt(baseX);
    return (-1*baseX + displacement[0]);
}
const CalcY = (baseY) => {
    baseY = parseInt(baseY);
    return (-1*baseY + displacement[1]);
}

function Move(country, coords){
    infoBox.classList.add('hidden-box');
    infoBox.classList.remove('info-box');

    toggleMoving();
    elem.style.left = `${CalcX(coords.x)}px`;
    elem.style.top = `${CalcY(coords.y)}px`;
    setTimeout(toggleMoving, 3000);
    Display(country);
}

function Pick(){
    const keys = Object.keys(COUNTRIES);
      
    return keys[Math.floor(Math.random() * keys.length)];
}

function Display(country){
    nameCountryElem.innerHTML = country.name;

    facts.innerHTML = "";

    facts.innerHTML += `Capital: ${country['capital']}<br>`;
    facts.innerHTML += `Currency: ${country['currency']['name']}<br>`;
    facts.innerHTML += `Language: ${country['language']['name']}<br>`;

    infoBox.classList.add('info-box');
    infoBox.classList.remove('hidden-box');
}

document.getElementById('fly-button').addEventListener('click', (e)=>{
    if(isMoving){
        return;
    }
    let countryName = Pick();

    let count = COUNTRIES[countryName];
    let coords = LOCATIONS[countryName];

    Move(count, coords);
});
