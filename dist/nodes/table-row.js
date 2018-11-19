"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var table_cell_1 = require("./table-cell");
var table_header_1 = require("./table-header");
var TableRow = /** @class */ (function () {
    function TableRow() {
        this.content = new index_1.ContentNode('tableRow');
    }
    TableRow.prototype.cell = function (backgroundColor) {
        return this.content.add(new table_cell_1.TableCell(backgroundColor));
    };
    TableRow.prototype.header = function (backgroundColor) {
        return this.content.add(new table_header_1.TableHeader(backgroundColor));
    };
    TableRow.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    TableRow.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return TableRow;
}());
exports.TableRow = TableRow;
//# sourceMappingURL=table-row.js.map