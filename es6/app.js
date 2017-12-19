/**
 * Created by sf on 2017/12/19.
 */


/**
 * class, extends, super
 */
class Animal {
    constructor() {
        this.type = 'animal';
    }

    says(say) {
        console.log(this.type + 'say' + say);
    }
}

class Cat extends Animal {
    constructor() {
        super();
        this.type = 'cat';
    }
}

let animal = new Animal();
animal.says('hello');

let cat = new Cat();
cat.says('helllo');


/**
 * destructuring
 * @type {string}
 */
let cat1 = 'ken';
let dog1 = 'lili';
let zoo1 = {cat1: cat1, dog1: dog1};  // es5
let zoo2 = {cat1, dog1};  //es6
console.log(zoo1);  // { cat1: 'ken', dog1: 'lili' }
console.log(zoo2);  // { cat1: 'ken', dog1: 'lili' }

// 反过来，可以这样写
let dog3 = {type: 'animal', many: 2};
let {type, many} = dog3;
console.log(type, many);


/**
 * default rest
 * @param types
 */
function animals(...types) {
    console.log(types);
}
animals('cat', 'dog', 'fish');

function animal4(type='cat'){
    console.log(type);
}
animal4();

