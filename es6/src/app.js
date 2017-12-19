/**
 * Created by sf on 2017/12/19.
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