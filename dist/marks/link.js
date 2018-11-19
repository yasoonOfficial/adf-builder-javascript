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
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(href, title) {
        var _this = _super.call(this, 'link') || this;
        _this.href = href;
        _this.title = title;
        return _this;
    }
    Link.prototype.toJSON = function () {
        var linkMark = {
            type: this.type,
            attrs: {
                href: this.href
            }
        };
        if (this.title) {
            linkMark.attrs.title = this.title;
        }
        return linkMark;
    };
    return Link;
}(mark_1.Mark));
exports.Link = Link;
//# sourceMappingURL=link.js.map