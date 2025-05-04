import React from "react";
export default function App() {
    const getElement = (weather: string): JSX.Element => {
        const element =
            <h1>The weather is {weather}</h1>; return element;
    };
    return getElement("sunny");
}

import React from "react";
export default function App() {
    interface WeatherProps {
        weather: string;
    }

    const clickHandler = (text: string): void => {
        alert(text);
    };
    const WeatherComponent = (props: WeatherProps): JSX.Element => {
        const text = 'The weather is ${props.weather}';
        return (<h1 onClick={() => clickHandler(text)}>{text}</h1>);
    };
    return (<WeatherComponent weather="sunny" />);
}

import React from "react";
export default function App() {
    interface WeatherProps {
        weather: string;
    }
    type WeatherState = {
        count: number;
    };

    class WeatherComponent extends React.Component<WeatherProps,
        WeatherState> {
        constructor (props: WeatherProps) {
            super(props);
            this.state = {
                count: 0
            };
        }
        componentDidMount() {
            this.setState({ count: 1 });
        }
        clickHandler(): void {
            this.setState({ count: this.state.count + 1 });
        }
        render() {
            return (
                <h1 onClick={() => this.clickHandler()}>
                    The weather is {this.props.weather}, and the counter shows{" "}
                    {this.state.count}
                </h1>
            );
        }
    }
    return (<WeatherComponent weather="sunny" />);
}


import React, { useState, useEffect } from "react";
export default function App() {
    interface WeatherProps {
        weather: string;
    }
    const WeatherComponent = (props: WeatherProps): JSX.Element => {
        const [count, setCount] = useState(0); useEffect(() => { setCount(1) }, []);
        return (
            <h1 onClick={() => setCount(count + 1)}>
                The weather is {props.weather}, and the counter shows {count} </h1>
        );
    };
    return (<WeatherComponent weather="sunny" />);

}

import React, { useState, createContext, useContext } from "react";
export default function App() {
    const ThemeContext = createContext("");
    const ContextComponent = (): JSX.Element => {
        const [theme, setTheme] = useState("dark");
        return (
            <div>
                <ThemeContext.Provider value={theme}>
                    <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
                        Toggle theme
                    </button>
                    <Headline />
                </ThemeContext.Provider>
            </div>
        );
    };
    const Headline = (): JSX.Element => {
        const theme = useContext(ThemeContext);
        return (<h1 className={theme}>Current theme: {theme}</h1>);
    };
    return (<ContextComponent />);
}
