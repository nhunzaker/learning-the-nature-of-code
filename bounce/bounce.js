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

let locale	 = new Vector(100, 100);
let velocity = new Vector(2.5, 5);

requestAnimationFrame(function loop() {
	ctx.save();

	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, width, height);

	locale.add(velocity);

	if (locale.x > width  || locale.x < 0) {
		velocity.x *= -1;
	}

	if (locale.y > height || locale.y < 0) {
		velocity.y *= -1;
	}

	ctx.styleStyle = 'black';
	ctx.fillStyle = 'gray';

	ellipse(locale.x, locale.y, 16);

	ctx.restore();
	requestAnimationFrame(loop);
});
