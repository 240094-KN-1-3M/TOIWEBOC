import fetch from "node-fetch";

const routeHello = (req, res) => "Hello World!";

const routeAPINames = async (req, res) => {
    const url = "https://template-builder.net/test-data/json-files/10kb.json";
    let data = [];
    try {
        const response = await fetch(url);
        // @ts-ignore
        data = await response.json();
    } catch (err) {
        return err;
    }

    let names = []
    // Вивести інформацію: name, phoneNumber, email, address, userAgent,hexcolor.
    // @ts-ignore
    names = data
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

export { routeHello, routeAPINames };
