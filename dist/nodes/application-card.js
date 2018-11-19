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
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.prototype.title = function (title) {
        this.actionTitle = title;
        return this;
    };
    Action.prototype.target = function (target) {
        if (!target.key) {
            throw new Error('Action target key is required');
        }
        this.actionTarget = target;
        return this;
    };
    Action.prototype.parameters = function (parameters) {
        this.actionParameters = parameters;
        return this;
    };
    Action.prototype.toJSON = function () {
        var action = {};
        if (this.actionTitle) {
            action.title = this.actionTitle;
        }
        if (this.actionTarget) {
            action.target = this.actionTarget;
        }
        if (this.actionParameters) {
            action.parameters = this.actionParameters;
        }
        if (Object.keys(action).length < 2) {
            throw new Error('Must set title and target attributes for action');
        }
        return action;
    };
    return Action;
}());
exports.Action = Action;
var Detail = /** @class */ (function () {
    function Detail() {
        this.detailUsers = [];
    }
    Detail.prototype.title = function (text) {
        this.detailTitle = text;
        return this;
    };
    Detail.prototype.text = function (text) {
        this.detailText = text;
        return this;
    };
    Detail.prototype.lozenge = function (lozenge) {
        this.detailLozenge = lozenge;
        return this;
    };
    Detail.prototype.icon = function (icon) {
        this.detailIcon = icon;
        return this;
    };
    Detail.prototype.badge = function (badge) {
        this.detailBadge = badge;
        return this;
    };
    Detail.prototype.user = function (user) {
        this.detailUsers.push(user);
        return this;
    };
    Detail.prototype.toJSON = function () {
        var detail = {};
        if (this.detailTitle) {
            detail.title = this.detailTitle;
        }
        if (this.detailText) {
            detail.text = this.detailText;
        }
        if (this.detailIcon) {
            detail.icon = this.detailIcon;
        }
        if (this.detailBadge) {
            detail.badge = this.detailBadge;
        }
        if (this.detailLozenge) {
            detail.lozenge = this.detailLozenge;
        }
        if (this.detailUsers.length > 0) {
            detail.users = this.detailUsers;
        }
        if (Object.keys(detail).length === 0) {
            throw new Error('Must at least set one attribute');
        }
        return detail;
    };
    return Detail;
}());
exports.Detail = Detail;
var Context = /** @class */ (function () {
    function Context(text) {
        this.text = text;
    }
    Context.prototype.icon = function (icon) {
        this.contextIcon = icon;
        return this;
    };
    Context.prototype.toJSON = function () {
        var context = {
            text: this.text
        };
        if (this.contextIcon) {
            context.icon = this.contextIcon;
        }
        return context;
    };
    return Context;
}());
exports.Context = Context;
var TitleUser = /** @class */ (function () {
    function TitleUser(titleUserIcon) {
        this.titleUserIcon = titleUserIcon;
    }
    TitleUser.prototype.id = function (id) {
        this.titleUserId = id;
        return this;
    };
    TitleUser.prototype.toJSON = function () {
        var titleUser = {
            icon: this.titleUserIcon
        };
        if (this.titleUserId) {
            titleUser.id = this.titleUserId;
        }
        return titleUser;
    };
    return TitleUser;
}());
exports.TitleUser = TitleUser;
var ApplicationCard = /** @class */ (function (_super) {
    __extends(ApplicationCard, _super);
    function ApplicationCard(title, text) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.text = text;
        _this.isCollapsible = false;
        _this.details = [];
        _this.actions = [];
        return _this;
    }
    ApplicationCard.prototype.link = function (url) {
        this.linkUrl = url;
        return this;
    };
    ApplicationCard.prototype.background = function (url) {
        this.backgroundUrl = url;
        return this;
    };
    ApplicationCard.prototype.preview = function (url) {
        this.previewUrl = url;
        return this;
    };
    ApplicationCard.prototype.collapsible = function (collapsible) {
        this.isCollapsible = collapsible;
        return this;
    };
    ApplicationCard.prototype.description = function (text) {
        this.descriptionText = text;
        return this;
    };
    ApplicationCard.prototype.titleUser = function (icon) {
        var titleUser = new TitleUser(icon);
        this.userInTitle = titleUser;
        return titleUser;
    };
    ApplicationCard.prototype.detail = function () {
        var detail = new Detail();
        this.details.push(detail);
        return detail;
    };
    ApplicationCard.prototype.action = function () {
        var action = new Action();
        this.actions.push(action);
        return action;
    };
    ApplicationCard.prototype.context = function (text) {
        this.cardContext = new Context(text);
        return this.cardContext;
    };
    ApplicationCard.prototype.toJSON = function () {
        var card = {
            type: 'applicationCard',
            attrs: {
                text: this.text || this.title,
                title: {
                    text: this.title
                },
                collapsible: this.isCollapsible
            }
        };
        if (this.linkUrl) {
            card.attrs.textUrl = this.linkUrl;
            card.attrs.link = {
                url: this.linkUrl
            };
        }
        if (this.backgroundUrl) {
            card.attrs.background = {
                url: this.backgroundUrl
            };
        }
        if (this.previewUrl) {
            card.attrs.preview = {
                url: this.previewUrl
            };
        }
        if (this.descriptionText) {
            card.attrs.description = {
                text: this.descriptionText
            };
        }
        if (this.userInTitle) {
            card.attrs.title.user = this.userInTitle.toJSON();
        }
        if (this.details.length > 0) {
            card.attrs.details = this.details.map(function (detail) { return detail.toJSON(); });
        }
        if (this.actions.length > 0) {
            card.attrs.actions = this.actions.map(function (action) { return action.toJSON(); });
        }
        if (this.cardContext) {
            card.attrs.context = this.cardContext.toJSON();
        }
        return card;
    };
    return ApplicationCard;
}(index_1.TopLevelNode));
exports.ApplicationCard = ApplicationCard;
//# sourceMappingURL=application-card.js.map