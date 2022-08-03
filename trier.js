var fruits = ['pomme', 'banane', 'raisin', 'mangue'];

function filtreTexte(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !==-1
  })
}

console.log(filtreTexte(fruits, 'an'))

console.log(filtreTexte(fruits, 'm'))