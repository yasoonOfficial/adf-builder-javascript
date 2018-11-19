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
function mention(id, text) {
    return new Mention(id, text);
}
exports.mention = mention;
var Mention = /** @class */ (function (_super) {
    __extends(Mention, _super);
    function Mention(id, text) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.text = text;
        return _this;
    }
    Mention.prototype.toJSON = function () {
        return {
            type: 'mention',
            attrs: {
                id: this.id,
                text: this.text
            }
        };
    };
    return Mention;
}(index_1.InlineNode));
exports.Mention = Mention;
//# sourceMappingURL=mention.js.map