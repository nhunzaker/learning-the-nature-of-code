let ctx = canvas.getContext('2d');

class Walker {
	constructor() {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2
	}

	display() {
		ctx.globalAlpha = 0.4;
		ctx.fillRect(this.x, this.y, 1, 1);
	}

	step() {
		this.x += Math.random() * 4 - 2
		this.y += Math.random() * 4 - 2
	}
};

let w = new Walker();

requestAnimationFrame(function loop() {
    w.step();
	w.display();
	requestAnimationFrame(loop);
});
