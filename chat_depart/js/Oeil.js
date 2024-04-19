export class Oeil {
    // Propriétés

    balise = null
    positionCentrale = null
    baliseCentre = null

    // Constructeur

    constructor(balise){
        this.balise = balise
        this.positionCentrale = this.balise.getBoundingClientRect()

        window.addEventListener("mousemove", e => {
            this.suivre(e.pageX, e.pageY)
        })

        this.baliseCentre = this.balise.querySelector("div")

        
    }

    // Méthodes

    suivre(sourisX, sourisY){
        let x1 = this.positionCentrale.x
        let x2 = sourisX
        let y1 = this.positionCentrale.y
        let y2 = sourisY

        let angle = Math.atan2(y2 - y1, x2 - x1)
        
        let distance = 12

        let decalageX = Math.cos(angle) * distance
        let decalageY = Math.sin(angle) * distance

        this.balise.style.transform = `translate(${decalageX}px, ${decalageY}px)`
    }

    changerGrosseur(largeur) {

        this.baliseCentre.style.transform = `translate(-50%, -50%) scaleX(${largeur}%)`
    }

    
}