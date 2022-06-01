declare let common: {
    getip: (req: any) => string;
    checkguid: (testID: string) => string;
    getfnd: (len: number) => string;
    checkjson: (str: string) => any;
    isValidURL: (url: string) => boolean;
    isIntNum: (val: string) => boolean;
    randomSort: () => 1 | -1;
};
export default common;
