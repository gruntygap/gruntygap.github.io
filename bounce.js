let htmlTag = document.getElementsByTagName('html')[0];
let bouncer = document.getElementById('bouncer');

let screenW = htmlTag.clientWidth,
    screenH = htmlTag.clientHeight,
    wLoc = 0;
    hLoc = 0;
    wForward = true,
    hForward = true,
    move = true;

addEventListener('resize', (_event) => {
    screenW = htmlTag.clientWidth;
    screenH = htmlTag.clientHeight;
});

function moveElement(x, y) {
    bouncer.style.left = `${x}px`;
    bouncer.style.top = `${y}px`;
}

function loop() {
    if (wLoc > screenW - bouncer.offsetWidth || wLoc < 0) wForward = !wForward
    if (hLoc > screenH - bouncer.offsetHeight || hLoc < 0) hForward = !hForward

    wLoc += wForward ? 1 : -1;
    hLoc += hForward ? 1 : -1;

    moveElement(wLoc, hLoc);

    setTimeout(loop, 5);
}

setTimeout(loop, 5);