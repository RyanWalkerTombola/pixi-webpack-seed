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

function setup() {
    const cat = new Sprite(resources['assets/cat.png'].texture);
    app.stage.addChild(cat);
}