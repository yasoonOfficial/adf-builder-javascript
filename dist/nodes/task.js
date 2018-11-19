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
var Task = /** @class */ (function () {
    function Task(localId, state) {
        this.localId = localId;
        this.state = state;
        this.content = new index_1.ContentNode('taskItem');
    }
    Task.prototype.text = function (text, marks) {
        return this.add(new text_1.Text(text, marks));
    };
    Task.prototype.code = function (text) {
        return this.add(text_1.code(text));
    };
    Task.prototype.em = function (text) {
        return this.add(text_1.em(text));
    };
    Task.prototype.link = function (text, href, title) {
        return this.add(text_1.link(text, href, title));
    };
    Task.prototype.strike = function (text) {
        return this.add(text_1.strike(text));
    };
    Task.prototype.strong = function (text) {
        return this.add(text_1.strong(text));
    };
    Task.prototype.mention = function (id, text) {
        return this.add(new mention_1.Mention(id, text));
    };
    Task.prototype.emoji = function (shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName: shortName, id: id, text: text }));
    };
    Task.prototype.hardBreak = function () {
        return this.add(new hard_break_1.HardBreak());
    };
    Task.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Task.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId,
                state: this.state
            } });
    };
    return Task;
}());
exports.Task = Task;
var TaskState;
(function (TaskState) {
    TaskState["TODO"] = "TODO";
    TaskState["DONE"] = "DONE";
})(TaskState = exports.TaskState || (exports.TaskState = {}));
//# sourceMappingURL=task.js.map