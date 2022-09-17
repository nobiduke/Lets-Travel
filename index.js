const displacement = [774, 345];

const CalcX = (baseX) => {
    baseX = parseInt(baseX);
    return (-1*baseX + displacement[0]);
}
const CalcY = (baseY) => {
    baseY = parseInt(baseY);
    return (-1*baseY + displacement[1]);
}

let elem = document.getElementById('world')

function Move(country){
    elem.style.left = `${CalcX(country.x)}px`;
    elem.style.top = `${CalcY(country.y)}px`;
    console.log(elem.style.left);
}

function Pick(){

}

function Display(country){
    
}

document.getElementById('fly-button').addEventListener('click', (e)=>{
    Move({'x':"2055",
    "y": "1268"});
});
