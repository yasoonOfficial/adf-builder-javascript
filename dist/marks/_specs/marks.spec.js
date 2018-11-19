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
var _1 = require("../");
var index_1 = require("../../index");
var _chai_1 = require("../../_chai");
describe('Marks', function () {
    function docFromMark(mark) {
        var doc = new index_1.Document();
        doc.paragraph().text('any', mark);
        return doc;
    }
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
    it('should reject empty marks', function () {
        chai_1.expect(function () { return _1.marks().toJSON(); }).to.throw();
    });
    it('should reject duplicate marks', function () {
        chai_1.expect(function () { return _1.marks().strong().strong(); }).to.throw();
    });
    describe('code', function () {
        it('should create a valid code mark', function () {
            var m = _1.marks().code();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'code'
                }]);
        });
    });
    describe('em', function () {
        it('should create a valid em mark', function () {
            var m = _1.marks().em();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'em'
                }]);
        });
    });
    describe('link', function () {
        it('should create a valid link mark', function () {
            var m = _1.marks().link('https://example.com');
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'link',
                    attrs: {
                        href: 'https://example.com'
                    }
                }]);
        });
        it('should support an optional title', function () {
            var m = _1.marks().link('https://example.com', 'Title');
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'link',
                    attrs: {
                        href: 'https://example.com',
                        title: 'Title'
                    }
                }]);
        });
    });
    describe('strike', function () {
        it('should create a valid strike mark', function () {
            var m = _1.marks().strike();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'strike'
                }]);
        });
    });
    describe('strong', function () {
        it('should create a valid strong mark', function () {
            var m = _1.marks().strong();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'strong'
                }]);
        });
    });
    describe('subsup', function () {
        it('should create a valid sub mark', function () {
            var m = _1.marks().sub();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'subsup',
                    attrs: {
                        type: 'sub'
                    }
                }]);
        });
        it('should create a valid sup mark', function () {
            var m = _1.marks().sup();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'subsup',
                    attrs: {
                        type: 'sup'
                    }
                }]);
        });
    });
    describe('textColor', function () {
        it('should create a valid color mark', function () {
            var m = _1.marks().color('#f0f0f0');
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'textColor',
                    attrs: {
                        color: '#f0f0f0'
                    }
                }]);
        });
        it('should reject invalid color patterns', function () {
            chai_1.expect(function () { return _1.marks().color('f0f0f0'); }).to.throw();
        });
    });
    describe('underline', function () {
        it('should create a valid underline mark', function () {
            var m = _1.marks().underline();
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'underline'
                }]);
        });
    });
    describe('action', function () {
        it('should create a valid action mark', function () {
            var m = _1.marks().action('Title', { key: 'key' });
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'action',
                    attrs: {
                        title: 'Title',
                        target: {
                            key: 'key'
                        }
                    }
                }]);
        });
        it('should create a valid action mark with receiver', function () {
            var m = _1.marks().action('Title', { key: 'key', receiver: 'app' });
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'action',
                    attrs: {
                        title: 'Title',
                        target: {
                            key: 'key',
                            receiver: 'app'
                        }
                    }
                }]);
        });
        it('should create a valid action mark with parameters', function () {
            var m = _1.marks().action('Title', { key: 'key' }, { key1: 'value1', key2: 'value2' });
            chai_1.expect(docFromMark(m)).to.be.validADF();
            chai_1.expect(m.toJSON()).to.deep.equal([{
                    type: 'action',
                    attrs: {
                        title: 'Title',
                        target: {
                            key: 'key'
                        },
                        parameters: {
                            key1: 'value1',
                            key2: 'value2'
                        }
                    }
                }]);
        });
    });
});
//# sourceMappingURL=marks.spec.js.map