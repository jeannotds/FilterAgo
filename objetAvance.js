

let Personne = [{
    jean: {
        age: 10,
        taille: 1.6,
        etude:[
            "1ere", "2eme", "3eme"
        ]
    },
    blaise: {
        age: 12,
        taille: 1.2,
        etude:[
            "1ere", "2eme", "3eme", "4eme", "5eme"
        ]
    },
    aris: {
        age: 17,
        taille: 1.6,
        etude:[
            "1ere", "2eme"
        ]
    }
}]

const personnes = Personne.map((list)=>(
    console.log(list.jean.etude[0])
))

// for(let i = 0; i<Personne.length; i++){
//     let personne = Personne[i]
//     console.log(personne.jean.etude)
//     let personneJean = personne.jean.etude
//     for(let k = 0; k<personneJean.length; k++){
//         let persJean = personneJean[i]
//         console.log('persJean ' +persJean)
//     }
// }