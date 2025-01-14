import Projectile from "./Projectile";
export default class Player {
    constructor(game) {
        this.game = game;
        this.width = 32;
        this.height = 64;
        this.x = 50;
        this.y = 100;
        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 10
        this.projectiles = []
    }

    update(deltaTime) {
        if (this.game.keys.includes('a')) {
            this.speedX = -this.maxSpeed
        } else if (this.game.keys.includes('d')) {
            this.speedX = this.maxSpeed
        } else {
            this.speedX = 0
        }

        this.x += this.speedX

        if (this.game.keys.includes('w')) {
            this.speedY = -this.maxSpeed
        } else if (this.game.keys.includes('s')) {
            this.speedY = this.maxSpeed
        } else {
            this.speedY = 0
        }

        this.y += this.speedY

        this.projectiles.forEach((projectile) => {
            projectile.update()
        })
        this.projectiles = this.projectiles.filter(
            (projectile) => !projectile.markedForDeletion
        )
    }

    draw(context) {
        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height);
        this.projectiles.forEach((projectile) => {
            projectile.draw(context)

            if (this.game.debug) {
                context.strokeRect(this.x, this.y, this.width, this.height)
                context.fillStyle = 'black'
                context.font = '12px Arial'
                context.fillText(this.frameX, this.x, this.y - 5)
            }
        })

    }



    shoot() {
        this.projectiles.push(
            new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
        )
    }


}