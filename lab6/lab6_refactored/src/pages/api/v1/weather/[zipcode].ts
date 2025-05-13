import type { NextApiRequest, NextApiResponse } from "next";

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeatherDetailType | { error: string }>
): Promise<void> {
    if (req.method === "GET") {
        const { zipcode } = req.query;
        if (!zipcode || typeof zipcode !== "string") {
            res.status(400).json({ error: "Invalid zipcode" });
            return;
        }

        res.status(200).json({
            zipcode,
            weather: "sunny",
            temp: 35,
        });
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}
