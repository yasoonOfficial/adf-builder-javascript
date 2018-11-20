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
var MediaSingle = /** @class */ (function (_super) {
    __extends(MediaSingle, _super);
    function MediaSingle(layout) {
        var _this = _super.call(this) || this;
        //private layout: MediaSingleLayout;
        _this.content = new index_1.ContentNode('mediaGroup');
        return _this;
        //this.layout = layout || 'wrap-right';
    }
    MediaSingle.prototype.file = function (attr) {
        this.content.add(new media_1.Media(attr));
        return this;
    };
    MediaSingle.prototype.external = function (attr) {
        this.content.add(new media_1.Media(attr));
        return this;
    };
    MediaSingle.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return MediaSingle;
}(index_1.TopLevelNode));
exports.MediaSingle = MediaSingle;
//# sourceMappingURL=media-single.js.map