const container = document.querySelector('.container');
const unsplashURL = 'https://picsum.photos/500/300?random=1';
const rows = 100;

for(let i=0; i < rows*3; i++){
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img);
    03002436521
}
console.log(getRandomNr());
console.log(getRandomSize());
function getRandomSize(){
    return `${getRandomNr()}X${getRandomNr()}`
}
function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}