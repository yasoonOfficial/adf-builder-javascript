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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var text_1 = require("./text");
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        _this.content = new index_1.ContentNode('heading');
        if (level < 1 || level > 6) {
            throw new Error('Level must be in the range of 1-6');
        }
        return _this;
    }
    Heading.prototype.link = function (text, href, title) {
        this.content.add(text_1.link(text, href, title));
        return this;
    };
    Heading.prototype.text = function (text) {
        this.content.add(text_1.plain(text));
        return this;
    };
    Heading.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                level: this.level
            } });
    };
    return Heading;
}(index_1.TopLevelNode));
exports.Heading = Heading;
//# sourceMappingURL=heading.js.map