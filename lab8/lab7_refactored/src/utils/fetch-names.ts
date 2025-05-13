type responseItemType = {
    name: string;
    phoneNumber: string;
};
export const fetchNames = async () => {
    const url = "https://template-builder.net/test-data/json-files/1kb.json";
    let data: responseItemType[] | [] = [];
    let names: responseItemType[] | [];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        names = [];
    }
    names = data.map((item) => {
        return {
            name: item.name, phoneNumber:
                item.phoneNumber
        }
    });
    return names;
};
