let ctx = canvas.getContext('2d');
let randomCounts = new Uint8Array(20);
let width = canvas.width / randomCounts.length;
let height = canvas.height;

requestAnimationFrame(function loop() {
    let index = Math.floor(Math.random() * randomCounts.length);

    randomCounts[index]++;

    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle   = 'gray';
    ctx.strokeStyle = 'black';

    for (var i = 0; i < randomCounts.length; i++) {
        let x = i * width;
        let y = height - randomCounts[i];

        ctx.fillRect(x, y, width - 1, randomCounts[i]);
        ctx.strokeRect(x, y, width - 1, randomCounts[i]);
    }

    ctx.restore();

	requestAnimationFrame(loop);
});
