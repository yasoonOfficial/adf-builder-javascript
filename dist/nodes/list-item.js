"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bullet_list_1 = require("./bullet-list");
var index_1 = require("./index");
var ordered_list_1 = require("./ordered-list");
var paragraph_1 = require("./paragraph");
var ListItem = /** @class */ (function () {
    function ListItem() {
        this.content = new index_1.ContentNode('listItem');
    }
    ListItem.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    ListItem.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    ListItem.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    ListItem.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=list-item.js.map