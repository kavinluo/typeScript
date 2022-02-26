interface labes {
  label: string
}

function prinTable(obj :labes){
  console.log(obj.label);
}

let myObj = {
  size:88,
  label:"this is string"
}

prinTable(myObj)


interface  config {
  color?: string;
  width?: number
}
function create(arg: config): {color:string;area: number} {
  let newSq = {color:'white',area: 100};
  if(arg.color){
    newSq.color = arg.color
  }
  if(arg.width){
    newSq.area = arg.width
  }
  return newSq
}

let mySq = create({color:"black"})


console.log(mySq)

