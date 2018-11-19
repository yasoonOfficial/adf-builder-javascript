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
var colorPattern = /^#[0-9a-f]{6}$/;
var TextColor = /** @class */ (function (_super) {
    __extends(TextColor, _super);
    function TextColor(color) {
        var _this = _super.call(this, 'textColor') || this;
        _this.color = color;
        if (!colorPattern.test(color)) {
            throw new Error("Color " + color + " does not match ^#[0-9a-f]{6}$");
        }
        return _this;
    }
    TextColor.prototype.toJSON = function () {
        return {
            type: this.type,
            attrs: {
                color: this.color
            }
        };
    };
    return TextColor;
}(mark_1.Mark));
exports.TextColor = TextColor;
//# sourceMappingURL=text-color.js.map