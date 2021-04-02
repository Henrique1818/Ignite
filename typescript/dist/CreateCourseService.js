"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCouserSvc = /** @class */ (function () {
    function CreateCouserSvc() {
    }
    CreateCouserSvc.prototype.execute = function (name, duration, educator) {
        console.log(name, duration, educator);
    };
    return CreateCouserSvc;
}());
exports.default = new CreateCouserSvc();
