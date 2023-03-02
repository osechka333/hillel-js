const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(10, 20);
ctx.lineTo(50, 50);
ctx.closePath();
ctx.stroke();

