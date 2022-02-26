function prinTable(obj) {
    console.log(obj.label);
}
var myObj = {
    size: 88,
    label: "this is string"
};
prinTable(myObj);
function create(arg) {
    var newSq = { color: 'white', area: 100 };
    if (arg.color) {
        newSq.color = arg.color;
    }
    if (arg.width) {
        newSq.area = arg.width;
    }
    return newSq;
}
var mySq = create({ color: "black" });
console.log(mySq);


class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}