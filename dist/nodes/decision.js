"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_1 = require("./emoji");
var hard_break_1 = require("./hard-break");
var index_1 = require("./index");
var mention_1 = require("./mention");
var text_1 = require("./text");
var Decision = /** @class */ (function () {
    function Decision(localId, state) {
        this.localId = localId;
        this.state = state;
        this.content = new index_1.ContentNode('decisionItem');
    }
    Decision.prototype.text = function (text, marks) {
        return this.add(new text_1.Text(text, marks));
    };
    Decision.prototype.code = function (text) {
        return this.add(text_1.code(text));
    };
    Decision.prototype.em = function (text) {
        return this.add(text_1.em(text));
    };
    Decision.prototype.link = function (text, href, title) {
        return this.add(text_1.link(text, href, title));
    };
    Decision.prototype.strike = function (text) {
        return this.add(text_1.strike(text));
    };
    Decision.prototype.strong = function (text) {
        return this.add(text_1.strong(text));
    };
    Decision.prototype.mention = function (id, text) {
        return this.add(new mention_1.Mention(id, text));
    };
    Decision.prototype.emoji = function (shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName: shortName, id: id, text: text }));
    };
    Decision.prototype.hardBreak = function () {
        return this.add(new hard_break_1.HardBreak());
    };
    Decision.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Decision.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId,
                state: this.state
            } });
    };
    return Decision;
}());
exports.Decision = Decision;
//# sourceMappingURL=decision.js.map