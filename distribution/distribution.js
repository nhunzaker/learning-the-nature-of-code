let ctx = canvas.getContext('2d');
let randomCounts = new Uint8Array(20);

requestAnimationFrame(function loop() {
    let index = Math.floor(Math.random() * randomCounts.length);
    let width = canvas.width / randomCounts.length;

    randomCounts[index]++;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle   = 'gray';
    ctx.strokeStyle = 'black';

    for (var i = 0; i < randomCounts.length; i++) {
        let x = i * width;
        let y = canvas.height - randomCounts[i];

        ctx.fillRect(x, y, width - 1, randomCounts[i]);
        ctx.strokeRect(x, y, width - 1, randomCounts[i]);
    }

    ctx.restore();

	requestAnimationFrame(loop);
});
