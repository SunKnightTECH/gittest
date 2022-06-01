"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const undici_1 = require("undici");
const request_1 = __importDefault(require("request"));
var myrequest;
(function (myrequest) {
    myrequest.undicirequest = {
        getrequest: function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                const { statusCode, headers, trailers, body } = yield (0, undici_1.request)(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                    },
                });
                return yield body.json();
            });
        },
        getrequestnoparse: function (url) {
            var e_1, _a;
            return __awaiter(this, void 0, void 0, function* () {
                const { statusCode, headers, trailers, body } = yield (0, undici_1.request)(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                    },
                });
                let str = '';
                try {
                    for (var body_1 = __asyncValues(body), body_1_1; body_1_1 = yield body_1.next(), !body_1_1.done;) {
                        const data = body_1_1.value;
                        str += yield data.toString();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (body_1_1 && !body_1_1.done && (_a = body_1.return)) yield _a.call(body_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return str;
            });
        },
        postrequest: function (url, data) {
            return __awaiter(this, void 0, void 0, function* () {
                const { statusCode, headers, trailers, body } = yield (0, undici_1.request)(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                    },
                    body: data
                });
                return yield body.json();
            });
        },
        putrequest: function (url, data) {
            return __awaiter(this, void 0, void 0, function* () {
                const { statusCode, headers, trailers, body } = yield (0, undici_1.request)(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                    },
                    body: data
                });
                return yield body.json();
            });
        },
        deleterequest: function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                const { statusCode, headers, trailers, body } = yield (0, undici_1.request)(url, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                    }
                });
                return yield body.json();
            });
        },
    };
    myrequest.asyncrequest = {
        getrequest: function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    try {
                        (0, request_1.default)({
                            url: url,
                            headers: {
                                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                            },
                            method: 'GET',
                        }, function (error, response, body) {
                            if (!error && response.statusCode == 200) {
                                if (typeof body == 'string') {
                                    body = JSON.parse(body);
                                }
                                resolve(body);
                            }
                            else {
                                reject(error);
                            }
                        });
                    }
                    catch (ex) {
                        reject(ex);
                    }
                });
            });
        },
        getrequestnoparse: function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    try {
                        (0, request_1.default)({
                            url: url,
                            headers: {
                                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                            },
                            method: 'GET',
                        }, function (error, response, body) {
                            if (!error && response.statusCode == 200) {
                                resolve(body);
                            }
                            else {
                                reject(error);
                            }
                        });
                    }
                    catch (ex) {
                        reject(ex);
                    }
                });
            });
        },
        postrequest: function (url, data) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    try {
                        (0, request_1.default)({
                            url: url,
                            headers: {
                                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                            },
                            method: 'POST',
                            json: true,
                            body: data
                        }, function (error, response, body) {
                            if (!error && response.statusCode == 200) {
                                if (typeof body == 'string') {
                                    body = JSON.parse(body);
                                }
                                resolve(body);
                            }
                            else {
                                reject(error);
                            }
                        });
                    }
                    catch (ex) {
                        reject(ex);
                    }
                });
            });
        }
    };
})(myrequest || (myrequest = {}));
exports.default = myrequest;
//# sourceMappingURL=myrequest.js.map