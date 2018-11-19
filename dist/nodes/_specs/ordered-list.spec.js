"use strict";
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
var index_1 = require("../../index");
var _chai_1 = require("../../_chai");
describe('Ordered List', function () {
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
    it('should not allow empty ordered lists', function () {
        var doc = new index_1.Document();
        doc.orderedList();
        chai_1.expect(function () { return doc.toJSON(); }).to.throw();
    });
    describe('item', function () {
        it('should not allow empty items', function () {
            var doc = new index_1.Document();
            doc.orderedList().item();
            chai_1.expect(function () { return doc.toJSON(); }).to.throw();
        });
        it('should create a valid ordered list with a single entry', function () {
            var doc = new index_1.Document();
            var list = doc.orderedList();
            list.item().paragraph().text('item');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(list.toJSON()).to.deep.equal({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'item',
                                        type: 'text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
        it('should create a valid ordered list with multiple entries', function () {
            var doc = new index_1.Document();
            var list = doc.orderedList();
            list.item().paragraph().text('item1');
            list.item().paragraph().text('item2');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(list.toJSON()).to.deep.equal({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'item1',
                                        type: 'text'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'item2',
                                        type: 'text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
        it('should create a nested bullet list', function () {
            var doc = new index_1.Document();
            var list = doc.orderedList();
            var item = list.item();
            item.paragraph().text('line 1');
            item.bulletList().item().paragraph().text('nested');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(list.toJSON()).to.deep.equal({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [{ type: 'text', text: 'line 1' }]
                            },
                            {
                                type: 'bulletList',
                                content: [
                                    {
                                        type: 'listItem',
                                        content: [
                                            {
                                                type: 'paragraph',
                                                content: [{ type: 'text', text: 'nested' }]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
        it('should create a nested ordered list', function () {
            var doc = new index_1.Document();
            var list = doc.orderedList();
            var item = list.item();
            item.paragraph().text('line 1');
            item.orderedList().item().paragraph().text('nested');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(list.toJSON()).to.deep.equal({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [{ type: 'text', text: 'line 1' }]
                            },
                            {
                                type: 'orderedList',
                                content: [
                                    {
                                        type: 'listItem',
                                        content: [
                                            {
                                                type: 'paragraph',
                                                content: [{ type: 'text', text: 'nested' }]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
    });
    describe('textItem', function () {
        it('should create a valid ordered list with multiple entries', function () {
            var doc = new index_1.Document();
            var list = doc.orderedList();
            list
                .textItem('item1')
                .textItem('item2');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(list.toJSON()).to.deep.equal({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'item1',
                                        type: 'text'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'item2',
                                        type: 'text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
    });
    describe('linkItem', function () {
        it('should create a valid ordered list with multiple entries', function () {
            var doc = new index_1.Document();
            var list = doc.orderedList();
            list
                .linkItem('Link 1', 'https://example.com/1')
                .linkItem('Link 2', 'https://example.com/2');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(list.toJSON()).to.deep.equal({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'Link 1',
                                        type: 'text',
                                        marks: [
                                            {
                                                attrs: {
                                                    href: 'https://example.com/1'
                                                },
                                                type: 'link'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: [
                                    {
                                        text: 'Link 2',
                                        type: 'text',
                                        marks: [
                                            {
                                                attrs: {
                                                    href: 'https://example.com/2'
                                                },
                                                type: 'link'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
    });
});
//# sourceMappingURL=ordered-list.spec.js.map