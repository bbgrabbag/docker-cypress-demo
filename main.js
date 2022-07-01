const btn = document.getElementById('increment-btn');
const displayCount = document.getElementById('display-count');

let count = 0;
displayCount.innerText = count;

btn.addEventListener('click', () => {
    count++;
    displayCount.innerText = count;
})