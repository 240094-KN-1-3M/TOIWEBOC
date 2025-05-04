type responseItemType = {
    id: string;
    name: string;
    phoneNumber: string; email: string; address: string; userAgent: string; hexcolor: string;
};
type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};
interface WeatherQueryInterface {
    zipcode: string;
}
