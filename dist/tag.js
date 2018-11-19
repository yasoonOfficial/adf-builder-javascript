"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./document");
var index_1 = require("./nodes/index");
function document(strings) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var doc = new document_1.Document();
    var paragraph = doc.paragraph();
    for (var i = 0; i < args.length; i++) {
        if (strings[i].length) {
            paragraph.text(strings[i]);
        }
        if (args[i] instanceof index_1.TopLevelNode) {
            throw new Error('Top level nodes cannot be used in tagged templates');
        }
        if (args[i] instanceof index_1.InlineNode) {
            paragraph.add(args[i]);
        }
        else {
            var stringified = String(args[i]);
            if (stringified.length > 0) {
                paragraph.text(stringified);
            }
        }
    }
    if (strings[args.length].length > 0) {
        paragraph.text(strings[args.length]);
    }
    return doc;
}
exports.document = document;
//# sourceMappingURL=tag.js.map