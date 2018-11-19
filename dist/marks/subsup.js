"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = require("./mark");
var SubSup = /** @class */ (function (_super) {
    __extends(SubSup, _super);
    function SubSup(variant) {
        var _this = _super.call(this, 'subsup') || this;
        _this.variant = variant;
        return _this;
    }
    SubSup.prototype.toJSON = function () {
        return {
            type: this.type,
            attrs: {
                type: this.variant
            }
        };
    };
    return SubSup;
}(mark_1.Mark));
exports.SubSup = SubSup;
//# sourceMappingURL=subsup.js.map