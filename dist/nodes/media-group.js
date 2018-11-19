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
var media_1 = require("./media");
var MediaGroup = /** @class */ (function (_super) {
    __extends(MediaGroup, _super);
    function MediaGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('mediaGroup');
        return _this;
    }
    MediaGroup.prototype.media = function (attrs) {
        this.content.add(new media_1.Media(attrs));
        return this;
    };
    MediaGroup.prototype.link = function (id, collection) {
        this.content.add(new media_1.Media({ id: id, collection: collection, type: 'link' }));
        return this;
    };
    MediaGroup.prototype.file = function (id, collection) {
        this.content.add(new media_1.Media({ id: id, collection: collection, type: 'file' }));
        return this;
    };
    MediaGroup.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return MediaGroup;
}(index_1.TopLevelNode));
exports.MediaGroup = MediaGroup;
//# sourceMappingURL=media-group.js.map