var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    ////////////使用继承////////////////////
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m ");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log('Slithering...');
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log('Galloping...');
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake('Sammy the Python');
    var tom = new Horse('Tommy the Palonino');
    sam.move();
    tom.move(34);
    ///////////泛型///////////////////
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("Hello, world");
    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        alert(greeter.greet());
    };
    document.body.appendChild(button);
};
