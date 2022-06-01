declare namespace myrequest {
    const undicirequest: {
        getrequest: (url: string) => Promise<any>;
        getrequestnoparse: (url: string) => Promise<string>;
        postrequest: (url: string, data: any) => Promise<any>;
        putrequest: (url: string, data: any) => Promise<any>;
        deleterequest: (url: string) => Promise<any>;
    };
    const asyncrequest: {
        getrequest: (url: string) => Promise<unknown>;
        getrequestnoparse: (url: string) => Promise<unknown>;
        postrequest: (url: string, data: any) => Promise<unknown>;
    };
}
export default myrequest;
