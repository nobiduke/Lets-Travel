
// const displacement = [760, 340];

let elem = document.getElementById('world');
let infoBox = document.getElementById('info-box');
let nameCountryElem = document.getElementById('name');
let facts = document.getElementById('facts');
let image = document.getElementById('flag');
let airplane = document.getElementById('airplane');
var isMoving = false;

const toggleMoving = ()=>isMoving = isMoving?false:true;

const CalcX = (baseX, displacement) => {
    baseX = parseInt(baseX);
    return (-1*baseX + displacement[0]);
}
const CalcY = (baseY, displacement) => {
    baseY = parseInt(baseY);
    return (-1*baseY + displacement[1]);
}

function Move(country, coords){
    const displacement = [window.innerWidth/2, window.innerHeight/2];

    infoBox.classList.add('hidden-box');
    infoBox.classList.remove('info-box');

    airplane.classList.add('airplane-flying');
    airplane.classList.remove('airplane');

    toggleMoving();
    elem.style.left = `${CalcX(coords.x, displacement)}px`;
    elem.style.top = `${CalcY(coords.y, displacement)}px`;
    setTimeout(function(){Display(country);toggleMoving();}, 3000);
}

function Pick(){
    const keys = Object.keys(COUNTRIES);
      
    return keys[Math.floor(Math.random() * keys.length)];
}

function Display(country){
    nameCountryElem.innerHTML = country.name;

    split_image = country.flag.split('/')
    image.src = `https://flagcdn.com/${country.code.toLowerCase()}.svg`;

    facts.innerHTML = "";

    facts.innerHTML += `Capital: ${country['capital']}<br>`;
    facts.innerHTML += `Currency: ${country['currency']['name']}<br>`;
    facts.innerHTML += `Language: ${country['language']['name']}<br>`;

    infoBox.classList.add('info-box');
    infoBox.classList.remove('hidden-box');
    airplane.classList.add('airplane');
    airplane.classList.remove('airplane-flying');
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
