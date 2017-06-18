/**
 * Created by sf on 2017/6/18.
 */

function say(word) {
    console.log('Hello, ' + word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, '张三丰');