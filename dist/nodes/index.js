"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentNode = /** @class */ (function () {
    function ContentNode(type, minLength) {
        if (minLength === void 0) { minLength = 1; }
        this.type = type;
        this.minLength = minLength;
        this.content = [];
    }
    ContentNode.prototype.toJSON = function () {
        if (this.content.length < this.minLength) {
            return {
                type: this.type,
                //We cannot import Paragraph as it is the subclass :(
                //content: [new Paragraph().text(' ').toJSON()] 
                content: [{
                        type: 'paragraph',
                        content: [{
                                type: 'text',
                                text: ' '
                            }]
                    }]
            };
        }
        return {
            type: this.type,
            content: this.content.map(function (node) { return node.toJSON(); })
        };
    };
    ContentNode.prototype.add = function (node) {
        if (!node) {
            throw new Error('Illegal value');
        }
        this.content.push(node);
        return node;
    };
    return ContentNode;
}());
exports.ContentNode = ContentNode;
var TopLevelNode = /** @class */ (function () {
    function TopLevelNode() {
    }
    return TopLevelNode;
}());
exports.TopLevelNode = TopLevelNode;
var InlineNode = /** @class */ (function () {
    function InlineNode() {
    }
    return InlineNode;
}());
exports.InlineNode = InlineNode;
//# sourceMappingURL=index.js.map