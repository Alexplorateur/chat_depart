import { aleatoire_entier } from "./outils.js"
import { Oeil } from "./Oeil.js"

export class Chat {
    balise = null
    oeilG = null
    oeilD = null

    constructor(balise) {
        this.balise = balise


        let pupilleG = document.querySelector(".pupille1")
        this.oeilG = new Oeil(pupilleG)

        let pupilleD = document.querySelector(".pupille2")
        this.oeilD = new Oeil(pupilleD)

        setInterval(() => {
            this.changerYeux()

        }, 1000)

    }

    changerYeux(){
        let largeur = aleatoire_entier(20, 100)
        this.oeilD.changerGrosseur(largeur)
        this.oeilG.changerGrosseur(largeur)
    }
}