import type { NextApiRequest, NextApiResponse } from "next";
type responseItemType = {
    name: string;
    phoneNumber: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<responseItemType[]> | void> {
    const url = "https://template-builder.net/test-data/json-files/1kb.json";
    let data;
    try {

        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return res.status(500);
    }
    const names = data.map((item) => {
        return { name: item.name, phoneNumber: item.phoneNumber };
    });
    return res.status(200).json(names);
}
