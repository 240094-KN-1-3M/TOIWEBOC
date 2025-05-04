import express, { Request, Response } from "express";
import { routeHello, routeAPINames, routeWeather } from "./routes.js";

const server = express();
const port = 5000;

server.get('/hello', function (_req: Request, res: Response): void {
    const response = routeHello();
    res.send(response);
});

server.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
    let response = 'Помилка сервера ((';
    try {
        response = await routeAPINames();
    } catch (err) {
        console.log(err);
    }
    res.send(response);
});

server.get(
    "/api/weather/:zipcode",
    function (req: Request, res: Response): void {
        const response = routeWeather({ zipcode: req.params.zipcode });
        res.send(response);
    });

server.listen(port, function () {
    console.log('Listening on ' + port);
});
