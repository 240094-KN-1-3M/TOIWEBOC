import { WeatherInterface } from "../../mongoose/weather/interface";

import {
    findByZip,
    updateByZip,
    storeDocument,
    deleteByZip
} from "../../mongoose/weather/services";

export const resolvers = {
    Query: {
        weather: async (_: any, param: { zip: string }) => {
            const data = await findByZip(param.zip);
            return [data];
        }
    },
    Mutation: {
        // ✅ Create (використовує storeDocument)
        createWeather: async (_: any, param: { data: WeatherInterface }) => {
            const success = await storeDocument(param.data);
            if (success) {
                const data = await findByZip(param.data.zip);
                return [data];
            }
            return [null];
        },

        // ✅ Update (використовує updateByZip)
        updateWeather: async (_: any, param: { data: WeatherInterface }) => {
            const success = await updateByZip(param.data.zip, param.data);
            if (success) {
                const data = await findByZip(param.data.zip);
                return [data];
            }
            return [null];
        },

        // ✅ Delete (використовує deleteByZip)
        deleteWeather: async (_: any, param: { zip: string }) => {
            const success = await deleteByZip(param.zip);
            return success;
        }
    }
};
