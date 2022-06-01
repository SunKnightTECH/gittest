import { request } from 'undici'
import req from 'request'

namespace myrequest {
    export const undicirequest = {
        getrequest: async function (url: string) {
            const { statusCode, headers, trailers, body } = await request(url, {
                method: 'GET',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                },
            })
            return await body.json();
        },
        getrequestnoparse: async function (url: string) {
            const { statusCode, headers, trailers, body } = await request(url, {
                method: 'GET',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                },
            })
            let str = '';
            for await (const data of body) {
                str += await data.toString();
            }
            return str;
        },
        postrequest: async function (url: string, data: any) {
            const { statusCode, headers, trailers, body } = await request(url, {
                method: 'POST',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                },
                body: data
            })
            return await body.json();
        },
        putrequest: async function (url: string, data: any) {
            const { statusCode, headers, trailers, body } = await request(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                },
                body: data
            })
            return await body.json();
        },
        deleterequest: async function (url: string) {
            const { statusCode, headers, trailers, body } = await request(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                }
            })
            return await body.json();
        },

    }
    export const asyncrequest = {
        getrequest: async function (url: string) {
            return await new Promise((resolve, reject) => {
                try {
                    req({
                        url: url,
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                        },
                        method: 'GET',
                    }, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            if (typeof body == 'string') {
                                body = JSON.parse(body)
                            }
                            resolve(body);
                        } else {
                            reject(error);
                        }
                    });
                } catch (ex) {
                    reject(ex);
                }
            })
        },
        getrequestnoparse: async function (url: string) {
            return await new Promise((resolve, reject) => {
                try {
                    req({
                        url: url,
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                        },
                        method: 'GET',
                    }, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            resolve(body);
                        } else {
                            reject(error);
                        }
                    });
                } catch (ex) {
                    reject(ex);
                }
            })
        },
        postrequest: async function (url: string, data: any) {
            return await new Promise((resolve, reject) => {
                try {
                    req({
                        url: url,
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
                        },
                        method: 'POST',
                        json: true,
                        body: data
                    }, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            if (typeof body == 'string') {
                                body = JSON.parse(body)
                            }
                            resolve(body);
                        } else {
                            reject(error);
                        }
                    });
                } catch (ex) {
                    reject(ex);
                }
            })
        }
    }
}
export default myrequest