/**
 * Created by sf on 2017/6/18.
 */

function execute(someFunction, value) {
    someFunction(value);
}

execute(function (word) {
    console.log(word);
}, 'Hello');
