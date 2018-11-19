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
var index_1 = require("../marks/index");
var index_2 = require("./index");
function plain(text) {
    return new Text(text);
}
exports.plain = plain;
function strike(text) {
    return new Text(text, index_1.marks().strike());
}
exports.strike = strike;
function strong(text) {
    return new Text(text, index_1.marks().strong());
}
exports.strong = strong;
function em(text) {
    return new Text(text, index_1.marks().em());
}
exports.em = em;
function link(text, href, title) {
    return new Text(text, index_1.marks().link(href, title));
}
exports.link = link;
function code(text) {
    return new Text(text, index_1.marks().code());
}
exports.code = code;
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(text, marks) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.marks = marks;
        if (!text || text.length === 0) {
            throw new Error('Text must be at least one character long');
        }
        return _this;
    }
    Text.prototype.toJSON = function () {
        var textNode = {
            type: 'text',
            text: this.text,
        };
        if (this.marks) {
            textNode.marks = this.marks.toJSON();
        }
        return textNode;
    };
    return Text;
}(index_2.InlineNode));
exports.Text = Text;
//# sourceMappingURL=text.js.map