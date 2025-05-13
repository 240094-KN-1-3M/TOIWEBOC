import type {
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType,
    NextPage,
    PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";
type responseItemType = {
    name: string;
    phoneNumber: string;
};
const NamesSSG: NextPage = (props: InferGetStaticPropsType<typeof
    getStaticProps>) => {
    const output = props.names.map((item: responseItemType, idx: number) => {
        return (
            <li key={'name-${idx}'}>
                {item.name} : {item.phoneNumber}
            </li>
        );
    });
    return (
        <ul>
            {output}
        </ul>
    );
};
export const getStaticProps: GetStaticProps = async (context:
    GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = [];
    try {
        names = await fetchNames();
    } catch (err) { }
    return {
        props: {
            names,
            revalidate: 30
        }
    };
};
export default NamesSSG;
