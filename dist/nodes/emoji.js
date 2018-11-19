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
function emoji(shortName, id, text) {
    return new Emoji({ shortName: shortName, id: id, text: text });
}
exports.emoji = emoji;
var Emoji = /** @class */ (function (_super) {
    __extends(Emoji, _super);
    function Emoji(attrs) {
        var _this = _super.call(this) || this;
        _this.attrs = attrs;
        return _this;
    }
    Emoji.prototype.toJSON = function () {
        var emojiNode = {
            type: 'emoji',
            attrs: {
                shortName: this.attrs.shortName
            }
        };
        if (this.attrs.id) {
            emojiNode.attrs.id = this.attrs.id;
        }
        if (this.attrs.text) {
            emojiNode.attrs.text = this.attrs.text;
        }
        return emojiNode;
    };
    return Emoji;
}(index_1.InlineNode));
exports.Emoji = Emoji;
//# sourceMappingURL=emoji.js.map