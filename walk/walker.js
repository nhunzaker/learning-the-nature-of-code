let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
var perlin = new ClassicalNoise(Math);

class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;

        	this.tx = Math.random() * 10000;
		this.ty = Math.random() * 10000;

        	this.speed = 4;
	}

	display() {
		ctx.globalAlpha = 0.4;
        	ctx.beginPath();
		ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        	ctx.fill();
	}

	step() {
		this.x = (perlin.noise(this.tx, this.ty, 0.8) * width) + width * 0.5;
		this.y = (perlin.noise(this.ty, this.tx, 0.8) * height) + height * 0.5;

        	this.tx += 0.01;
        	this.ty += 0.01;
	}
};

let walkers = [for (x of new Array(3)) new Walker()];

requestAnimationFrame(function loop() {
	ctx.save();
	walkers.map((w) => { w.step(); w.display(); });
    	ctx.restore();
	requestAnimationFrame(loop);
});
