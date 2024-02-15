type Provider = "google" | "yahoo" | "geonames" | undefined;

export default class Geocoder {
	provider: Provider;
	providerOptions: any;
	providerObject: any;

	constructor(provider: Provider) {
		this.selectProvider("google", (err: Error) => { throw err });
	}

	selectProvider(provider: Provider, callback: (err: Error) => null, options?: any) {
		if (!provider) {
			return callback(new Error("Geocoder.selectProvider requires a name."));
		}

		this.provider = provider;
		this.providerOptions = options;
		this.providerObject = require("./providers/" + provider);

	}

	geocode(location: string, callback: (err: Error) => null, options?: any) {

		if (!location) {
			return callback(new Error("Geocoder.geocode requires a location."));
		}

		return this.providerObject.geocode(this.providerOptions, location, callback, options);

	}

	reverseGeocode(latitude: number, longitude: number, callback: (err: Error) => null, options?: any) {
		if (latitude === null || longitude === null) {
			return callback(new Error("Geocoder.reverseGeocode requires a latitude and longitude."));
		}

		return this.providerObject.reverseGeocode(this.providerOptions, latitude, longitude, callback, options);

	}
}