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
        return media;
    };
    return Media;
}());
exports.Media = Media;
//# sourceMappingURL=media.js.map