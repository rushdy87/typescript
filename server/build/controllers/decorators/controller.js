"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var Metadatakeys_1 = require("./Metadatakeys");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.method, target.prototype, key);
            if (path) {
                router[method]("".concat(routePrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
