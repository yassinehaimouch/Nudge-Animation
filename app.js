const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  html2canvas(container).then(canvas => {
    const gif = new GIF({
      workers: 2,
      quality: 10
    });

    gif.addFrame(canvas, { delay: 2000 });

    gif.on('finished', blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'container.gif';
      document.body.appendChild(a);
      a.click();
    });

    gif.render();
  });
});