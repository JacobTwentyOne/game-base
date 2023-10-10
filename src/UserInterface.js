export default class UserInterface {
    constructor(game) {
        this.game = game
        this.fontSize = 25
        this.fontFamily = `Arial`
        this.color = `white`
    }
    draw(context) {
        context.save()
        context.fillStyle = this.color
        context.shadowOffsetX = 2
        context.shadowOffsetY = 2
        context.shadowColor = 'black'


    }



}