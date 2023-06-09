const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const balls = [];
const colors = ["#64d0AA","#13B3BF","#FF0000","#8C00FF","#84FF00"]


class Ball {
    constructor(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
    }
  
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  
    update() {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
  
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
  
      this.x += this.dx;
      this.y += this.dy;
  
      this.draw();
    }
  }

  

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    balls.forEach(ball => ball.update());
  }
  
  animate();

  canvas.addEventListener('click', function(event) {

    for (let i = 0; i < 3; i++) {
        const radius = Math.random() * 10 + 10;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 10;
        const dy = (Math.random() - 0.5) * 10;

        var rand = Math.floor(Math.random()*colors.length);   

        const color =  colors[rand];
      
        balls.push(new Ball(x, y, dx, dy, radius, color));
      }
  });

  