"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version = '0.2.3';
class Geocoder {
    constructor(provider) {
        this.selectProvider("google", (err) => { throw err; });
    }
    selectProvider(provider, callback, options) {
        if (!provider) {
            return callback(new Error("Geocoder.selectProvider requires a name."));
        }
        this.provider = provider;
        this.providerOptions = options;
        this.providerObject = require("./providers/" + provider);
    }
    geocode(location, callback, options) {
        if (!location) {
            return callback(new Error("Geocoder.geocode requires a location."));
        }
        return this.providerObject.geocode(this.providerOptions, location, callback, options);
    }
    reverseGeocode(latitude, longitude, callback, options) {
        if (latitude === null || longitude === null) {
            return callback(new Error("Geocoder.reverseGeocode requires a latitude and longitude."));
        }
        return this.providerObject.reverseGeocode(this.providerOptions, latitude, longitude, callback, options);
    }
}
exports.default = Geocoder;
