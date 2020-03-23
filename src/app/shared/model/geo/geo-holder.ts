export class GeoHolder {
    constructor(public ip: String, public continent_code: String, public continent_name: String,
        public country_code: String, public country_name: String, public region_code: String, public region_name: String,
        public city: String, public zip: String, public latitude: number, public longitude: number) {}
      /**
     * Model-adapter pattern to efficiently map the API output to the model
     * @param item Any type
     * @returns Article object
     */
    static adapt(item: any): GeoHolder {
        return new GeoHolder(item.ip, item.continent_code, item.continent_name, item.country_code,
            item.country_name, item.region_code, item.region_name, item.city, item.zip, item.latitude, item.longitude);
    }
}
