const displacement = (774, 345);

const CalcX = (baseX) => {
    return (-1*baseX + displacement[0]);
}
const CalcY = (baseY) => {
    return (-1*baseY + displacement[1]);
}

let elem = document.getElementById('world')


const Move = (country) => {
    elem.style.left = CalcX(country.X);
    elem.style.top = CalcY(country.Y);
}

setTimeout(Move({x:'', y:''}), 3000);
