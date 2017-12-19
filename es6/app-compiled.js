'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by sf on 2017/12/19.
 */

/**
 * class, extends, super
 */
var Animal = function () {
    function Animal() {
        _classCallCheck(this, Animal);

        this.type = 'animal';
    }

    _createClass(Animal, [{
        key: 'says',
        value: function says(say) {
            console.log(this.type + 'say' + say);
        }
    }]);

    return Animal;
}();

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat() {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this));

        _this.type = 'cat';
        return _this;
    }

    return Cat;
}(Animal);

var animal = new Animal();
animal.says('hello');

var cat = new Cat();
cat.says('helllo');

/**
 * destructuring
 * @type {string}
 */
var cat1 = 'ken';
var dog1 = 'lili';
var zoo1 = { cat1: cat1, dog1: dog1 }; // es5
var zoo2 = { cat1: cat1, dog1: dog1 }; //es6
console.log(zoo1); // { cat1: 'ken', dog1: 'lili' }
console.log(zoo2); // { cat1: 'ken', dog1: 'lili' }

// 反过来，可以这样写
var dog3 = { type: 'animal', many: 2 };
var type = dog3.type,
    many = dog3.many;

console.log(type, many);

/**
 * default rest
 * @param types
 */
function animals() {
    for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
        types[_key] = arguments[_key];
    }

    console.log(types);
}
animals('cat', 'dog', 'fish');

function animal4() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cat';

    console.log(type);
}
animal4();

//# sourceMappingURL=app-compiled.js.map