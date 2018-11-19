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
var index_1 = require("./index");
function hardBreak() {
    return new HardBreak();
}
exports.hardBreak = hardBreak;
var HardBreak = /** @class */ (function (_super) {
    __extends(HardBreak, _super);
    function HardBreak() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardBreak.prototype.toJSON = function () {
        return {
            type: 'hardBreak',
            attrs: {
                text: '\n'
            }
        };
    };
    return HardBreak;
}(index_1.InlineNode));
exports.HardBreak = HardBreak;
//# sourceMappingURL=hard-break.js.map