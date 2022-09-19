import {API_METHODS, ApiMethodsUnion} from "./types";
import {api} from "./instance";
import {AxiosRequestConfig} from "axios";

export const apiRequest = (method: ApiMethodsUnion, url: string, data?: object, config?: AxiosRequestConfig<any>) => {
    switch (method) {
        case API_METHODS.GET:
            return api.get(url, config);
        case API_METHODS.POST:
            return api.post(url, JSON.stringify(data), {
                validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                }
            });
        case API_METHODS.PUT:
            return api.put(url, JSON.stringify(data), config);
        case API_METHODS.DELETE:
            return api.delete(url, data);
        default:
            return api.get(url, config);
    }
}