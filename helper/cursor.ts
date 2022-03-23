const cursorStatus = { mode: false };

const TAIL = 20;

let mouseX = 0;
let mouseY = 0;

let allCursors: any[];

let cursorHistory = Array(TAIL).fill({ x: 0, y: 0 });

export const cursor = () => {
  document.addEventListener('mousemove', onMouseMove, false);
  init();
  update();
};

function onMouseMove(event: MouseEvent) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function init() {
  if (cursorStatus.mode) return;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" class="circleSvg" version="1.1" width="100%">
  <defs>
      <filter id="circleSvg">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
          <feComposite in="SourceGraphic" in2="circleSvg" operator="atop"></feComposite>
      </filter>
  </defs>
</svg>`;

  document.body.insertAdjacentHTML('beforeend', svg);

  cursorStatus.mode = true;

  let cursor = document.getElementById('cursor');

  if (!cursor) {
    cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.append(cursor);

    for (let i = 0; i < TAIL; i++) {
      const div = document.createElement('div');
      div.className = 'cursor__shape';
      if (cursor) cursor.append(div);
    }
  }

  allCursors = Array.from(document.querySelectorAll('.cursor__shape'));
}

function update() {
  cursorHistory.shift();
  cursorHistory.push({
    x: mouseX,
    y: mouseY,
  });

  for (let i = 0; i < TAIL; i++) {
    const current = cursorHistory[i];
    const next = cursorHistory[i + 1] || cursorHistory[TAIL - 1];

    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;

    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;

    allCursors[i].style.transform = `translate(${current.x}px, ${
      current.y
    }px) scale(${(i * 1.5) / (2 * TAIL)})`;

    allCursors[i].style.opacity = `${1 - (i / 3) * 0.1}`;
  }

  requestAnimationFrame(update);
}
