

function fs(num:number){
  return num
}
fs(5)

// 布尔值
let isDone: boolean = false

// 数字 number
// 除了支持十进制和十六进制字面量 typeScript 还支持 CMAScript 2015 中引入的二进制和八进制字面量

let decLiteral : number = 6

let hexLiteral : number = 0xf00d

// 字符串

let nameq : string = "bob"


//  数组
let list : number[] = [1,2,6]

console.log('list',list)

let lists : Array <number> = [9,8,5]

// 远租 tuple
let x :[string, number];

x = ['',5] // 0k
// x = ['10', 'hello'] // Error

// x[3] = 'world'

let listA : any[] = [1, true, 'hello']

// void 
// 如果定于了 void 就不要返回任何值
function voids(): void {
  console.log('hello world')
}

// null 和 Undefined
let u: undefined = undefined
let n: null = null

// never 表示的是哪些用不存在的类型

function isd(arg:boolean){
  return arg
}
isd(false)




