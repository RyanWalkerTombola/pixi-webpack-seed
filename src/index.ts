import { Application, Loader, Sprite } from 'pixi.js';

const resources = Loader.shared.resources;

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio
});

document.body.appendChild(app.view);

Loader.shared
    .add('assets/cat.png')
    .load(setup);

function setup() {
    const cat = new Sprite(resources['assets/cat.png'].texture);
    app.stage.addChild(cat);
}