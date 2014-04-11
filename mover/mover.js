let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let mouseX = 0;
let mouseY = 0;

document.body.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

var ellipse = (x, y, radius) => {
	let offset = radius * 0.5;

	ctx.beginPath();
	ctx.arc(x - offset, y - offset, radius, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
};

class Mover {
    constructor(x, y) {
        this.locale = new Vector(Math.random() * width, Math.random() * height);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(-0.001, 0.01);

        this.topSpeed = 5;
    }

    update() {
        let dir = new Vector(mouseX, mouseY);

        dir.sub(this.locale).normalize().mult(0.5);

        this.acceleration = dir;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);

        this.locale.add(this.velocity);
    }

    display() {
        ctx.strokeStyle = 'black';
        ctx.fillStyle   = 'rgba(100, 100, 100, 0.8)';
        ellipse(this.locale.x, this.locale.y, 16);
    }

    checkEdges() {
        var loc = this.locale;

        if (loc.x > width) {
            loc.x = 0;
        } else if (loc.x < 0) {
            loc.x = width;
        }

        if (loc.y > height) {
            loc.y = 0;
        } else if (loc.y < 0) {
            loc.y = height;
        }
    }
}

let movers = []
while (movers.length < 40) movers.push(new Mover());

var draw = function() {
	ctx.save();
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, width, height);

    for (var mover of movers) {
        mover.update();
        mover.checkEdges();
        mover.display();
    }

    ctx.restore();
}

requestAnimationFrame(function loop() {
    draw();
	requestAnimationFrame(loop);
});
