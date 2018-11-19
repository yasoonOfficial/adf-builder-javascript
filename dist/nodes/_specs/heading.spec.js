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
var heading_1 = require("../heading");
describe('Heading', function () {
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
    it('should not allow empty headings', function () {
        var head = new heading_1.Heading(1);
        chai_1.expect(function () { return head.toJSON(); }).to.throw();
    });
    it('should not allow headings smaller than 1', function () {
        chai_1.expect(function () { return new heading_1.Heading(0); }).to.throw();
    });
    it('should not allow headings greater than 6', function () {
        chai_1.expect(function () { return new heading_1.Heading(7); }).to.throw();
    });
    it('should allow headings from 1-6', function () {
        chai_1.expect(function () { return [1, 2, 3, 4, 5, 6].map(function (i) { return new heading_1.Heading(i); }); }).to.not.throw();
    });
    it('should create a valid heading with text', function () {
        var doc = new index_1.Document();
        var head = doc.heading(1).text('Title');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(head.toJSON()).to.deep.equal({
            type: 'heading',
            attrs: {
                level: 1
            },
            content: [
                {
                    type: 'text',
                    text: 'Title'
                }
            ]
        });
    });
    it('should create a valid heading with a link', function () {
        var doc = new index_1.Document();
        var head = doc.heading(1).link('Title', 'https://example.com');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(head.toJSON()).to.deep.equal({
            type: 'heading',
            attrs: {
                level: 1
            },
            content: [
                {
                    type: 'text',
                    text: 'Title',
                    marks: [
                        {
                            type: 'link',
                            attrs: {
                                href: 'https://example.com'
                            }
                        }
                    ]
                }
            ]
        });
    });
});
//# sourceMappingURL=heading.spec.js.map