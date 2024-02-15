var version = '0.2.3';

type Provider = "google" | "yahoo" | "geonames";

export default class Geocoder {
	provider: Provider;
	providerOptions: any;
	providerObject: any;

	constructor(provider: Provider) {
		this.selectProvider("google", (err) => { throw err });
	}

	selectProvider(provider: Provider, callback, options?) {
		if (!provider) {
			return callback(new Error("Geocoder.selectProvider requires a name."));
		}

		this.provider = provider;
		this.providerOptions = options;
		this.providerObject = require("./providers/" + provider);

	}

	geocode(location: string, callback, options) {

		if (!location) {
			return callback(new Error("Geocoder.geocode requires a location."));
		}

		return this.providerObject.geocode(this.providerOptions, location, callback, options);

	}

	reverseGeocode(latitude: number, longitude: number, callback, options) {
		if (latitude === null || longitude === null) {
			return callback(new Error("Geocoder.reverseGeocode requires a latitude and longitude."));
		}

		return this.providerObject.reverseGeocode(this.providerOptions, latitude, longitude, callback, options);

	}
}

/**
 * Export
 */


