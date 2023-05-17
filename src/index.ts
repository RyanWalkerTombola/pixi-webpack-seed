import { Application, Loader, Sprite } from 'pixi.js';

const resources = Loader.shared.resources;

const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    antialias: true
});

app.view.style.position = 'absolute';
app.view.style.display = 'block';

document.body.appendChild(app.view);

Loader.shared
    .add('assets/cat.png')
    .load(setup);

let cat: Sprite;

function setup() {
    cat = new Sprite(resources['assets/cat.png'].texture);
    app.stage.addChild(cat);
    cat.anchor.set(0.5, 0.5);

    app.ticker.add((delta) => update(delta));
}

function update(delta: number) {
    app.stage.x = app.view.width / (2 * window.devicePixelRatio);
    app.stage.y = app.view.height / (2 * window.devicePixelRatio);

    cat.angle += 1 * delta;
}
