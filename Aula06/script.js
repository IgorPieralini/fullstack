let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'aqua';
ctx.strokeRect(20,10,50,50);
ctx.fillRect(20,10,50,50);

ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'aqua';
ctx.strokeRect(20,80,50,50);
ctx.fillRect(20,80,50,50);

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(100,20);
ctx.lineTo(100,20);
ctx.lineTo(150,40);
ctx.lineTo(200,60)
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.arc(200,200,50,1.5 * Math.PI, 2.5* Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.fillStyle = 'black';
ctx.font = "90px Arial"
ctx.strokeText("Corinthians",200,200)
ctx.fillText("Corinthians",200,200);
ctx.
ctx.closePath();

ctx.closePath();
