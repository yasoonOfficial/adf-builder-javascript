"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
var _chai_1 = require("../_chai");
describe('Template Tag', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.timeout(5000);
                        _a = chai_1.use;
                        return [4 /*yield*/, _chai_1.adfValidator()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should support simple strings', function () {
        var doc = index_1.document(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Hello"], ["Hello"])));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Hello'
                        }
                    ]
                }
            ]
        });
    });
    it('should support simple template variables', function () {
        var doc = index_1.document(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Result: ", ""], ["Result: ", ""])), 1 + 1);
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Result: '
                        },
                        {
                            type: 'text',
                            text: '2'
                        }
                    ]
                }
            ]
        });
    });
    it('should support strike style nodes', function () {
        var doc = index_1.document(templateObject_3 || (templateObject_3 = __makeTemplateObject(["A ", " statement"], ["A ", " statement"])), index_1.strike('strike'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            type: 'text',
                            text: 'strike',
                            marks: [
                                {
                                    type: 'strike'
                                }
                            ]
                        },
                        {
                            type: 'text',
                            text: ' statement'
                        },
                    ]
                }
            ]
        });
    });
    it('should support strong style nodes', function () {
        var doc = index_1.document(templateObject_4 || (templateObject_4 = __makeTemplateObject(["A ", " statement"], ["A ", " statement"])), index_1.strong('strong'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            type: 'text',
                            text: 'strong',
                            marks: [
                                {
                                    type: 'strong'
                                }
                            ]
                        },
                        {
                            type: 'text',
                            text: ' statement'
                        },
                    ]
                }
            ]
        });
    });
    it('should support em style nodes', function () {
        var doc = index_1.document(templateObject_5 || (templateObject_5 = __makeTemplateObject(["A ", " statement"], ["A ", " statement"])), index_1.em('emphasized'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            type: 'text',
                            text: 'emphasized',
                            marks: [
                                {
                                    type: 'em'
                                }
                            ]
                        },
                        {
                            type: 'text',
                            text: ' statement'
                        },
                    ]
                }
            ]
        });
    });
    it('should support code style nodes', function () {
        var doc = index_1.document(templateObject_6 || (templateObject_6 = __makeTemplateObject(["A ", " statement"], ["A ", " statement"])), index_1.code('code'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            type: 'text',
                            text: 'code',
                            marks: [
                                {
                                    type: 'code'
                                }
                            ]
                        },
                        {
                            type: 'text',
                            text: ' statement'
                        },
                    ]
                }
            ]
        });
    });
    it('should support link style nodes', function () {
        var doc = index_1.document(templateObject_7 || (templateObject_7 = __makeTemplateObject(["A ", " statement"], ["A ", " statement"])), index_1.link('linked', 'https://example.com'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            type: 'text',
                            text: 'linked',
                            marks: [
                                {
                                    type: 'link',
                                    attrs: {
                                        href: 'https://example.com'
                                    }
                                }
                            ]
                        },
                        {
                            type: 'text',
                            text: ' statement'
                        },
                    ]
                }
            ]
        });
    });
    it('should support mention nodes', function () {
        var doc = index_1.document(templateObject_8 || (templateObject_8 = __makeTemplateObject(["A ", ""], ["A ", ""])), index_1.mention('123', 'name'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            attrs: {
                                id: '123',
                                text: 'name'
                            },
                            type: 'mention'
                        }
                    ]
                }
            ]
        });
    });
    it('should support emoji nodes', function () {
        var doc = index_1.document(templateObject_9 || (templateObject_9 = __makeTemplateObject(["A ", ""], ["A ", ""])), index_1.emoji('smile'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            attrs: {
                                shortName: 'smile',
                            },
                            type: 'emoji'
                        }
                    ]
                }
            ]
        });
    });
    it('should support multiple style nodes', function () {
        var doc = index_1.document(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Hi ", ".\n    This is a ", ".\n    It also contains ", ".\n    Other replacements work, too: ", ""], ["Hi ", ".\n    This is a ", ".\n    It also contains ", ".\n    Other replacements work, too: ", ""])), index_1.mention('123', 'there'), index_1.strong('strong text'), index_1.link('a link', 'http://example.com'), 5);
        chai_1.expect(doc).to.be.validADF();
    });
    it('should support skip empty string substitutions', function () {
        var a = '';
        var doc = index_1.document(templateObject_11 || (templateObject_11 = __makeTemplateObject(["A ", " variable"], ["A ", " variable"])), a);
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'A '
                        },
                        {
                            type: 'text',
                            text: ' variable'
                        },
                    ]
                }
            ]
        });
    });
    it('should not allow top-level nodes', function () {
        var doc = function () { return index_1.document(templateObject_12 || (templateObject_12 = __makeTemplateObject(["A card: ", ""], ["A card: ", ""])), new index_1.ApplicationCard('title')); };
        chai_1.expect(doc).to.throw();
    });
    it('should handle empty strings', function () {
        var doc = index_1.document(templateObject_13 || (templateObject_13 = __makeTemplateObject([""], [""])));
        chai_1.expect(function () { return doc.toJSON(); }).to.throw();
    });
    it('should handle substitutions at the beginning', function () {
        var doc = index_1.document(templateObject_14 || (templateObject_14 = __makeTemplateObject(["", " A"], ["", " A"])), index_1.emoji('smile'));
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(doc.toJSON()).to.deep.equal({
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            attrs: {
                                shortName: 'smile',
                            },
                            type: 'emoji'
                        },
                        {
                            type: 'text',
                            text: ' A'
                        }
                    ]
                }
            ]
        });
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=tag.spec.js.map