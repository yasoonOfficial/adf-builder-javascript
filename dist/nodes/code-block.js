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
var text_1 = require("./text");
var CodeBlock = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
    function CodeBlock(language) {
        var _this = _super.call(this) || this;
        _this.language = language;
        _this.content = new index_1.ContentNode('codeBlock');
        return _this;
    }
    CodeBlock.prototype.text = function (code) {
        this.content.add(text_1.plain(code));
        return this;
    };
    CodeBlock.prototype.toJSON = function () {
        var codeBlock = this.content.toJSON();
        if (this.language) {
            codeBlock.attrs = {
                language: this.language
            };
        }
        return codeBlock;
    };
    return CodeBlock;
}(index_1.TopLevelNode));
exports.CodeBlock = CodeBlock;
//# sourceMappingURL=code-block.js.map