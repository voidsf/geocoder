type Provider = "google" | "yahoo" | "geonames" | undefined;
declare class Geocoder {
    provider: Provider;
    providerOptions: any;
    providerObject: any;
    constructor(provider: Provider);
    selectProvider(provider: Provider, callback: (err: Error) => null, options?: any): null | undefined;
    geocode(location: string, callback: (err: Error) => null, options?: any): any;
    reverseGeocode(latitude: number, longitude: number, callback: (err: Error) => null, options?: any): any;
}

export { Geocoder as default };
