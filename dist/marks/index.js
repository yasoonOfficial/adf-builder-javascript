"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("./action");
var code_1 = require("./code");
var em_1 = require("./em");
var link_1 = require("./link");
var strike_1 = require("./strike");
var strong_1 = require("./strong");
var subsup_1 = require("./subsup");
var text_color_1 = require("./text-color");
var underline_1 = require("./underline");
function marks() {
    return new Marks();
}
exports.marks = marks;
var Marks = /** @class */ (function () {
    function Marks() {
        this.marks = [];
    }
    Marks.prototype.code = function () {
        return this.add(new code_1.Code());
    };
    Marks.prototype.em = function () {
        return this.add(new em_1.Em());
    };
    Marks.prototype.link = function (href, title) {
        return this.add(new link_1.Link(href, title));
    };
    Marks.prototype.strike = function () {
        return this.add(new strike_1.Strike());
    };
    Marks.prototype.strong = function () {
        return this.add(new strong_1.Strong());
    };
    Marks.prototype.sub = function () {
        return this.add(new subsup_1.SubSup('sub'));
    };
    Marks.prototype.sup = function () {
        return this.add(new subsup_1.SubSup('sup'));
    };
    Marks.prototype.color = function (color) {
        return this.add(new text_color_1.TextColor(color));
    };
    Marks.prototype.underline = function () {
        return this.add(new underline_1.Underline());
    };
    Marks.prototype.action = function (title, target, actionParameters) {
        return this.add(new action_1.Action(title, target, actionParameters));
    };
    Marks.prototype.toJSON = function () {
        if (this.marks.length === 0) {
            throw new Error('At least one mark is required');
        }
        return this.marks.map(function (mark) { return mark.toJSON(); });
    };
    Marks.prototype.add = function (mark) {
        var existing = this.marks.filter(function (m) { return m.type === mark.type; });
        if (existing.length > 0) {
            throw new Error('A mark type can only be used once');
        }
        this.marks.push(mark);
        return this;
    };
    return Marks;
}());
exports.Marks = Marks;
//# sourceMappingURL=index.js.map