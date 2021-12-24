import createjs from "@/createjs";
import { CONFIG } from "@/config";
import { handleResize } from "@/utils";
import { manifest, ssManifest } from "@/config/manifest";
import { Store } from "@/store";
import { reducer } from "@/store/reducers";
import { state } from "@/store/state";
import { Zombie } from "./Zombie";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.store = new Store(reducer, state)
    this.loader = undefined
    this.sprites = undefined
  }
  async init() {
    this.stage = new createjs.Stage(this.canvas);
    const { loader, sprites } = await this.load()
    this.loader = loader
    this.sprites = sprites
    this.start()
    handleResize(this.canvas, this.stage);
    window.onresize = () => handleResize(this.canvas, this.stage);
  }
  start() {
    // NOTE background
    const bg = new createjs.Bitmap(this.loader.getResult('bg'))
    this.stage.addChild(bg)
    const zombie = new Zombie(this.sprites, this.store)
    zombie.init()
    this.stage.addChild(zombie)
    createjs.Ticker.framerate = CONFIG.framerate;
    createjs.Ticker.on("tick", () => {
      this.update();
    });
  }
  load() {
    return new Promise((resolve, reject) => {
      const loader = new createjs.LoadQueue(false);
      loader.loadManifest(manifest);
      loader.on('complete', (target, type) => {
        console.log('Resources Loaded')
        // NOTE install all sprite sheets
        const installSS = (loader) => {
          let _sprites = {}
          Object.keys(ssManifest).forEach(key => {
            const data = {
              images: [loader.getResult(key)],
              frames: ssManifest[key].frames,
              animations: ssManifest[key].animations
            };
            const ss = new createjs.SpriteSheet(data)
            _sprites[key] = new createjs.Sprite(ss, 'play')
          })
          console.log('Sprites installed')
          return _sprites
        }
        const sprites = installSS(loader)
        resolve({ loader, sprites })
      })
      loader.on('error', (title, msg, data) => {
        reject({ title, msg, data })
      })
    })
  }
  update() {
    this.stage.update();
  }
  exit() { }
}
