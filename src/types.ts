export interface ObjData {
    urlImg: string;
    title: string;
    date: string;
    shortDesc: string;
    detail: {
        orgName: string;
        locate: string;
        info: string;
        jobs: {
            pos: string;
            period: string;
            dos: string[];
        }[];
    };
    id: number;
    status: boolean;
}
[];

type Content = ObjData | undefined;

export default Content;
