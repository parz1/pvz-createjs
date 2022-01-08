import createjs from "@/createjs";
import { CONFIG } from "@/config";
import { handleResize } from "@/utils";
import { manifest, ssManifest } from "@/config/manifest";
import { Store } from "@/store";
import { reducer } from "@/store/reducers";
import { state } from "@/store/state";
import { Zombie } from "./Zombie";
import { Plant, PlatForm } from "./Plant";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.store = new Store(reducer, state)
    this.loader = undefined
    this.spriteSheet = undefined
  }
  async init() {
    this.stage = new createjs.Stage(this.canvas);
    const { loader, spriteSheet } = await this.load()
    this.loader = loader
    this.spriteSheet = spriteSheet
    this.start()
    handleResize(this.canvas, this.stage);
    window.onresize = () => handleResize(this.canvas, this.stage);
  }
  start() {
    // NOTE background
    const bg = new createjs.Bitmap(this.loader.getResult('bg2'))
    const platform = new PlatForm(this.store)
    this.stage.addChild(bg)
    this.stage.addChild(platform)
    const zombie1 = new Zombie(this.spriteSheet, this.store)
    this.store.dispatch({ type: 'ADD_ZOMBIE', payload: zombie1 })
    zombie1.x = 500
    zombie1.init()
    const zombie2 = new Zombie(this.spriteSheet, this.store)
    platform.addZombie(2, zombie2)
    // this.store.dispatch({ type: 'ADD_ZOMBIE', payload: zombie2 })
    // zombie2.x = 600
    // zombie2.init()
    const plant = new Plant(this.spriteSheet, this.store)
    platform.addPlant(1, 1, plant)
    const plant2 = new Plant(this.spriteSheet, this.store)
    platform.addPlant(2, 2, plant2)
    // this.store.dispatch({ type: 'ADD_PLANT', payload: plant })
    // plant.x = 100
    // plant.y = 50
    // plant.init()
    this.stage.addChild(zombie1)
    // this.stage.addChild(zombie2)
    // this.stage.addChild(plant)
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
          let _spritesheet = {}
          Object.keys(ssManifest).forEach(key => {
            const data = {
              images: [loader.getResult(key)],
              frames: ssManifest[key].frames,
              animations: ssManifest[key].animations
            };
            _spritesheet[key] = new createjs.SpriteSheet(data)
          })
          console.log('Spritesheet installed')
          return _spritesheet
        }
        const spriteSheet = installSS(loader)
        resolve({ loader, spriteSheet })
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
