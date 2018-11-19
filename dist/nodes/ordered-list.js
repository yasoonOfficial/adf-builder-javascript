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
var list_item_1 = require("./list-item");
var OrderedList = /** @class */ (function (_super) {
    __extends(OrderedList, _super);
    function OrderedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('orderedList');
        return _this;
    }
    OrderedList.prototype.item = function () {
        return this.content.add(new list_item_1.ListItem());
    };
    OrderedList.prototype.textItem = function (text, marks) {
        this.item().paragraph().text(text, marks);
        return this;
    };
    OrderedList.prototype.linkItem = function (text, href, title) {
        this.item().paragraph().link(text, href, title);
        return this;
    };
    OrderedList.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return OrderedList;
}(index_1.TopLevelNode));
exports.OrderedList = OrderedList;
//# sourceMappingURL=ordered-list.js.map