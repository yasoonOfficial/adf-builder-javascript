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
var application_card_1 = require("./application-card");
var block_quote_1 = require("./block-quote");
var bullet_list_1 = require("./bullet-list");
var code_block_1 = require("./code-block");
var decision_list_1 = require("./decision-list");
var heading_1 = require("./heading");
var index_1 = require("./index");
var media_group_1 = require("./media-group");
var ordered_list_1 = require("./ordered-list");
var panel_1 = require("./panel");
var paragraph_1 = require("./paragraph");
var rule_1 = require("./rule");
var task_list_1 = require("./task-list");
var colorPattern = /^#[0-9a-f]{6}$/;
var TableHeader = /** @class */ (function () {
    function TableHeader(backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.content = new index_1.ContentNode('tableHeader');
        if (backgroundColor) {
            if (!colorPattern.test(backgroundColor)) {
                throw new Error("Color " + backgroundColor + " does not match ^#[0-9a-f]{6}$");
            }
        }
    }
    TableHeader.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    TableHeader.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    TableHeader.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    TableHeader.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    TableHeader.prototype.panel = function (panelType) {
        return this.content.add(new panel_1.Panel(panelType));
    };
    TableHeader.prototype.blockQuote = function () {
        return this.content.add(new block_quote_1.BlockQuote());
    };
    TableHeader.prototype.rule = function () {
        return this.content.add(new rule_1.Rule());
    };
    TableHeader.prototype.mediaGroup = function () {
        return this.content.add(new media_group_1.MediaGroup());
    };
    TableHeader.prototype.applicationCard = function (title, text) {
        return this.content.add(new application_card_1.ApplicationCard(title, text));
    };
    TableHeader.prototype.decisionList = function (localId) {
        return this.content.add(new decision_list_1.DecisionList(localId));
    };
    TableHeader.prototype.taskList = function (localId) {
        return this.content.add(new task_list_1.TaskList(localId));
    };
    TableHeader.prototype.codeBlock = function (language) {
        return this.content.add(new code_block_1.CodeBlock(language));
    };
    TableHeader.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                background: this.backgroundColor
            } });
    };
    return TableHeader;
}());
exports.TableHeader = TableHeader;
//# sourceMappingURL=table-header.js.map