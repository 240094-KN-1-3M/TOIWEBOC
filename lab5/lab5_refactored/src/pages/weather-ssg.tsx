import { GetStaticProps, NextPage } from "next";
import "@/styles/weather.css";
import { cities } from "@/cities";

interface PageProps {
    times: Record<string, string>;
    cities: City[];
}

const Page: NextPage<PageProps> = ({ times, cities }) => (
    <div className="city_list">
        {cities.map(city => (
            <div className="city" key={city.name}>
                <img src={city.emblem} alt={city.name} />
                <div>{city.name}</div>
                <div>{city.country}</div>
                <div>{times[city.name]}</div>
            </div>
        ))}
    </div>
);

export const getStaticProps: GetStaticProps = async () => {
    const times: Record<string, string> = {};
    cities.forEach(city => {
        times[city.name] = new Date().toLocaleString("uk-UA", { timeZone: city.timezone });
    });
    return { props: { times, cities }, revalidate: 60, };
};

export default Page;
