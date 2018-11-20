"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Media = /** @class */ (function () {
    function Media(attrs) {
        this.attrs = attrs;
    }
    Media.prototype.toJSON = function () {
        var media = {
            type: 'media',
            attrs: {
                id: this.attrs.id,
                type: this.attrs.type,
                collection: this.attrs.collection
            }
        };
        if (this.attrs.occurrenceKey) {
            media.attrs.occurrenceKey = this.attrs.occurrenceKey;
        }
        if (this.attrs.url) {
            media.attrs.url = this.attrs.url;
        }
        if (this.attrs.width) {
            media.attrs.width = this.attrs.width;
        }
        if (this.attrs.height) {
            media.attrs.height = this.attrs.height;
        }
        return media;
    };
    return Media;
}());
exports.Media = Media;
//# sourceMappingURL=media.js.map