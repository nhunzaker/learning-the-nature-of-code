class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}

	sub(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
	}

	mult(n) {
		this.x *= n;
		this.y *= n;
	}

	div(n) {
		this.x /= n;
		this.y /= n;
	}

	mag() {
		return Math.sqrt(this.x * this.x, this.y * this.y);
	}

	normalize() {
		this.div(this.mag() || 1);
	}
}
