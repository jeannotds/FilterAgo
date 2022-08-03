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

  let onbjectId = []
  let onbjectIsNotId = []

for(let i = 0; i<arr.length; i++){
    let arrs = arr[i]
    if(arrs.id){
        console.log(arrs.id)
        onbjectId.push(arrs.id)
    }
    else{
        onbjectIsNotId.push(arrs.id)
    }
}
console.log(" IsObjectd = " + onbjectId.length)
console.log(" IsNpotObjectID = " + onbjectIsNotId.length)
