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
describe('Application Card', function () {
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
    it('should set default text attribute to title', function () {
        var doc = new index_1.Document();
        var card = doc.applicationCard('Title');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: false,
                text: 'Title',
                title: {
                    text: 'Title'
                }
            }
        });
    });
    it('should allow to override the default text attribute', function () {
        var doc = new index_1.Document();
        var card = doc.applicationCard('Title', 'Other text');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: false,
                text: 'Other text',
                title: {
                    text: 'Title'
                }
            }
        });
    });
    it('should set the background image', function () {
        var doc = new index_1.Document();
        var card = doc
            .applicationCard('Title')
            .background('https://example.org/bg.png');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: false,
                text: 'Title',
                title: {
                    text: 'Title'
                },
                background: {
                    url: 'https://example.org/bg.png'
                }
            }
        });
    });
    it('should set the collapsible flag', function () {
        var doc = new index_1.Document();
        var card = doc
            .applicationCard('Title')
            .collapsible(true);
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: true,
                text: 'Title',
                title: {
                    text: 'Title'
                }
            }
        });
    });
    it('should set the description', function () {
        var doc = new index_1.Document();
        var card = doc
            .applicationCard('Title')
            .description('Some description');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: false,
                text: 'Title',
                title: {
                    text: 'Title'
                },
                description: {
                    text: 'Some description'
                }
            }
        });
    });
    it('should set the link attributes', function () {
        var doc = new index_1.Document();
        var card = doc
            .applicationCard('Title')
            .link('https://example.com/target');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: false,
                text: 'Title',
                textUrl: 'https://example.com/target',
                title: {
                    text: 'Title'
                },
                link: {
                    url: 'https://example.com/target'
                }
            }
        });
    });
    it('should set the preview url', function () {
        var doc = new index_1.Document();
        var card = doc
            .applicationCard('Title')
            .preview('https://example.com/preview');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(card.toJSON()).to.deep.equal({
            type: 'applicationCard',
            attrs: {
                collapsible: false,
                text: 'Title',
                title: {
                    text: 'Title'
                },
                preview: {
                    url: 'https://example.com/preview'
                }
            }
        });
    });
    describe('actions', function () {
        it('should never be empty', function () {
            var doc = new index_1.Document();
            doc.applicationCard('Title').action();
            chai_1.expect(function () { return doc.toJSON(); }).to.throw();
        });
        it('should set the title and target attributes', function () {
            var doc = new index_1.Document();
            var action = doc.applicationCard('Title').action();
            action.title('Action');
            action.target({
                receiver: 'app',
                key: 'test'
            });
            action.parameters({
                test: 100
            });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(action.toJSON()).to.deep.equal({
                title: 'Action',
                target: {
                    receiver: 'app',
                    key: 'test'
                },
                parameters: {
                    test: 100
                }
            });
        });
        it('should fail when target is missing', function () {
            var doc = new index_1.Document();
            var action = doc.applicationCard('Title').action();
            action.title('Action');
            chai_1.expect(doc).to.not.be.validADF();
            chai_1.expect(function () { return doc.toJSON(); }).to.throw();
        });
        it('should fail when target key is missing', function () {
            var doc = new index_1.Document();
            var action = doc.applicationCard('Title').action();
            action.title('Action');
            // @ts-ignore
            chai_1.expect(function () { return action.target({
                receiver: 'app'
            }); }).to.throw();
        });
        it('should fail when title is missing', function () {
            var doc = new index_1.Document();
            var action = doc.applicationCard('Title').action();
            action.target({
                key: 'test'
            });
            chai_1.expect(doc).to.not.be.validADF();
            chai_1.expect(function () { return doc.toJSON(); }).to.throw();
        });
    });
    describe('details', function () {
        it('should never be empty', function () {
            var doc = new index_1.Document();
            doc.applicationCard('Title').detail();
            chai_1.expect(function () { return doc.toJSON(); }).to.throw();
        });
        it('should set the title attribute', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.title('Detail');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                title: 'Detail'
            });
        });
        it('should set the text attribute', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.text('Detail');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                text: 'Detail'
            });
        });
        it('should set the badge value', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.badge({ value: 1 });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                badge: {
                    value: 1
                }
            });
        });
        it('should set the badge appearance', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.badge({ value: 1, appearance: 'primary' });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                badge: {
                    value: 1,
                    appearance: 'primary'
                }
            });
        });
        it('should set the badge max', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.badge({ value: 1, appearance: 'primary', max: 10 });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                badge: {
                    value: 1,
                    appearance: 'primary',
                    max: 10
                }
            });
        });
        it('should set the badge max', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.badge({ value: 1, appearance: 'primary', max: 10 });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                badge: {
                    value: 1,
                    appearance: 'primary',
                    max: 10
                }
            });
        });
        it('should set the icon', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.icon({ url: 'https://example.com/icon.png', label: 'Icon' });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                icon: {
                    url: 'https://example.com/icon.png',
                    label: 'Icon'
                }
            });
        });
        it('should set the lozenge text attribute', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.lozenge({ text: 'Loz' });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                lozenge: {
                    text: 'Loz'
                }
            });
        });
        it('should set the lozenge appearance attribute', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.lozenge({ text: 'Loz', appearance: 'new' });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                lozenge: {
                    text: 'Loz',
                    appearance: 'new'
                }
            });
        });
        it('should set the lozenge bold attribute', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.lozenge({ text: 'Loz', appearance: 'new', bold: true });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                lozenge: {
                    text: 'Loz',
                    appearance: 'new',
                    bold: true
                }
            });
        });
        it('should set the user attribute for a single user', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.user({
                icon: { url: 'https://example.com/user.png', label: 'user' },
                id: '123'
            });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                users: [
                    {
                        icon: { url: 'https://example.com/user.png', label: 'user' },
                        id: '123'
                    }
                ]
            });
        });
        it('should set the user attribute for multiple users', function () {
            var doc = new index_1.Document();
            var detail = doc.applicationCard('Title').detail();
            detail.user({
                icon: { url: 'https://example.com/user1.png', label: 'user1' },
                id: '123'
            });
            detail.user({
                icon: { url: 'https://example.com/user2.png', label: 'user2' },
                id: '124'
            });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(detail.toJSON()).to.deep.equal({
                users: [
                    {
                        icon: { url: 'https://example.com/user1.png', label: 'user1' },
                        id: '123'
                    },
                    {
                        icon: { url: 'https://example.com/user2.png', label: 'user2' },
                        id: '124'
                    }
                ]
            });
        });
    });
    describe('context', function () {
        it('should set the text attribute', function () {
            var doc = new index_1.Document();
            var context = doc.applicationCard('Title').context('Context');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(context.toJSON()).to.deep.equal({
                text: 'Context'
            });
        });
        it('should set the icon', function () {
            var doc = new index_1.Document();
            var context = doc.applicationCard('Title').context('Context');
            context.icon({ url: 'https://example.com/icon.png', label: 'Icon' });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(context.toJSON()).to.deep.equal({
                text: 'Context',
                icon: {
                    url: 'https://example.com/icon.png',
                    label: 'Icon'
                }
            });
        });
    });
    describe('title user', function () {
        it('should set the title user without id', function () {
            var doc = new index_1.Document();
            var card = doc.applicationCard('Title');
            card.titleUser({ url: 'https://example.com/icon.png', label: 'Icon' });
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(card.toJSON()).to.deep.equal({
                type: 'applicationCard',
                attrs: {
                    collapsible: false,
                    text: 'Title',
                    title: {
                        text: 'Title',
                        user: {
                            icon: {
                                url: 'https://example.com/icon.png',
                                label: 'Icon'
                            }
                        }
                    }
                }
            });
        });
        it('should set the title user with id', function () {
            var doc = new index_1.Document();
            var card = doc.applicationCard('Title');
            card.titleUser({ url: 'https://example.com/icon.png', label: 'Icon' })
                .id('abc');
            chai_1.expect(doc).to.be.validADF();
            chai_1.expect(card.toJSON()).to.deep.equal({
                type: 'applicationCard',
                attrs: {
                    collapsible: false,
                    text: 'Title',
                    title: {
                        text: 'Title',
                        user: {
                            icon: {
                                url: 'https://example.com/icon.png',
                                label: 'Icon'
                            },
                            id: 'abc'
                        }
                    }
                }
            });
        });
    });
});
//# sourceMappingURL=application-card.spec.js.map