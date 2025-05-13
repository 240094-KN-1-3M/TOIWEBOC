interface City {
    name: string;
    country: string;
    timezone: string;
    emblem: string;
}

interface CityCardProps {
    city: City;
    time: string;
    onClick: () => void;
    isActive: boolean;
}
