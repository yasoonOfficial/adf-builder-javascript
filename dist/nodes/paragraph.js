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
var emoji_1 = require("./emoji");
var hard_break_1 = require("./hard-break");
var index_1 = require("./index");
var mention_1 = require("./mention");
var text_1 = require("./text");
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('paragraph');
        return _this;
    }
    Paragraph.prototype.text = function (text, marks) {
        return this.add(new text_1.Text(text, marks));
    };
    Paragraph.prototype.code = function (text) {
        return this.add(text_1.code(text));
    };
    Paragraph.prototype.em = function (text) {
        return this.add(text_1.em(text));
    };
    Paragraph.prototype.link = function (text, href, title) {
        return this.add(text_1.link(text, href, title));
    };
    Paragraph.prototype.strong = function (text) {
        return this.add(text_1.strong(text));
    };
    Paragraph.prototype.mention = function (id, text) {
        return this.add(new mention_1.Mention(id, text));
    };
    Paragraph.prototype.emoji = function (shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName: shortName, id: id, text: text }));
    };
    Paragraph.prototype.hardBreak = function () {
        return this.add(new hard_break_1.HardBreak());
    };
    Paragraph.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Paragraph.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return Paragraph;
}(index_1.TopLevelNode));
exports.Paragraph = Paragraph;
//# sourceMappingURL=paragraph.js.map