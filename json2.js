var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  var elementsInvalides = 0

  function filtrerParId(obj){
        //Si c'est un nombre
        if( (obj.id != undefined) && typeof(obj.id) === 'number' && !isNaN(obj.id) ) {
            return true
        }
        else{
            elementsInvalides++;
            return false
        }
  }
  var arrByID = arr.filter(filtrerParId);
  console.log('Tableau filtré\n', arrByID);

console.log('Nombre d\'éléments invalides = ', elementsInvalides);