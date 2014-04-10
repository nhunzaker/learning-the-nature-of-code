let ctx = canvas.getContext('2d');

class Walker {
	constructor() {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2
        this.speed = 4;
	}

	display() {
		ctx.globalAlpha = 0.4;
        ctx.beginPath();
		ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
	}

	step() {
		this.x += Math.random() * this.speed - (this.speed * 0.5);
		this.y += Math.random() * this.speed - (this.speed * 0.5);
	}
};

let walkers = [for (x of new Array(5)) new Walker()];

requestAnimationFrame(function loop() {
    ctx.save();
    walkers.map((w) => { w.step(); w.display(); });
    ctx.restore();
	requestAnimationFrame(loop);
});
