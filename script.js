const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const filterOne = words.filter((wordsElem)=>(
    wordsElem.length>5
))
console.log(filterOne)

// ##################################################################

const tab = [2, 10, 5, 13, 30, 23, 9, 16, 40, 2, 19, 50]
function GrandNombre(nombres){
    if(nombres>10){
        return nombres
    }
}
console.log(tab.filter(GrandNombre))

// ##############################################################""

const tabs = [2, 10, 5, 13, 30, 23, 9, 16, 40, 2, 19, 50]
function Grand(element){
    for(let i = 0; i<element.length; i++){
        let elements = element[i]
        if(elements>10){
             return elements
        }
    }
}
console.log(Grand(tabs))