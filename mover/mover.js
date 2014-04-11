let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

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
        this.locale   = new Vector(Math.random() * width, Math.random() * height);
        this.velocity = new Vector(Math.random() * 2 - 2, Math.random() * 2 - 2);
    }

    update() {
        this.locale.add(this.velocity);
    }

    display() {
        ctx.strokeStyle = 'black';
        ctx.fillStyle   = 'gray';
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

let mover = new Mover();

var draw = function() {
	ctx.save();
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, width, height);

    mover.update();
    mover.checkEdges();
    mover.display();

    ctx.restore();
}

requestAnimationFrame(function loop() {
    draw();
	requestAnimationFrame(loop);
});
