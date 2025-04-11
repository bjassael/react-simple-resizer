"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disablePassive = void 0;
exports.disablePassive = true;
try {
    window.addEventListener('test', null, {
        get passive() {
            exports.disablePassive = { passive: false };
            return true;
        },
    });
}
catch (_a) { }
