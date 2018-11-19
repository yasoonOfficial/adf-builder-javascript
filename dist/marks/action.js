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
var mark_1 = require("./mark");
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(title, target, actionParameters) {
        var _this = _super.call(this, 'action') || this;
        _this.title = title;
        _this.target = target;
        _this.actionParameters = actionParameters;
        return _this;
    }
    Action.prototype.toJSON = function () {
        var actionMark = {
            type: this.type,
            attrs: {
                title: this.title,
                target: this.target
            }
        };
        if (this.actionParameters) {
            actionMark.attrs.parameters = this.actionParameters;
        }
        return actionMark;
    };
    return Action;
}(mark_1.Mark));
exports.Action = Action;
//# sourceMappingURL=action.js.map