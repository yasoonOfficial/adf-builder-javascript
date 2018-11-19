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
var nodes_1 = require("./nodes");
var application_card_1 = require("./nodes/application-card");
var block_quote_1 = require("./nodes/block-quote");
var bullet_list_1 = require("./nodes/bullet-list");
var code_block_1 = require("./nodes/code-block");
var decision_list_1 = require("./nodes/decision-list");
var heading_1 = require("./nodes/heading");
var media_group_1 = require("./nodes/media-group");
var ordered_list_1 = require("./nodes/ordered-list");
var panel_1 = require("./nodes/panel");
var paragraph_1 = require("./nodes/paragraph");
var rule_1 = require("./nodes/rule");
var table_1 = require("./nodes/table");
var task_list_1 = require("./nodes/task-list");
var Document = /** @class */ (function () {
    function Document(attrs) {
        if (attrs === void 0) { attrs = { version: 1 }; }
        this.attrs = attrs;
        this.content = new nodes_1.ContentNode('doc');
    }
    Document.prototype.applicationCard = function (title, text) {
        return this.content.add(new application_card_1.ApplicationCard(title, text));
    };
    Document.prototype.blockQuote = function () {
        return this.content.add(new block_quote_1.BlockQuote());
    };
    Document.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    Document.prototype.codeBlock = function (language) {
        return this.content.add(new code_block_1.CodeBlock(language));
    };
    Document.prototype.decisionList = function (localId) {
        return this.content.add(new decision_list_1.DecisionList(localId));
    };
    Document.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    Document.prototype.textHeading = function (level, text) {
        return this.content.add(new heading_1.Heading(level).text(text));
    };
    Document.prototype.mediaGroup = function () {
        return this.content.add(new media_group_1.MediaGroup());
    };
    Document.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    Document.prototype.panel = function (type) {
        return this.content.add(new panel_1.Panel(type));
    };
    Document.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    Document.prototype.rule = function () {
        this.content.add(new rule_1.Rule());
        return this;
    };
    Document.prototype.table = function () {
        return this.content.add(new table_1.Table());
    };
    Document.prototype.taskList = function (localId) {
        return this.content.add(new task_list_1.TaskList(localId));
    };
    Document.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { version: this.attrs.version });
    };
    Document.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.js.map