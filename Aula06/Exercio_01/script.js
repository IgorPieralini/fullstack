let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.strokeRect(20,20,50,50);
ctx.fillRect(20,20,50,50);

ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.strokeRect(330,20,50,50);
ctx.fillRect(330,20,50,50);

ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.strokeRect(20,330,50,50);
ctx.fillRect(20,330,50,50);
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'green';
ctx.strokeRect(330,330,50,50);
ctx.fillRect(330,330,50,50);

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'gray';
ctx.moveTo(20,20);
ctx.lineTo(20,20);
ctx.lineTo(20,380);
ctx.lineTo(380,380)
ctx.lineTo(380,20)
ctx.lineTo(20,20)
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(379,21)
ctx.lineTo(379,21)
ctx.lineTo(21,379)
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(21,21)
ctx.lineTo(21,21)
ctx.lineTo(379,379)
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(20,200)
ctx.lineTo(20,200)
ctx.lineTo(380,200)
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = 'aqua';
ctx.arc(200,200,50,2 * Math.PI, 1* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black'
ctx.font = "20px Arial";
ctx.strokeText("Desenvolvimento Web",100,100);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(75,150,15,4 * Math.PI, 2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(325,150,15,4 * Math.PI, 2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.closePath();
