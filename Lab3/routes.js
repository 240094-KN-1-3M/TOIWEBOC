var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
const routeHello = () => "Hello World!";
const routeAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://template-builder.net/test-data/json-files/10kb.json";
    let data = [];
    try {
        const response = yield fetch(url);
        // @ts-ignore
        data = (yield response.json());
    }
    catch (err) {
        return err;
    }
    // Вивести інформацію: name, phoneNumber, email, address, userAgent,hexcolor.
    const names = data
        .map((item) => {
        const { name, phoneNumber, email, address, userAgent, hexcolor } = item;
        return `
            <p>
                name: ${name},
                <br>
                phoneNumber: ${phoneNumber},
                <br>
                email: ${email},
                <br>
                address: ${address},
                <br>
                userAgent: ${userAgent},
                <br>
                hexcolor: ${hexcolor}
             </p>`;
    })
        .join("<br>");
    return names;
});
const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
export { routeHello, routeAPINames, routeWeather };
