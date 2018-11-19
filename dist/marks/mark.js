"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mark = /** @class */ (function () {
    function Mark(type) {
        this.type = type;
    }
    Mark.prototype.toJSON = function () {
        return {
            type: this.type
        };
    };
    return Mark;
}());
exports.Mark = Mark;
//# sourceMappingURL=mark.js.map