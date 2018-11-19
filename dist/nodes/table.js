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
var table_row_1 = require("./table-row");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('table');
        return _this;
    }
    Table.prototype.row = function () {
        return this.content.add(new table_row_1.TableRow());
    };
    Table.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Table.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return Table;
}(index_1.TopLevelNode));
exports.Table = Table;
//# sourceMappingURL=table.js.map