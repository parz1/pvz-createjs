import createjs from "@/createjs";
import { CONFIG } from "@/config";
import { handleResize } from "@/utils";
import { manifest, ssManifest } from "@/config/manifest";
import { Store } from "@/store";
import { reducer } from "@/store/reducers";
import { state } from "@/store/state";
import { Zombie } from "./Zombie";
import { Plant, PlatForm } from "./Plant";
import { CustomMouse, PlantCard } from "./UI";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.store = new Store(reducer, state)
    this.loader = undefined
    this.spriteSheet = undefined
    this.stage = new createjs.Stage(this.canvas);
  }
  async init() {
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
    const customMouse = new CustomMouse(this.store, this.stage)
    customMouse.start(this.stage)
    const platform = new PlatForm(this.store)
    const plantCard = new PlantCard(
      this.store, 
      this.loader,
      this.spriteSheet,
      customMouse
      )
    this.stage.addChild(bg, customMouse, platform, plantCard)
    setInterval(() => {
      const zombie = new Zombie(this.spriteSheet, this.store)
      platform.addZombie(Math.round(Math.random()*2 + 1), zombie)
    }, 5000);
    this.stage.on('click', () => {
      const offX = this.stage.mouseX / this.stage.scaleX - 250
      const offY = this.stage.mouseY / this.stage.scaleY - 180
      const x = parseInt(offX / 80) + 1
      const y = parseInt(offY / 80) + 1

      const plant = new Plant(this.spriteSheet, this.store)
      platform.addPlant(x, y, plant)
    })
    const plant2 = new Plant(this.spriteSheet, this.store)
    platform.addPlant(2, 2, plant2)
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
