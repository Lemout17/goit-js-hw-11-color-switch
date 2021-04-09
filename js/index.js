const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.body,
}
refs.stop.disabled = true;
let interval = null;

function startColorSwitch() {
    interval = setInterval(() => {
        refs.start.disabled = true;
        refs.stop.disabled = false;
        refs.start.classList.add('disabled');
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    },1000)
}

function stopColorSwitch() {
    refs.start.disabled = false;
    refs.start.classList.remove('disabled');
    
    clearInterval(interval);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', startColorSwitch);
refs.stop.addEventListener('click', stopColorSwitch);

