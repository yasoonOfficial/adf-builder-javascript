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
var MediaSingle = /** @class */ (function (_super) {
    __extends(MediaSingle, _super);
    function MediaSingle(params) {
        var _this = _super.call(this) || this;
        _this.attrs = params;
        return _this;
    }
    MediaSingle.prototype.toJSON = function () {
        return {
            type: 'mediaSingle',
            attrs: {
                layout: this.attrs.layout || 'wrap-right'
            },
            content: [{
                    type: 'media',
                    attrs: {
                        height: this.attrs.height,
                        width: this.attrs.width,
                        type: this.attrs.type,
                        id: this.attrs.id,
                        collection: this.attrs.collection,
                        occurrenceKey: this.attrs.occurrenceKey
                    }
                }]
        };
    };
    return MediaSingle;
}(index_1.TopLevelNode));
exports.MediaSingle = MediaSingle;
//# sourceMappingURL=media-single.js.map