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
var paragraph_1 = require("./paragraph");
var BlockQuote = /** @class */ (function (_super) {
    __extends(BlockQuote, _super);
    function BlockQuote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('blockquote');
        return _this;
    }
    BlockQuote.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    BlockQuote.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return BlockQuote;
}(index_1.TopLevelNode));
exports.BlockQuote = BlockQuote;
//# sourceMappingURL=block-quote.js.map