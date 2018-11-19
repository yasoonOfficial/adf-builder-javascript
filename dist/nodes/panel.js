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
var bullet_list_1 = require("./bullet-list");
var heading_1 = require("./heading");
var index_1 = require("./index");
var ordered_list_1 = require("./ordered-list");
var paragraph_1 = require("./paragraph");
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(panelType) {
        var _this = _super.call(this) || this;
        _this.panelType = panelType;
        _this.content = new index_1.ContentNode('panel');
        return _this;
    }
    Panel.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    Panel.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    Panel.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    Panel.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    Panel.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                panelType: this.panelType
            } });
    };
    return Panel;
}(index_1.TopLevelNode));
exports.Panel = Panel;
//# sourceMappingURL=panel.js.map