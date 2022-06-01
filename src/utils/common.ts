
import * as _ from 'lodash'

let common = {
    getip: (req): string => {
        let ip = '';
        if (req.headers['x-forwarded-for']) {
            ip = req.headers['x-forwarded-for'];
        }
        else if (req.headers['x-real-ip']) {
            ip = req.headers['x-real-ip'];
        }
        else if (req.headers['remote_addr'] && req.headers['client_ip']) {
            ip = req.headers['client_ip'];
        }
        else if (req.headers['remote_addr']) {
            ip = req.headers['remote_addr'];
        }
        else if (req.headers['client_ip']) {
            ip = req.headers['client_ip'];
        }
        else {
            ip = "0.0.0.0";
        }
        return ip;
    },
    checkguid: (testID: string) => {
        let reg = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
        if (reg.test(testID)) {
            return testID;
        }
        return null;
    },
    getfnd: (len: number) => {
        let rnd = "";
        for (let i = 0; i < len; i++) rnd += Math.floor(Math.random() * 10);
        return rnd;
    },
    checkjson: function (str: string) {
        let json: any = null;
        try {
            if (typeof JSON.parse(str) == "object") {
                json = JSON.parse(str);
                return json;
            }
        } catch (e) { }
        return json
    },
    isValidURL: function (url: string) {
        let urlRegExp = /^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
        if (urlRegExp.test(url)) {
            return true;
        } else {
            return false;
        }
    },
    isIntNum: function (val: string) {
        let regPos = /^\d+(\.\d+)?$/; //非负浮点数
        let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if (regPos.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    randomSort: () => {
        return Math.random() > 0.5 ? -1 : 1;
    }
}

export default common;