import fetch from "node-fetch";

const routeHello = (): string => "Hello World!";

const routeAPINames = async (): Promise<string> => {
    const url = "https://template-builder.net/test-data/json-files/10kb.json";
    let data = [];
    try {
        const response = await fetch(url);
        // @ts-ignore
        data = (await response.json()) as responseItemType[];
    } catch (err) {
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
             </p>`
        })
        .join("<br>");

    return names;
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface):
    WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};

export { routeHello, routeAPINames, routeWeather };
